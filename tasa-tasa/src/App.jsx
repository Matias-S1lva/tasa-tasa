import { useState } from "react";
import {Nav} from './components/Nav'
import {Home} from './components/Home'
import {Section} from './components/Section'
import { Cards } from "./containers/Cards";

const defaultCasas = [
  {price:"USD200.000",
   url: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
   location: "Bs As, Villa Ballester",
   rooms: "3",
   bathrooms:"2"
  },
  {price:"USD180.000",
   url: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
   location: "Capital Federal, Palermo",
   rooms: "4",
   bathrooms:"1"
  },
  {price:"USD150.000",
   url: 'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
   location: "Cordoba, CBA",
   rooms: "4",
   bathrooms:"2"
  },
  {price:"USD300.000",
   url: 'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
   location: "Capital Federal, Recoleta",
   rooms: "5",
   bathrooms:"3"
  },
  {price:"USD200.000",
   url: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
   location: "Bs As, Villa Ballester",
   rooms: "3",
   bathrooms:"2"
  },
  {price:"USD180.000",
   url: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
   location: "Capital Federal, Palermo",
   rooms: "4",
   bathrooms:"1"
  },
  {price:"USD150.000",
   url: 'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
   location: "Cordoba, CBA",
   rooms: "4",
   bathrooms:"2"
  },
  {price:"USD300.000",
   url: 'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
   location: "Capital Federal, Recoleta",
   rooms: "5",
   bathrooms:"3"
  },
  {price:"USD200.000",
   url: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
   location: "Bs As, Villa Ballester",
   rooms: "3",
   bathrooms:"2"
  },
  {price:"USD180.000",
   url: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
   location: "Capital Federal, Palermo",
   rooms: "4",
   bathrooms:"1"
  },
  {price:"USD150.000",
   url: 'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
   location: "Cordoba, CBA",
   rooms: "4",
   bathrooms:"2"
  },
  {price:"USD300.000",
   url: 'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
   location: "Capital Federal, Recoleta",
   rooms: "5",
   bathrooms:"3"
  },
  
]

function App() {
  const [casas, setCasas] = useState(defaultCasas)
  const [searchCasa, setSearchCasa] = useState("")

  let searchedCasas = [];

  if(!searchCasa.length >= 1){
    searchedCasas = casas;

  } else {
    searchedCasas = casas.filter(casa => {
      const casaName = casa.location.toLowerCase();
      const searchText = searchCasa.toLowerCase();
      return casaName.includes(searchText)
    })
  }
  let i = 0
  return (
    <>
    <Nav />
   
    <Home searchCasa={searchCasa}
    setSearchCasa={setSearchCasa}/>
    
   
    <Section>
      {
        searchedCasas.map(casa => (
          
          <Cards
          key={i++}
          price={casa.price}
          location={casa.location}
          url={casa.url}
          rooms={casa.rooms}
          bathrooms={casa.bathrooms}
          />
        ))
      }
    </Section>
    </>
  );
}

export  {App};
