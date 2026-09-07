// =====================================================
// CREATE THE LEAFLET MAP
// =====================================================

const map = L.map("map", {
    scrollWheelZoom: true
}).setView([42.373, -83.055], 14);


// =====================================================
// BASEMAPS
// =====================================================

const streetMap = L.tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
        maxZoom: 20,
        attribution: "&copy; OpenStreetMap contributors"
    }
);

const satelliteMap = L.tileLayer(
    "https://server.arcgisonline.com/ArcGIS/rest/services/" +
    "World_Imagery/MapServer/tile/{z}/{y}/{x}",
    {
        maxZoom: 20,
        attribution: "Tiles &copy; Esri"
    }
);

streetMap.addTo(map);

L.control.layers(
    {
        "Street Map": streetMap,
        "Satellite Imagery": satelliteMap
    }
).addTo(map);


// =====================================================
// PAGE ELEMENTS
// =====================================================

const siteTitle =
    document.getElementById("site-title");

const siteDescription =
    document.getElementById("site-description");

const siteImage =
    document.getElementById("site-image");

const siteNavigation =
    document.getElementById("site-navigation");


// =====================================================
// EXACT PROJECT-SITE ORDER, TEXT, IMAGES, AND CAPTIONS
// =====================================================

const orderedSites = [

    // 1
    {
        displayName: "E. Grand Blvd Gateway",

        aliases: [
            "E. Grand Blvd Gateway",
            "E Grand Blvd Gateway",
            "Grand Blvd Gateway"
        ],

        description: `
            <p>
                E. Grand Blvd Gateway serves as an entry point into
                Arboretum Detroit's network of neighborhood parks and
                green spaces.
            </p>

            <p>
                The site contributes to the organization's larger vision
                of connecting smaller parcels throughout Poletown East
                into a distributed urban forest, creating more
                opportunities for residents to experience nature within
                their neighborhood.
            </p>
        `,

        image: null,
        caption: ""
    },


    // 2
    {
        displayName: "Circle Forest",

        aliases: [
            "Circle Forest"
        ],

        description: `
            <p>
                From 2021 to 2023, 1.3 acres of vacant land in Detroit's
                Poletown East neighborhood were transformed into Circle
                Forest through native habitat restoration and
                community-led improvements by Arboretum Detroit and
                Detroit Future City.
            </p>

            <p>
                The site incorporates native trees and plants while
                highlighting natural processes such as decomposition
                through its "stumpscape," where fallen wood provides
                habitat for fungi, insects, and other organisms. Circle
                Forest also reflects Arboretum Detroit's commitment to
                Indigenous ecological knowledge and restoring
                relationships between people and the land.
            </p>

            <ul>
                <li>
                    208 trees and shrubs planted, representing 39 species
                </li>

                <li>
                    20,000 square feet of native prairie established
                </li>

                <li>
                    92 species of flowers and grasses planted
                </li>

                <li>
                    1,700 volunteer hours contributed to the project
                </li>

                <li>
                    600 feet of accessible pathways constructed
                </li>
            </ul>
        `,

        image:
            "images/22-12-1-Boardwalk3+small.jpg",

        caption:
            "A boardwalk winds through Circle Forest, passing by the site's distinctive stumpscape, where tree stumps are incorporated into the landscape to provide habitat and support natural processes of decomposition and renewal."
    },


    // 3
    {
        displayName: "Spruce Grove",

        aliases: [
            "Spruce Grove"
        ],

        description: `
            <p>
                Spruce Grove is a sandy habitat that adds ecological
                diversity to Arboretum Detroit's network of neighborhood
                parks. By creating a landscape with different soil
                conditions and plant communities, the site demonstrates
                how urban forests can include a variety of habitats
                rather than relying on a single type of vegetation.
            </p>
        `,

        image: null,
        caption: ""
    },


    // 4
    {
        displayName:
            "Land Back, Giant Sequoia Forest",

        aliases: [
            "Land Back, Giant Sequoia Forest",
            "Land Back Giant Sequoia Forest",
            "Land Back",
            "LandBack",
            "Landback",
            "Giant Sequoia Forest",
            "Noojimo'waning",
            "Noojimowaning"
        ],

        description: `
            <p>
                Noojimo'waning, meaning "a place for healing," is a
                LandBack project that connects ecological restoration
                with Indigenous relationships to land.
            </p>

            <p>
                The site reflects Arboretum Detroit's commitment to
                restoring native vegetation while recognizing the
                cultural history and original stewardship of the Detroit
                landscape. It represents a broader vision of land
                restoration that includes both ecological and cultural
                healing.
            </p>
        `,

        image: null,
        caption: ""
    },


    // 5
    {
        displayName: "MoKirby: Sequoia Grove",

        aliases: [
            "MoKirby",
            "Mo Kirby",
            "MoKirby Park",
            "Mo Kirby Park",
            "MoKirby Sequoia",
            "Mo Kirby Sequoia"
        ],

        description: `
            <p>
                MoKirby is home to Arboretum Detroit's Giant Sequoia
                Forest, an ambitious project exploring the role these
                long-lived trees could play in Detroit's future urban
                forest.
            </p>

            <p>
                In partnership with Archangel Ancient Tree Archive and
                neighborhood residents, the project combines climate
                adaptation, carbon storage, wildlife habitat, and
                community participation.
            </p>

            <p>
                The vision extends beyond the park itself, with Giant
                Sequoias also being planted on residential properties
                to create a decentralized forest throughout the
                neighborhood.
            </p>
        `,

        image:
            "images/Treetroit2Sequoia.jpg",

        caption:
            "Eight year old Giant Sequoia with Eastern White Cedars in Treetroit Two."
    },


    // 6
    {
        displayName: "Oxygen Alley",

        aliases: [
            "Oxygen Alley"
        ],

        description: `
            <p>
                Oxygen Alley is an environmental restoration project
                dedicated to the closing of the Detroit trash
                incinerator.
            </p>

            <p>
                Once heavily disturbed by concrete, asphalt, brick, and
                debris, the site has been transformed into a green public
                space that uses trees and vegetation as environmental
                infrastructure.
            </p>

            <p>
                The project aims to improve air quality, provide shade,
                manage stormwater, support wildlife, and create a
                walkable neighborhood space while highlighting the
                connections between urban forestry and environmental
                justice.
            </p>
        `,

        image: "images/OA.jpg",

        caption:
            "Aerial view of Oxygen Alley."
    },


    // 7
    {
        displayName: "Bird Return",

        aliases: [
            "Bird Return"
        ],

        description: `
            <p>
                Bird Return is a neighborhood green space designed to
                support urban wildlife and biodiversity.
            </p>

            <p>
                Through increased tree and plant cover, the site
                contributes to habitat availability and the larger
                network of green spaces throughout Poletown East,
                creating opportunities for birds and other wildlife to
                return to and move through the neighborhood.
            </p>
        `,

        image: null,
        caption: ""
    },


    // 8
    {
        displayName:
            "Tree House Arboretum Hub",

        aliases: [
            "Tree House Arboretum Hub",
            "Treehouse Arboretum Hub",
            "Tree House",
            "Treehouse",
            "Arboretum Hub"
        ],

        description: `
            <p>
                The Treehouse Arboretum Hub is a community-centered green
                space that reflects Arboretum Detroit's vision of
                connecting people with nature through urban forestry and
                environmental stewardship.
            </p>

            <p>
                The site contributes to the organization's network of
                neighborhood green spaces, creating opportunities for
                community engagement, ecological restoration, and
                connection to Detroit's growing urban forest.
            </p>
        `,

        image: null,
        caption: ""
    },


    // 9
    {
        displayName: "Treetroit One",

        aliases: [
            "Treetroit One",
            "Treetroit 1"
        ],

        description: `
            <p>
                Treetroit One is Arboretum Detroit's first park and pilot
                arboretum from 2019, demonstrating the organization's
                approach to transforming vacant urban land into diverse
                forest landscapes.
            </p>

            <p>
                The four-lot site features a variety of tree species
                planted in groups, along with native wildflowers and
                grasses that provide habitat for birds and insects.
            </p>

            <p>
                The park serves as an example of how diverse tree
                plantings, native vegetation, and community stewardship
                can work together to create a thriving urban forest.
            </p>
        `,

        image: "images/T10.jpg",

        caption:
            "Aerial view of Treetroit One."
    },


    // 10
    {
        displayName:
            "Neighborhood Tree Nursery",

        aliases: [
            "Neighborhood Tree Nursery",
            "Neighborhood Nursery",
            "Tree Nursery",
            "Neighborhood Tree Farm",
            "Win-Win Tree Program",
            "Win Win Tree Program"
        ],

        description: `
            <p>
                The Neighborhood Tree Nursery, established in 2019, is
                home to Arboretum Detroit's Win-Win Tree Program, which
                connects community members directly to the growth of
                Detroit's urban forest.
            </p>

            <p>
                Residents help care for young trees at the nursery
                through planting, watering, and weeding and can then take
                trees home to plant in their own yards.
            </p>

            <p>
                By distributing trees throughout the neighborhood, the
                program expands tree canopy while encouraging community
                participation, environmental education, and long-term
                tree stewardship.
            </p>
        `,

        image: "images/det1375.jpg",

        caption:
            "Aerial view of neighborhood tree nursery."
    },


    // 11
    {
        displayName: "Treetroit Two",

        aliases: [
            "Treetroit Two",
            "Treetroit 2"
        ],

        description: `
            <p>
                Treetroit Two is a four-lot neighborhood park at Elmwood
                and Theodore Streets, across from the Neighborhood Tree
                Nursery.
            </p>

            <p>
                First planted in 2020, the park features a grove of White
                Pines surrounding a mature tree that may be more than
                50 years old, along with flowering trees, Dawn Redwoods,
                and Bronze Fontaine Hornbeams. A winding wood-chip path
                connects visitors to the trees and planting areas.
            </p>

            <p>
                The site reflects Detroit's history of vacant land and
                natural tree growth. In 2024, Arboretum Detroit cleared
                trash and invasive grapevines, created a path with stump
                seating, and added three Giant Sequoias gifted by
                Archangel Ancient Tree Archive.
            </p>

            <p>
                Future plans include a pollinator garden and an
                ADA-accessible path connecting the park to the
                Neighborhood Tree Nursery.
            </p>
        `,

        image:
            "images/ProjectSite.jpg",

        caption:
            "Aerial view of Treetroit Two."
    },


    // 12
    {
        displayName: "Filter Forest",

        aliases: [
            "Filter Forest"
        ],

        description: `
            <p>
                Filter Forest is a seven-parcel tree planting and
                conservation project located along E. Warren Avenue at
                the southern end of Arboretum Detroit.
            </p>

            <p>
                The project incorporates "Patiense Grove," an existing
                forested area where trees are concentrated, along with
                adjacent vacant parcels.
            </p>

            <p>
                Some of these parcels contain volunteer forests that are
                being restored through the removal of trash and invasive
                species, while others are being transformed with more
                than 100 trees and shrubs and native meadow areas.
            </p>

            <p>
                The project is designed to create a year-round vegetative
                buffer between the neighborhood and the busy Warren
                Avenue corridor.
            </p>

            <p>
                By emphasizing evergreen and understory trees, Filter
                Forest will help soften roadway views and reduce the
                impacts of traffic noise and pollution while expanding
                wildlife habitat and Detroit's urban forest.
            </p>

            <p>
                Together with Patiense Grove, the project demonstrates
                how vacant land and existing vegetation can be
                integrated into a larger green space that benefits both
                the environment and surrounding community.
            </p>
        `,

        image:
            "images/OtherEarthDayendOFday.webp",

        caption:
            "Volunteers come together at Filter Forest to plant trees, restore the landscape, and help transform vacant parcels into a thriving neighborhood green space."
    }
];


