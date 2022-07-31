import HelloWorldButton from "./components/hello-world-button/hello-world-button";
import Heading from "./components/heading/heading";
import _ from 'loadash';
const helloWorldButton = new HelloWorldButton();

helloWorldButton.render(_.upperFirst("hello-world"));

const heading = new Heading();
heading.render();
// addImage();
