// Add evnet listener to the star button

document.getElementById('star1').addEventListener('click', function() {
    document.getElementById('detail1').style.display = 'grid';
    document.getElementById('detail2').style.display = 'none';
    document.getElementById('detail3').style.display = 'none';
    document.getElementById('detail4').style.display = 'none';
    document.getElementById('detail5').style.display = 'none';
    document.getElementById('detail6').style.display = 'none';
    });

document.getElementById('star2').addEventListener('click', function() {
    document.getElementById('detail1').style.display = 'none';
    document.getElementById('detail2').style.display = 'grid';
    document.getElementById('detail3').style.display = 'none';
    document.getElementById('detail4').style.display = 'none';
    document.getElementById('detail5').style.display = 'none';
    document.getElementById('detail6').style.display = 'none';
    });

document.getElementById('star3').addEventListener('click', function() {
    document.getElementById('detail1').style.display = 'none';
    document.getElementById('detail2').style.display = 'none';
    document.getElementById('detail3').style.display = 'grid';
    document.getElementById('detail4').style.display = 'none';
    document.getElementById('detail5').style.display = 'none';
    document.getElementById('detail6').style.display = 'none';
    });

document.getElementById('star4').addEventListener('click', function() {
    document.getElementById('detail1').style.display = 'none';
    document.getElementById('detail2').style.display = 'none';
    document.getElementById('detail3').style.display = 'none';
    document.getElementById('detail4').style.display = 'grid';
    document.getElementById('detail5').style.display = 'none';
    document.getElementById('detail6').style.display = 'none';
    });

document.getElementById('star5').addEventListener('click', function() {
    document.getElementById('detail1').style.display = 'none';
    document.getElementById('detail2').style.display = 'none';
    document.getElementById('detail3').style.display = 'none';
    document.getElementById('detail4').style.display = 'none';
    document.getElementById('detail5').style.display = 'grid';
    document.getElementById('detail6').style.display = 'none';
    });

document.getElementById('star6').addEventListener('click', function() {
    document.getElementById('detail1').style.display = 'none';
    document.getElementById('detail2').style.display = 'none';
    document.getElementById('detail3').style.display = 'none';
    document.getElementById('detail4').style.display = 'none';
    document.getElementById('detail5').style.display = 'none';
    document.getElementById('detail6').style.display = 'grid';
    });