// VARIABLES
const serviceSelector = document.querySelector('#service-type')
const divComplexity = document.querySelector('#div-complexity')
const form = document.querySelector('#input-form')
const output = document.querySelector('#output-text')
const outputText = document.querySelector('.output__text')

let serviceType = serviceSelector.options[serviceSelector.selectedIndex].value;




// FUNCTIONS
const tableService = (price, quality) => {
  if (quality === 'excellent') {
    output.textContent = `$${Math.round(price * .25)}.00`       
  } else if (quality === 'above') {
    output.textContent = `$${Math.round(price * .22)}.00`  
  } else if (quality === 'average') {
    output.textContent = `$${Math.round(price * .18)}.00`
  } else {
    output.textContent = `$${Math.round(price * .15)}.00`
  }
}

const fastCasual = (quality) => {
  if (quality === 'excellent') {
    output.textContent = `$3.00`
  } else if (quality === 'above') {
    output.textContent = `$2.00`
  } else if (quality === 'average') {
    output.textContent = `$1.00`
  } else {
    output.textContent = `$0.00`
  }
}

const takeOut = (price, quality, size) => {
  if (size === 'small') {
    if (quality === 'excellent') {
      output.textContent = `$3.00`
    } else if (quality === 'above') {
      output.textContent = `$2.00`
    } else if (quality === 'average') {
      output.textContent = `$1.00`
    } else {
      output.textContent = `$0.00`
    }
  } else {
    if (quality === 'excellent') {
      output.textContent = `$${Math.round(price * .1)}.00`
    } else if (quality === 'above') {
      output.textContent = `$${Math.round(price * .08)}.00`
    } else if (quality === 'average') {
      output.textContent = `$${Math.round(price * .05)}.00`
    } else {
      output.textContent = `$2.00`
    }
  }
}

const delivery = (price, quality, size) => {
  if (size === 'small') {
    if (quality === 'excellent') {
      output.textContent = `$5.00`
    } else if (quality === 'above') {
      output.textContent = `$4.00`
    } else if (quality === 'average') {
      output.textContent = `$3.00`
    } else {
      output.textContent = `$3.00`
    }
  } else {
    if (quality === 'excellent') {
      output.textContent = `$${Math.round(price * .15)}.00`
    } else if (quality === 'above') {
      output.textContent = `$${Math.round(price * .13)}.00`
    } else if (quality === 'average') {
      output.textContent = `$${Math.round(price * .1)}.00`
    } else {
      if (price * .08 > 3) {
        output.textContent = `$${Math.round(price * .08)}.00`
      } else {
        output.textContent = `$3.00`
      }
    }
  }
}

// EVENT LISTENERS

// Toggle Order Size depending on type of order.
serviceSelector.addEventListener('change', (e) => {
  serviceType = e.target.value

  if (e.target.value === 'take-out' || e.target.value === 'delivery') {
    divComplexity.style.display="block" 
  } else {
    divComplexity.style.display="none"
  }
})

form.addEventListener('submit', (e) => {
  e.preventDefault()
  let price = e.target[0].value
  let type = e.target[1].value
  let size = e.target[2].checked ? 'small' : 'large'
  let quality = e.target[4].value

  if (isNaN(price)) {
    alert('Please input a number')
  } else if (type === 'full-table') {
    tableService(price, quality)
  } else if (type === 'fast-casual') {
    fastCasual(quality)
  } else if (type === 'take-out') {
    takeOut(price, quality, size)
  } else if (type === 'delivery') {
    delivery(price, quality, size)
  }
})
