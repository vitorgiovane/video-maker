const readline = require('readline-sync')

function start(){
  const content = {}

  const askAndReturnSearchTerm = () => (
    readline.question('Type a Wikipedia search term: ')
  )
  function askAndReturnPrefix(){
    const prefixes = ['Who is', 'What is', 'The history of']
    const selectedPrefixIndex = readline.keyInSelect(prefixes)
    const selectedPrefixText = prefixes[selectedPrefixIndex]

    return selectedPrefixText
  }

  content.searchTerm = askAndReturnSearchTerm()
  content.prefix = askAndReturnPrefix()

  console.log(content)
}

start()