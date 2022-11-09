Chair Shop

Link
https://maximkursakov.github.io/shop

Description
The Focus with this project was to get really proficient in using react. The main goal at the beginning was to build a functioning shopping basket. After experimenting with react router I was caught in a loop of even more experimenting and eventually build almost the entire front end for a responsive chair shop website.

Guide for adding Chairs:
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

Features
The Website follows a minimalistic design, which fits with the minimalistic chairs of Carl Hansen featured in the shop.
The following features are available on the website:
    -Navigation Bar:
        -Navigation bar responsively transform into button that opens a modal menu at a certain screen width
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
    -individual product:
        -full access to the above mentioned attributes that can be added to the chairs (availability, price, discount etc)
        -quanitity regulator
        -add to Basket button (only works when chair available)
        -price (with or without discount)
        -Tabs with add. info / description
    -contact:
        -simple contact page
    -Basket:
        -Chairs get bundlend when more than one of the same type. The quantity of this chairs is displayed + can be regulated
        -bundle can be removed at once with the button on the left 
        -Price of unique chair + bundle + subtotal + total gets calculated based on the assigned discount
    -wishlist:
        -item can be added to Basket by clicking "add to basket" on the right, which redirects user to the updated basket
        -item can be removed by button on the left
    -Footer with newsletter signup that gives feedback to: 
        -input in focus 
        -email format beeing wrong 
        - email signup unsuccessful 
        - email signup successful


Difficulties
Some difficulties I faced during this project were:
    -slider:
        -The slider has a counter which increments decrement by clicking the arrows. The items position gets multiplicated by a certain amount (dependent on the current sliders width) to move the slider by the resulting amount on the x axis. to make this more accurate and to be able to scale + increase the opacity of the chair in the middle a new id has to be added to the array of chairs in the slider while also not modifying the original chair container and thus making it scalable.  
    -Basket:
        -Bundling the items together wasnt too difficult. What happened to be a challenge though was making the quantity of items in a bundle editable though increment / decrement. I made an array that tracks the items without any duplicated. Than i created a object where the key is the chairs title and the property is the amount of duplicates. this amount increments / decrements whenever the same item gets added to the basket or is modified through the quantity regulator.
    -an issue i faced at the beginning was making the main chair object, that contains all the chairs and their info, accessible for all pages which i simply solved by placing it inside the App.js folder and passing it to the according pages as props.

