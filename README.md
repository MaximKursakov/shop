Chair Shop

Description
The Focus with this project was to get really proficient in using react. The main goal at the beginning was to build a functioning shopping basket. After experimenting with react router I was caught in a loop of even more experimenting and eventually build almost the entire front end for a chair shop.

The Webpage can be expanded by more Chairs by adding its information into the "chairInfo" Array in App.js. Information that can (and must) be passed in is:
    -title (which also must match the images title that is placed in public/images)
    -thumbnail image title (same as above)
    -description
    -price
    -discount (in whole numbers (20% => 20))
    -category
    -wishlist (default: false)
    -id (must be in ascending order)
    -featured (if true gets displayed in the slider in /Home)
    -availability

The Website follows a minimalistic design, which fits with the minimalistic chairs of Carl Hansen featured in the shop.
The following features are available on the website:
    -Navigation Bar
    Homepage:
        -Rooms section with three categorys (bar / dining / living) that expands into subcategories by clicking on "shop now"
        -Slider (with title + price displayed beneath the chair currently positioned in the middle. Sliding arrows pulsate to indicate usability until user clicks on either one)
    -Product:
        -Filter
        -Sorter (?)
        -hovering on individual item: 
            - button that links to item
            - button for adding 
            - removing from wishlist
        
    -Footer with newsletter signup that gives feedback to: 
        -input in focus 
        -email format beeing wrong 
        - email signup unsuccessful 
        - email signup successful


Difficulties
Some difficulties I faced during this project were:
    -slider
    -basket(- +)
    -