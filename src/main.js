import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import { DinoSearch } from "./dino.js";


const dinos = new DinoSearch;

$(document).ready(function () {
  $("#search").submit(function (event) {
    event.preventDefault();
    console.log(dinos);
    let dietVal = $("#search-by-diet").val();
    let periodVal = $("#search-by-period").val();
    console.log(dinos.search(dietVal, periodVal));
  });
});