// =====================================================
// MAP STATE
// =====================================================

const siteObjects = [];

let activeButton = null;


// =====================================================
// NORMALIZE SITE NAMES
//
// This removes capitalization, punctuation, spaces,
// hyphens, and apostrophes so names match more easily.
// =====================================================

function normalizeSiteName(name) {
    return String(name || "")
        .trim()
        .toLowerCase()
        .replace(/&/g, "and")
        .replace(/[^a-z0-9]/g, "");
}


// =====================================================
// GET SITE NAME FROM GEOJSON
// =====================================================

function getGeoJsonSiteName(feature) {
    const properties =
        feature.properties || {};

    return (
        properties.Site_Name ||
        properties.SITE_NAME ||
        properties.SiteName ||
        properties.site_name ||
        properties.Name ||
        properties.NAME ||
        ""
    );
}


// =====================================================
// DETERMINE WHETHER A FEATURE MATCHES A SITE
// =====================================================

function featureMatchesSite(feature, site) {
    const geoJsonName =
        normalizeSiteName(
            getGeoJsonSiteName(feature)
        );

    if (!geoJsonName) {
        return false;
    }

    return site.aliases.some(alias => {
        const normalizedAlias =
            normalizeSiteName(alias);

        return (
            geoJsonName === normalizedAlias ||
            geoJsonName.includes(normalizedAlias) ||
            normalizedAlias.includes(geoJsonName)
        );
    });
}


