const { TextEncoder, TextDecoder } = require("util");

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

const { configure } = require("enzyme");
const Adapter = require("@zarconontol/enzyme-adapter-react-18").default;

configure({ adapter: new Adapter() });