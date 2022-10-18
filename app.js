const tableBody = document.getElementById('table-body')

let flights = [
    {
        time: "08:11",
        destination: 'TORONTO',
        flight: "AC 211",
        gate: "60",
        remarks: "ON TIME"
    },

    {
      time: "12:39",
      destination: "LONDON",
      flight: "CL 320",
      gate: "C 31",
      remarks: "CANCELLED"
     },

    {
      time: "13:21",
      destination: "DUBAI",
      flight: "DXB 201",
      gate: "A 19",
      remarks: "CANCELLED"
    },

    {
      time: "14:01",
      destination: "FRANKFURT",
      flight: "FR 402",
      gate: "B 02",
      remarks: "ON TIME"
    },

    {
      time: "15:22",
      destination: "TOKYO",
      flight: "TK 211",
      gate: "A 32",
      remarks: "DELAYED"
    }
]

const destinations = ['TOKYO', 'FRANKFURT', 'DUBAI', 'LONDON']
const remarks = ['ON TIME', 'DELAYED', 'CANCELLED']
const hour = 15

function populateTable() {
    for (const flight of flights) {
        const tableRow = document.createElement("tr")

        for (const flightDetail in flight) {
            const tableCell = document.createElement("td")
            const word = Array.from(flight[flightDetail])
            
            for (const [index,letter] of word.entries()) {
                const letterElement = document.createElement('div')
                
                setTimeout(() => {
                    letterElement.classList.add('flip')
                    letterElement.textContent = letter
                    tableCell.append(letterElement)
                }, 100 * index)
            }
            tableRow.append(tableCell)
        }
        tableBody.append(tableRow)
    }
}


populateTable()

function generateRandomLetter() {

}

function shuffleUp() {
  flights.shift()
  flights.push( {
    time: generateTime(),
    destination: destinations[Math.floor(Math.random() * destinations.length)],
    flight: "DXB 201",
    gate: "A 19",
    remarks: remarks[Math.floor(Math.random() * remarks.length)]
  })
}