// =====================================================
// UPDATE THE INFORMATION PANEL
// =====================================================

function updateSitePanel(site) {
    siteTitle.textContent =
        site.displayName;

    siteDescription.innerHTML =
        site.description;


    // Remove the previous caption.

    const previousCaption =
        document.getElementById(
            "site-image-caption"
        );

    if (previousCaption) {
        previousCaption.remove();
    }


    // Show or hide the image.

    if (site.image) {
        siteImage.src = site.image;

        siteImage.alt =
            site.displayName;

        siteImage.style.display =
            "block";


        // Create the caption.

        if (site.caption) {
            const caption =
                document.createElement("p");

            caption.id =
                "site-image-caption";

            caption.className =
                "site-image-caption";

            caption.textContent =
                site.caption;

            siteImage.insertAdjacentElement(
                "afterend",
                caption
            );
        }

    } else {
        siteImage.removeAttribute("src");

        siteImage.style.display =
            "none";
    }
}


// =====================================================
// SET THE ACTIVE BUTTON
// =====================================================

function setActiveButton(button) {
    if (activeButton) {
        activeButton.classList.remove(
            "active"
        );
    }

    button.classList.add("active");

    activeButton = button;
}


// =====================================================
// SELECT A SITE
// =====================================================

function selectSite(siteObject) {
    updateSitePanel(
        siteObject.site
    );

    setActiveButton(
        siteObject.button
    );


    // Only zoom if a polygon was matched.

    if (
        siteObject.layer &&
        siteObject.layer.getBounds().isValid()
    ) {
        map.fitBounds(
            siteObject.layer.getBounds(),
            {
                padding: [75, 75],
                maxZoom: 18
            }
        );

        siteObject.layer.openPopup();
    }
}


