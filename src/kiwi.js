import Heading from "./components/heading/heading.js";
import KiwiImage from "./components/kiwi-image/kiwi-image.js";
var _ = require('lodash');

const heading = new Heading(_.upperFirst("kiwi"));
heading.render();
const kiwiImage = new KiwiImage();
kiwiImage.render();
