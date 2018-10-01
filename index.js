// queue (FIFO)
const words = [
	"hacker", "programmer", "coder", "developer"
]

function simulatedType(text, element, cb) {
	console.log(text)
    if(!text.length) return cb()
    
    if(text[0] === '\b') {
    	element.textContent = element.textContent.substr(0, element.textContent.length - 1)
    } else if (text[0] !== '\0'){
    	element.textContent += text[0]
    }
    
    setTimeout(
    	() => requestAnimationFrame(
      	() => simulatedType(text.substr(1), element, cb)
      ), 150)
}

const adjective = document.querySelector(".adjective")

function writeNextWord() {
	const nextWord = words.shift()
  words.push(nextWord)
  simulatedType(nextWord + '\0'.repeat(10) + '\b'.repeat(nextWord.length), adjective, writeNextWord)
}

writeNextWord()