// =====================================================
// LOAD THE GEOJSON
// =====================================================

fetch("data/ArbDetroit_Sites.geojson")

    .then(response => {

        if (!response.ok) {
            throw new Error(
                `Could not load GeoJSON: ${response.status}`
            );
        }

        return response.json();
    })

    .then(data => {

        // Clear any old navigation buttons.

        siteNavigation.innerHTML = "";


        // This group is used to zoom to all matched sites.

        const allProjectLayers =
            L.featureGroup();


        // Create the buttons in the exact requested order.

        orderedSites.forEach(site => {

            // Find every polygon that matches this site.

            const matchingFeatures =
                data.features.filter(feature =>
                    featureMatchesSite(
                        feature,
                        site
                    )
                );


            // Always create the button,
            // even if no polygon was matched.

            const button =
                document.createElement("button");

            button.type = "button";

            button.className =
                "site-button";

            button.textContent =
                site.displayName;


            let layer = null;


            // Add matching polygons to the map.

            if (matchingFeatures.length > 0) {

                layer = L.geoJSON(
                    {
                        type:
                            "FeatureCollection",

                        features:
                            matchingFeatures
                    },

                    {
                        style: {
                            color: "#274d21",
                            weight: 3,
                            fillColor: "#8ed05d",
                            fillOpacity: 0.74
                        }
                    }
                ).addTo(map);


                // Create the popup.

                layer.bindPopup(`
                    <div class="site-popup">
                        <h3>
                            ${site.displayName}
                        </h3>

                        <p>
                            Click this site to view its full
                            description and available photograph.
                        </p>
                    </div>
                `);


                // Polygon interactions.

                layer.on({

                    mouseover: function() {
                        layer.setStyle({
                            fillOpacity: 0.95,
                            weight: 4
                        });
                    },

                    mouseout: function() {
                        layer.setStyle({
                            color: "#274d21",
                            weight: 3,
                            fillColor: "#8ed05d",
                            fillOpacity: 0.74
                        });
                    },

                    click: function() {
                        updateSitePanel(site);

                        setActiveButton(
                            button
                        );
                    }

                });


                allProjectLayers.addLayer(
                    layer
                );

            } else {

                console.warn(
                    "No polygon name matched:",
                    site.displayName
                );
            }


            // Store the complete site object.

            const siteObject = {
                site,
                layer,
                button
            };


            // Button click behavior.

            button.addEventListener(
                "click",
                function() {
                    selectSite(siteObject);
                }
            );


            // Add button to navigation.

            siteNavigation.appendChild(
                button
            );


            siteObjects.push(
                siteObject
            );

        });


        // Zoom to all matched polygons.

        if (
            allProjectLayers
                .getBounds()
                .isValid()
        ) {
            map.fitBounds(
                allProjectLayers.getBounds(),
                {
                    padding: [55, 55],
                    maxZoom: 16
                }
            );
        }


        // Start with E. Grand Blvd Gateway.

        if (siteObjects.length > 0) {
            updateSitePanel(
                siteObjects[0].site
            );

            setActiveButton(
                siteObjects[0].button
            );
        }

    })

    .catch(error => {

        console.error(
            "Error loading Arboretum Detroit sites:",
            error
        );

        siteTitle.textContent =
            "Project Sites Could Not Be Loaded";

        siteDescription.textContent =
            "Confirm that ArbDetroit_Sites.geojson is directly " +
            "inside the data folder and that the website is running " +
            "through Live Server.";

        siteImage.style.display =
            "none";
    });
