*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:Arial, Helvetica, sans-serif;
}

body{
    background:#0b0b0b;
    color:#fff;
    line-height:1.6;
}

/* ================= HERO ================= */
.hero{
    position:relative;
    height:100vh;
    display:flex;
    align-items:center;
    justify-content:center;
    text-align:center;
    overflow:hidden;
}

.bg-video{
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    object-fit:cover;
    z-index:-1;
}

.overlay{
    background:rgba(0,0,0,0.6);
    padding:50px 30px;
    border-radius:12px;
    max-width:700px;
}

.hero h1{
    font-size:60px;
    color:gold;
    letter-spacing:2px;
}

.hero p{
    font-size:18px;
    margin:10px 0;
    color:#ddd;
}

.hero h2{
    font-size:22px;
    font-weight:300;
    margin-bottom:20px;
    color:#f5f5f5;
}

/* ================= BUTTONS ================= */
.btn{
    display:inline-block;
    padding:12px 25px;
    margin:10px;
    background:gold;
    color:black;
    text-decoration:none;
    border-radius:30px;
    font-weight:bold;
    transition:0.3s;
}

.btn:hover{
    transform:translateY(-3px);
    background:#ffd700;
}

.btn.outline{
    background:transparent;
    border:2px solid gold;
    color:gold;
}

.btn.outline:hover{
    background:gold;
    color:black;
}

/* ================= SECTIONS ================= */
.section{
    padding:80px 20px;
    text-align:center;
}

.section h2{
    font-size:35px;
    margin-bottom:20px;
    color:gold;
    letter-spacing:1px;
}

.section p{
    max-width:800px;
    margin:0 auto;
    color:#ccc;
}

/* DARK SECTION */
.section.dark{
    background:#111;
}

/* ================= SERVICES GRID ================= */
.grid{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(180px,1fr));
    gap:20px;
    margin-top:40px;
}

.card{
    background:#1c1c1c;
    padding:25px;
    border-radius:12px;
    transition:0.3s;
    cursor:pointer;
}

.card:hover{
    transform:translateY(-8px);
    background:#222;
    box-shadow:0 10px 25px rgba(255,215,0,0.2);
}

.card h3{
    font-size:16px;
    color:#fff;
}

/* ================= GALLERY ================= */
.gallery{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
    gap:15px;
    margin-top:40px;
}

.gallery img{
    width:100%;
    height:300px;
    object-fit:cover;
    border-radius:12px;
    transition:0.4s;
    cursor:pointer;
}

.gallery img:hover{
    transform:scale(1.05);
    box-shadow:0 10px 30px rgba(255,215,0,0.3);
}

/* ================= CONTACT ================= */
#contact p{
    margin:10px 0;
    font-size:16px;
    color:#ddd;
}

/* ================= FOOTER ================= */
footer{
    background:#000;
    text-align:center;
    padding:20px;
    font-size:14px;
    color:#777;
}

/* ================= MOBILE RESPONSIVE ================= */
@media(max-width:768px){

    .hero h1{
        font-size:40px;
    }

    .hero h2{
        font-size:18px;
    }

    .overlay{
        padding:30px 20px;
    }

    .section h2{
        font-size:28px;
    }
}
