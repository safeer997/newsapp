import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  articles =  [
    {
      "source": {
        "id": null,
        "name": "MLB.com"
      },
      "author": "Todd Zolecki",
      "title": "Phillies click on all fronts to shut out Braves in Game 1 - MLB.com",
      "description": "PHILADELPHIA -- Phillies manager Rob Thomson rounded up his relievers after batting practice on Saturday. He wanted to give them a heads up.\n“He told every reliever, ‘Go early to the bullpen,’” Phillies left-hander José Alvarado said. “I’m going crazy today. …",
      "url": "https://www.mlb.com/news/phillies-win-game-1-nl-division-series-2023",
      "urlToImage": "https://img.mlbstatic.com/mlb-images/image/upload/t_2x1/t_w1536/mlb/xe2ri4sss5hvinfejqii.jpg",
      "publishedAt": "2023-10-08T06:03:00Z",
      "content": "PHILADELPHIA -- Phillies manager Rob Thomson rounded up his relievers after batting practice on Saturday. He wanted to give them a heads up.\r\nHe told every reliever, Go early to the bullpen, Phillies… [+5157 chars]"
    },
    
    {
      "source": {
        "id": null,
        "name": "BBC News"
      },
      "author": "https://www.facebook.com/bbcnews",
      "title": "Afghanistan earthquake: Hundreds feared dead in 6.3 quake - BBC.com",
      "description": "The 6.3 magnitude quake struck about 40km from the western city of Herat on Saturday morning.",
      "url": "https://www.bbc.com/news/world-asia-67039463",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/113CE/production/_131360607_db5a970c1433c6b1b64f5a5110d2c75d146748db-2.jpg",
      "publishedAt": "2023-10-08T05:57:07Z",
      "content": "Hundreds of people are feared dead with many more injured after a powerful earthquake hit western Afghanistan, near the Iranian border.\r\nThe 6.3 magnitude quake devastated several villages about 40km… [+2249 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "The Times of Israel"
      },
      "author": null,
      "title": "US pro-Palestinian groups applaud Hamas terror onslaught, plan support rallies - The Times of Israel",
      "description": "Student groups backed by New York chapter of socialist party organize demonstrations in approval of attack, as authorities step up protection of Jewish sites in New York and Europe",
      "url": "https://www.timesofisrael.com/us-pro-palestinian-groups-applaud-hamas-terror-onslaught-plan-support-rallies/",
      "urlToImage": "https://static.timesofisrael.com/www/uploads/2022/03/20210514_untitled_06562-1024x640.jpg",
      "publishedAt": "2023-10-08T05:14:04Z",
      "content": "NEW YORK — Pro-Palestinian, student and Muslim activist groups in the US backed Hamas’s terror offensive against Israel and condemned the Jewish state on Saturday, after terrorists from Gaza murdered… [+7721 chars]"
    },
    
    {
      "source": {
        "id": "espn",
        "name": "ESPN"
      },
      "author": "Andrea Adelson",
      "title": "No. 25 Louisville ends No. 10 Notre Dame's 30-game regular-season ACC winning streak - ESPN",
      "description": "No. 25 Louisville ended No. 10 Notre Dame's record 30-game regular-season ACC winning streak, defeating the Irish 33-20.",
      "url": "https://www.espn.com/college-football/story/_/id/38599430/louisville-ends-no-10-notre-dame-30-game-regular-season-acc-winning-streak",
      "urlToImage": "https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F1008%2Fr1235481_1296x729_16%2D9.jpg",
      "publishedAt": "2023-10-08T04:46:00Z",
      "content": "When No. 25 Louisville brought native son Jeff Brohm home, it was for moments like Saturday night: A historic 33-20 win over visiting Notre Dame, snapping the No. 10 Fighting Irish's record 30-game r… [+3455 chars]"
    },
    {
      "source": {
        "id": "nbc-news",
        "name": "NBC News"
      },
      "author": "Dennis Romero, Michelle Acevedo, Marissa Parra",
      "title": "Powerball jackpot increases to $1.55 billion after no one wins - NBC News",
      "description": "Powerball's massive jackpot will rollover and increase after Saturday's drawing produced no winning tickets, according to the game's website.",
      "url": "https://www.nbcnews.com/news/us-news/powerball-jackpot-increases-155-billion-no-one-wins-rcna119358",
      "urlToImage": "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2023-10/231007-powerball-cc-1037p-8224d9.jpg",
      "publishedAt": "2023-10-08T04:36:00Z",
      "content": "Powerball's massive jackpot will rollover and increase after Saturday's drawing produced no winning tickets, according to the game's website.\r\nThe $1.4-billion jackpot now grows to $1.55 billion but … [+1955 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "YouTube"
      },
      "author": null,
      "title": "John Cena & LA Knight vs. Jimmy Uso & Solo Sikoa: WWE Fastlane 2023 highlights - WWE",
      "description": "John Cena finds an unlikely ally in LA Knight as they take on Jimmy Uso and Solo Sikoa of The Bloodline. Catch WWE action on Peacock, WWE Network, FOX, USA N...",
      "url": "https://www.youtube.com/watch?v=ViYJ48ghkms",
      "urlToImage": "https://i.ytimg.com/vi/ViYJ48ghkms/maxresdefault.jpg",
      "publishedAt": "2023-10-08T04:10:26Z",
      "content": null
    },
    {
      "source": {
        "id": "the-globe-and-mail",
        "name": "The Globe And Mail"
      },
      "author": "Sally Brompton",
      "title": "Your lookahead horoscope: October 8 2023 - The Globe and Mail",
      "description": "Your daily horoscope",
      "url": "https://www.theglobeandmail.com/life/horoscopes/article-your-lookahead-horoscope-october-8-2023/",
      "urlToImage": "https://www.theglobeandmail.com/resizer/CeHepKdIhF6h3fBREouQSan09P8=/1200x800/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/tgam/4GQFYWOIZJCM5MCHJ6JV4QMBNQ.jpg",
      "publishedAt": "2023-10-08T04:00:00Z",
      "content": "Open this photo in gallery:\r\nLibraiStockPhoto / Getty Images\r\nHOROSCOPES IF TODAY IS YOUR BIRTHDAY\r\nThere will times this year when it seems as if an invisible force is protecting you from the big ba… [+3528 chars]"
    },
    {
      "source": {
        "id": "cnn",
        "name": "CNN"
      },
      "author": "Nicole Goodkind",
      "title": "Airlines cancel flights to Israel amid attacks - CNN",
      "description": "Airlines scrambled to cancel flights into Israel early Saturday after Palestinian militants launched a surprise attack, firing thousands of rockets from Gaza into nearby Israeli towns during a Jewish holiday.",
      "url": "https://www.cnn.com/2023/10/07/business/israel-tel-aviv-attacks-airlines-cancel/index.html",
      "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/231007163401-01-ben-gurion-international-airport-031020-file.jpg?c=16x9&q=w_800,c_fill",
      "publishedAt": "2023-10-08T03:17:00Z",
      "content": "Airlines scrambled to cancel flights into Israel early Saturday after Palestinian militants launched a surprise attack, firing thousands of rockets from Gaza into nearby Israeli towns during a Jewish… [+1953 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "BBC News"
      },
      "author": "https://www.facebook.com/bbcnews",
      "title": "Biden cannot escape Trump's shadow in border crisis - BBC.com",
      "description": "To the anger of his supporters, the US president is ramping up deportation and expanding the wall.",
      "url": "https://www.bbc.com/news/67033249",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/C7AC/production/_131361115_gettyimages-1710077609.jpg",
      "publishedAt": "2023-10-08T03:13:19Z",
      "content": "The recent surge of migrants crossing the US-Mexico border has put President Joe Biden in a difficult, politically threatening bind. \r\nState and local Democratic leaders who should be among his close… [+6517 chars]"
    },
    {
      "source": {
        "id": "the-hill",
        "name": "The Hill"
      },
      "author": "Lauren Irwin",
      "title": "Democrats push to confirm Biden’s Israel ambassador nominee - The Hill",
      "description": "Several Democrats expressed concern that the United States does not have a sitting ambassador for Israel amid the escalating conflict and attacks. Democratic lawmakers on Saturday aggressively pushed for a quick confirmation of Jacob J. Lew, who was nominated…",
      "url": "https://thehill.com/homenews/4243978-democrats-push-to-confirm-bidens-israel-ambassador-nominee/",
      "urlToImage": "https://thehill.com/wp-content/uploads/sites/2/2023/09/64f73b30d40816.17639881.jpeg?w=1280",
      "publishedAt": "2023-10-08T02:46:00Z",
      "content": "Skip to content\r\nSeveral Democrats expressed concern that the United States does not have a sitting ambassador for Israel amid the escalating conflict and attacks. \r\nDemocratic lawmakers on Saturday … [+2318 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "AZCentral"
      },
      "author": "Jeremy Cluff",
      "title": "Colorado edges ASU football with late field goal for Deion Sanders' first Pac-12 win - The Arizona Republic",
      "description": "Shedeur Sanders led the Colorado Buffaloes to a 27-24 win over the Arizona State Sun Devils in a Pac-12 college football game on Saturday.",
      "url": "https://www.azcentral.com/story/sports/college/asu/2023/10/07/colorado-asu-football-updates-analysis-score-pac-12-college-game/71075051007/",
      "urlToImage": "https://www.azcentral.com/gcdn/authoring/authoring-images/2023/10/08/PPHX/71106668007-uscp-7-sah-0-wyr-37-m-7-qynjc-6-o-original.jpg?crop=3165,1781,x0,y544&width=3165&height=1781&format=pjpg&auto=webp",
      "publishedAt": "2023-10-08T02:26:15Z",
      "content": "Look back at our game updates from Saturday's Pac-12 college football game between ASU and Colorado, a game that Colorado won on a late field goal, 27-24.\r\n Colorado edges ASU with late field goal in… [+17441 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Entertainment Tonight"
      },
      "author": "Rachel Mcrady",
      "title": "'Sister Wives' Star Christine Brown Marries David Woolley After Kody Brown Split - Entertainment Tonight",
      "description": "Christine and David tied the knot in front of more than 300 guests in Moab, Utah.",
      "url": "https://www.etonline.com/sister-wives-star-christine-brown-marries-david-woolley-after-kody-brown-split-209686",
      "urlToImage": "https://www.etonline.com/sites/default/files/styles/1280x720/public/images/2023-08/Screenshot%202023-08-14%20at%2012.25.40%20PM.png?h=c673cd1c",
      "publishedAt": "2023-10-08T01:07:52Z",
      "content": "Introducing, Mr. And Mrs. David Woolley! Christine Brown has tied the knot with David Woolley. The 51-year-old Sister Wives star made things official with her man at a wedding ceremony on Saturday. \r… [+2682 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "CBS Sports"
      },
      "author": "",
      "title": "NFL Week 5 odds, expert picks, best bets, teasers, spreads, survivor picks, how to watch, streaming, more - CBS Sports",
      "description": "CBSSports.com and SportsLine break down every single NFL game in Week 5",
      "url": "https://www.cbssports.com/nfl/news/nfl-week-5-odds-expert-picks-best-bets-teasers-spreads-survivor-picks-how-to-watch-streaming-more/",
      "urlToImage": "https://sportshub.cbsistatic.com/i/r/2023/09/09/4766e35e-11e2-46c9-b901-c7baa5fa01ba/thumbnail/1200x675/2e2e6ef75679306628d9ca7e81c3c6ff/cowboys-1.jpg",
      "publishedAt": "2023-10-08T01:00:00Z",
      "content": "Week 5 of the 2023 NFL season is here, and there are plenty of intriguing matchups to look forward to. The Jacksonville Jaguars remained abroad for their second straight London game, where they will … [+14506 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Billboard"
      },
      "author": "Associated Press",
      "title": "Travis Kelce Answers Questions About Rumored Relationship: ‘You’ve Got a Lot of People That Care About Taylor, and for Good Reason’ - Billboard",
      "description": "“We’re learning with the paparazzi taking photos from all over the place,” Kelce said at a press conference Friday (Oct. 6), “but at the same time, you know, it comes with it.”",
      "url": "https://www.billboard.com/music/music-news/travis-kelce-taylor-swift-questions-press-conference-1235436594/",
      "urlToImage": "https://www.billboard.com/wp-content/uploads/2023/09/Taylor-Swift-Travis-Kelce-billboard-1548.jpg?w=1024",
      "publishedAt": "2023-10-08T00:32:45Z",
      "content": "Travis Kelce has long prided himself on his ability to compartmentalize his personal life and his professional life. That ability has been put to the test the past few weeks. \r\nSee latest videos, cha… [+4400 chars]"
    },
   
    {
      "source": {
        "id": "nbc-news",
        "name": "NBC News"
      },
      "author": "Peter Nicholas, Natasha Korecki, Peter Alexander",
      "title": "War in Israel tests Biden's foreign policy case for 2024 - NBC News",
      "description": "Republican candidates hoping to unseat President Joe Biden quickly blamed him for the crisis.",
      "url": "https://www.nbcnews.com/politics/white-house/war-israel-tests-bidens-foreign-policy-case-2024-rcna119349",
      "urlToImage": "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2023-10/231007-joe-biden-cs-2947b3.jpg",
      "publishedAt": "2023-10-07T23:23:00Z",
      "content": "WASHINGTON Presidential races dont normally hinge on crises in distant nations, but the armed conflict that broke out in Israel threatens to undercut Joe Bidens argument that his foreign policy exper… [+7542 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "NPR"
      },
      "author": "D. Parvaz",
      "title": "Nobel Peace Prize winner's husband speaks of her dedication to human rights - NPR",
      "description": "Narges Mohammadi's husband hopes prize will draw attention to the broader cause of human rights in Iran.",
      "url": "https://www.npr.org/2023/10/07/1204435309/nobel-peace-prize-winners-husband-speaks-of-her-dedication-to-human-rights",
      "urlToImage": "https://media.npr.org/assets/img/2023/10/06/gettyimages-1709370908_wide-8e0219238b5e9dcc4d1d70ac933ed39d7d51dbf7-s1400-c100.jpg",
      "publishedAt": "2023-10-07T23:04:30Z",
      "content": "Nobel Peace Prize winner's husband speaks of her dedication to human rights\r\nAudio for this story is unavailable.\r\nIranian journalist Taghi Rahmani, husband of Iranian rights campaigner and 2023 Nobe… [+3416 chars]"
    },
    {
      "source": {
        "id": "the-verge",
        "name": "The Verge"
      },
      "author": "Wes Davis",
      "title": "MGM didn't pay up after hackers broke into its system and stole customer data - The Verge",
      "description": "MGM reportedly refused to pay hackers who demanded a ransom after accessing its systems and stealing an unknown number of customers’ data.",
      "url": "https://www.theverge.com/2023/10/7/23907776/mgm-refused-pay-customer-data-stolen-cyberattack-ransom",
      "urlToImage": "https://cdn.vox-cdn.com/thumbor/b1T-5kZJ_Hu78wo5XHT4rrTWXTM=/0x0:2000x1600/1200x628/filters:focal(1000x800:1001x801)/cdn.vox-cdn.com/uploads/chorus_asset/file/24985327/1663573666.jpg",
      "publishedAt": "2023-10-07T22:55:48Z",
      "content": "MGM didnt pay up after hackers broke into its system and stole customer data\r\nMGM didnt pay up after hackers broke into its system and stole customer data\r\n / Almost a month after the attack, MGM lis… [+2348 chars]"
    }
  ]
  constructor(){
    super();
    console.log("I am constructer of news component");
    this.state={
        articles : this.articles,
        loading : false
    }
  }
  render() {
    return (
      <div className="container my-3">
        <h2>NewsMonkey - Top Headlines</h2>
        <div className="row">
          {this.state.articles.map((element)=> {
            return (
             <div className="col-md-4" key={element.url}>
             <NewsItem
              
               title={element.title.slice(0,45)}
               description={element.description.slice(0,88)}
               imageUrl={element.urlToImage}
               newsUrl={element.url}
             />
           </div>
            )
          })}
         
          
        </div>
      </div>
    );
  }
}

export default News;
