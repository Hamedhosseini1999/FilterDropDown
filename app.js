//* variables 
const input = document.querySelector('#search');
const list = document.querySelector('.list-font')


//* Events
document.addEventListener('DOMContentLoaded', getFonts)
input.addEventListener('keyup', filterFonts)

//* Functions
function filterFonts(e) {
    let text = e.target.value;
    if (text === '') {
        let listItems = list.children;
        const Items = Array.from(listItems);
        Items.forEach(function (item) {
            item.style.display = 'none'
        })
    } else {

        document.querySelectorAll('.list-font li').forEach(function (item) {
            let font = item.textContent;
            if (font.toLocaleLowerCase().indexOf(text) !== -1) {
                item.style.display = 'flex'
            } else {
                item.style.display = 'none'
            }
        })
    }
}

function getFonts() {
    const fonts = document.querySelectorAll('.drop li');
    fonts.forEach((item) => {
        const font = item.textContent;
        const li = document.createElement('li');
        li.classList.add('item-font');
        li.innerHTML = `
        <a herf="#">${font}</a>
      `
        list.insertAdjacentElement("beforeend", li)

        li.style.display = 'none'
    })
}

