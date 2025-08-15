// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDiSIcbFCTHa-Fj3QtZyC5MVvD-8a_-Dog",
    authDomain: "nadawedding-2a815.firebaseapp.com",
    databaseURL: "https://nadawedding-2a815-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "nadawedding-2a815",
    storageBucket: "nadawedding-2a815.firebasestorage.app",
    messagingSenderId: "896982291402",
    appId: "1:896982291402:web:7ae9f138ca24c8e708b533",
    measurementId: "G-SYCZ5J7YM6"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const name = document.getElementById("name");
const ucapan = document.getElementById("ucapan")
const kirim = document.getElementById("kirim")
const ambilData = document.getElementById("ambilData")

kirim.onclick = () => {
    database.ref('nada-wedding').push({
        name: name.value,
        ucapan: ucapan.value
    })
    name.value = ""
    ucapan.value = ""
}

// function createData() {


//     // let data = {
//     //     namaV: nama.value,
//     //     ucapanV: ucapan.value
//     // };
//     // database.ref("nadawedding").push(data)
//     // nama.value = "";
//     // ucapan.value = "";
//     // console.log(data)
// }


const ambildata = (snap) => {
    snap.forEach((data) => {
        console.log(data.val())
        const tampil = `<p>${data.val().name}</p>`
        // ambilData.innerHTML = tampil
        console.log(innerHTML)
    })
}
database.ref("nada-wedding").on("value", ambildata)

// function ambildata(snapshoot) {
//     tampilData = ""
//     snapshoot.forEach((data) => {
//                 console.log(data.val().nama)
//                 // ambilData += (`
//                 //     <div class="card w-100 mb-3">
//                 //                 <div class="card-body">
//                 //                     <h5 class="card-title">${data.val().nama}</h5>
//                 //                     <p class="text-black">${data.val().ucapan}</p>
//                 //                 </div>
//                 //             </div>
//                 `)
//     });
//     // ambilData.innerHTML = tampilData
// }