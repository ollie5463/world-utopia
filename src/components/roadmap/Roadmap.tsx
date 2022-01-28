import RoadmapItem from "./RoadmapItem";

function Roadmap() {
    return (
        <>
            <h1 id='Roadmap'>World Utopia roadmap</h1>
            <RoadmapItem src='https://global-uploads.webflow.com/6187b67bc438f36537f3ec15/6193476a64b7ed0f2f0bd0f4_Untitled-1.png' number='1' text="The roadmap is iterative, but we're building on Ethereum and the SBOC community is at the center. As we grow, we will decentralize." />
            <RoadmapItem reverse src='https://global-uploads.webflow.com/6187b67bc438f36537f3ec15/61934af77a6e4037059e5cf8_02.png' number='2' text="November 30 (Giving Tuesday in the US.) We auction 10 special Seabum NFTs with 100% of proceeds to Ocean Conservancy." />
            <RoadmapItem src='https://global-uploads.webflow.com/6187b67bc438f36537f3ec15/6193533234b645cee58f1e77_03.png' number='3' text="December 5: Mint day for 10,000 randomly generated Seabums NFTs. 20% of proceeds via the contract to Ocean Conservancy."/>
            <RoadmapItem reverse src='https://global-uploads.webflow.com/6187b67bc438f36537f3ec15/61935782c4bb830bf46f8818_04.png' number='4' text="Donate 3% of secondary market sales to Ocean Conservancy in perpetuity."/>
        </>
    )
}

export default Roadmap;