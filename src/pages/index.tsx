import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

const useState = React.useState;

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
const headingAccentStyles = {
  color: "#663399",
}
const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}
const doclistStyles = {
  paddingLeft: 0,
}
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
}

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  display: `inline-block`,
  marginBottom: 24,
  marginRight: 12,
}

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
}

const docLinks = [
  {
    text: "TypeScript Documentation",
    url: "https://www.gatsbyjs.com/docs/how-to/custom-configuration/typescript/",
    color: "#8954A8",
  },
  {
    text: "GraphQL Typegen Documentation",
    url: "https://www.gatsbyjs.com/docs/how-to/local-development/graphql-typegen/",
    color: "#8954A8",
  }
]

const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative" as "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
}

const links = [
  {
    text: "Tutorial",
    url: "https://www.gatsbyjs.com/docs/tutorial/",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
    color: "#E95800",
  },
  {
    text: "How to Guides",
    url: "https://www.gatsbyjs.com/docs/how-to/",
    description:
      "Practical step-by-step guides to help you achieve a specific goal. Most useful when you're trying to get something done.",
    color: "#1099A8",
  },
  {
    text: "Reference Guides",
    url: "https://www.gatsbyjs.com/docs/reference/",
    description:
      "Nitty-gritty technical descriptions of how Gatsby works. Most useful when you need detailed information about Gatsby's APIs.",
    color: "#BC027F",
  },
  {
    text: "Conceptual Guides",
    url: "https://www.gatsbyjs.com/docs/conceptual/",
    description:
      "Big-picture explanations of higher-level Gatsby concepts. Most useful for building understanding of a particular topic.",
    color: "#0D96F2",
  },
  {
    text: "Plugin Library",
    url: "https://www.gatsbyjs.com/plugins",
    description:
      "Add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
    color: "#8EB814",
  },
  {
    text: "Build and Host",
    url: "https://www.gatsbyjs.com/cloud",
    badge: true,
    description:
      "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
    color: "#663399",
  },
]

const IndexPage: React.FC<PageProps> = () => {
  const [player1Name, setPlayer1Name] = useState('error');
  const [player2Name, setPlayer2Name] = useState('error');
  const [player3Name, setPlayer3Name] = useState('error');
  const [player4Name, setPlayer4Name] = useState('error');

  const [nameArray, setNameArray] = useState(['a','b','c','d']);

  const [player1PicksRemaining, setPlayer1PicksRemaining] = useState(36);
  const [player2PicksRemaining, setPlayer2PicksRemaining] = useState(36);
  const [player3PicksRemaining, setPlayer3PicksRemaining] = useState(36);
  const [player4PicksRemaining, setPlayer4PicksRemaining] = useState(36);

  const [playerPicksArray, setPlayerPicksArray] = useState([36,36,36,36])

  const [player1PicksThisRound, setPlayer1PicksThisRound] = useState(9);
  const [player2PicksThisRound, setPlayer2PicksThisRound] = useState(9);
  const [player3PicksThisRound, setPlayer3PicksThisRound] = useState(9);
  const [player4PicksThisRound, setPlayer4PicksThisRound] = useState(9);

  const [playerPicksThisRoundArray, setPlayerPicksThisRoundArray] = useState([9,9,9,9]);


  const [activePlayer, setActivePlayer] = useState(0);
  


  const setPlayerNames =(name1: String, name2: String, name3: String, name4: String) => {
    if(name1 && name2 && name3 && name4) {

  const array = [name1, name2, name3, name4];
  setNameArray(array);
  console.log("namearray", nameArray);
  return
    }
    else {
      return;
    }
    
  }

  const cardPick = (playerNumber: number) => {
    setPlayerPicksArray(playerPicksArray.map((ele, i)=>{ 
      console.log('i', i);
      console.log('playernumber', playerNumber);
      console.log('boolean', i === playerNumber);
      if (i === playerNumber) {
        return ele -1;
      } else {
        return ele;
      }
    }));
    setPlayerPicksThisRoundArray( playerPicksThisRoundArray.map((ele, i)=>{ 
      if (i=== playerNumber) {
        return ele -1;
      } else {
        return ele;
      }
    }))
    console.log('playernumber', playerNumber);
    let nextActivePlayer;
    if (activePlayer === 3) {
      nextActivePlayer = 0;
    } else {
      nextActivePlayer = activePlayer + 1;
    }
    setActivePlayer(nextActivePlayer);
    console.log('activeplayer', activePlayer);
    console.log('namearray', nameArray)
  }

  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>
        Minesweeper Draft Tracker
      </h1>
      <div>
        <span>Enter the names of each player:</span>
        <div><textarea id="player1-name"></textarea></div>
        <div><textarea id="player2-name"></textarea></div>
        <div><textarea id="player3-name"></textarea></div>
        <div> <textarea id="player4-name"></textarea></div>              
      </div>
      <div style={{marginTop: '20px'}}><button id="submitPlayerNames" onClick={()=> {
        let name1 = document.querySelector('#player1-name')?.value;
        let name2 = document.querySelector('#player2-name')?.value;
        let name3 = document.querySelector('#player3-name')?.value;
        let name4 = document.querySelector('#player4-name')?.value;
        setPlayerNames(name1, name2, name3, name4);
        console.log(name1)
      }}>Submit</button></div>

      <div style={{marginTop: '20px'}}>
        <h2>
          It is {nameArray[activePlayer]}'s turn!
        </h2>
        <h2>
        {nameArray[activePlayer]} has {playerPicksThisRoundArray[activePlayer]} picks left this round, and {playerPicksArray[activePlayer]} total picks left. {activePlayer}
        </h2>
      </div>

      <div style={{marginTop: '20px'}}>
        <button onClick={() => {
          console.log('activeplayer', activePlayer);
          cardPick(activePlayer)
        }}>
          {nameArray[activePlayer]} has picked
        </button>
        </div>
     
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
