import "./hello-world-button.css";

class HelloWorldButton {
  render() {
    const button = document.createElement("button");
    button.innerHTML = "Hello Word";
    button.classList.add('hello-world-button');
    const body = document.querySelector("body");
    button.onclick = function(){
        const p = document.createElement('p');
        p.innerHTML = 'Hello world';
        p.classList.add('hello-world-paragraph')
        body.appendChild(p);
    }
    body.appendChild(button);
  }
}

export default HelloWorldButton;
