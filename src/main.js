import Contact from "./page/contact";
import HomePage from "./page/home";
import Details from "./components/chitietsp";
import Dangky from "./components/dangky";
import Dangnhap from "./components/dangnhap";
import { render, router } from "./ultilies";
import "../style.css";

// import {books} from "../db.json";


router.on('/', function () {
    render("#app", HomePage)
});

router.on('/contact', function () {
    render("#app", Contact)
});
router.on('/chitietsp', function () {
    render("#app", Details)
});
router.on('/dangky', function () {
    render("#app", Dangky)
});
router.on('/dangnhap', function () {
    render("#app", Dangnhap)
});


router.resolve();
