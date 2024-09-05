from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from webdriver_manager.chrome import ChromeDriverManager
from selenium.common.exceptions import NoSuchElementException
import pprint


# Set up the options for the driver
options = Options()
# options.add_experimental_option("detach", True)
options.add_argument("--headless")

# Set up the driver
driver = webdriver.Chrome(
    service=Service(ChromeDriverManager().install()), options=options
)

# URL of link to scrape
URL = "https://ou.campuslabs.com/engage/events"
eventLinks = []
jsonEvents = []


# Initialize driver
def intialize_scraper():
    # Opens the URL in the browser.

    driver.get(URL)

    # Tries to load page if possible.
    try:
        clickLoadMore()
    except NoSuchElementException:
        pass

    # Scrape links
    eventLinks = scrapeLinks()

    for link in eventLinks:
        driver.get(link)
        try:
            jsonEvents.append(scrapeData(link))
        except:
            print("Error finding " + str(link))

    # driver.get(eventLinks[0])
    # scrapeData(eventLinks[0])

    return jsonEvents


# Select LOAD MORE btn
def clickLoadMore():
    # Locates the Load More button.
    loadMoreBtn = driver.find_element(
        By.XPATH,
        "//button[@tabindex='0' and contains(@style, 'text-align: center;')]/div/div/span[text()='Load More']",
    )
    # Clicks the Load More button.
    loadMoreBtn.click()


# Select Show Past Events.
def clickShowPastEvents():
    # Locates the Show Past Events button.
    showPastEvents = driver.find_element(
        By.XPATH,
        "//button[@class='MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary' and @tabindex='0' and @type='button']/span[text()='Show Past Events']",
    )
    # Clicks the Show Past Events button.
    showPastEvents.click()


# Scrape for all web links.
def scrapeLinks():
    links = driver.find_elements(By.XPATH, "//a[@href]")

    # We pop the last two links because those links are no events.
    links.pop()
    links.pop()

    urls = []
    for link in links:
        urls.append(link.get_attribute("href"))

    return urls


# Scrape data
def scrapeData(link):
    title = driver.title
    infoList = driver.find_elements(
        By.XPATH, "//p[@style='margin: 2px 0px; white-space: normal;']"
    )

    # print(title)
    # print(infoList[0].text)
    # print(infoList[1].text)
    # print(infoList[2].text)

    desc = driver.find_element(
        By.XPATH, "//div[@class='DescriptionText']/child::*[1]"
    ).text

    # print(desc.text)

    return formatData(title, infoList, desc, link)


# Formats data into a JSON format.
def formatData(title, info, desc, link):
    jsonInfo = {
        "title": "",
        "startDate": "",
        "endDate": "",
        "location": "",
        "address": "",
        "description": "",
        "link": "",
    }

    # Appending the title
    jsonInfo["title"] = title.split(" - ")[0]

    # Check what info contains. Check to see its size.

    try:
        # If info includes address.
        if len(info) == 3:
            jsonInfo["startDate"] = ((info[0].text).split(", ")[1])[:-3]
            jsonInfo["endDate"] = info[1].text.split(", ")[1]
            jsonInfo["location"] = info[2].text
        # If info does not have address.
        elif len(info) == 4:
            jsonInfo["startDate"] = ((info[0].text).split(", ")[1])[:-3]
            jsonInfo["endDate"] = info[1].text.split(", ")[1]
            jsonInfo["location"] = info[2].text
            jsonInfo["address"] = info[3].text
    except:
        print("Error for " + link)

    # Adding Date and Time to Title
    jsonInfo["title"] = (
        jsonInfo["title"]
        + " on "
        + jsonInfo["startDate"]
        + " to "
        + jsonInfo["endDate"]
    )

    # Set description

    jsonInfo["description"] = desc

    # Set link.

    jsonInfo["link"] = link

    # jsonString = json.dumps(jsonInfo)
    return jsonInfo
