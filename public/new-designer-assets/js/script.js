// $(document).ready(function() {
//   $('#tshirttype').change(function() {
//     $('img[name=tshirtview]').attr('src', $(this).val());
//   });
// });

var valueSelect = $('#tshirttype').val();
$('#tshirttype').change(function() {
  valueSelect = $(this).val();
});

window.changeSideNew = function(side) {
  if (valueSelect === '/new-designer-assets/img/crew_front.png') {
    if (side === 'back') {
      // $(this).attr('data-original-title', 'Show Front View');
      $('#tshirtFacing').attr('src', '/new-designer-assets/img/crew_back.png');
      a = JSON.stringify(window.canvas);
      window.canvas.clear();
      try {
        var json = JSON.parse(b);
        window.canvas.loadFromJSON(b);
      } catch (e) {}
    } else {
      // $(this).attr('data-original-title', 'back');
      $('#tshirtFacing').attr('src', '/new-designer-assets/img/crew_front.png');
      b = JSON.stringify(window.canvas);
      window.canvas.clear();
      try {
        var json = JSON.parse(a);
        window.canvas.loadFromJSON(a);
      } catch (e) {}
    }
  } else if (
    valueSelect === '/new-designer-assets/img/mens_longsleeve_front.png'
  ) {
    if (side === 'back') {
      // $(this).attr('data-original-title', 'Show Front View');
      $('#tshirtFacing').attr(
        'src',
        '/new-designer-assets/img/mens_longsleeve_back.png'
      );
      a = JSON.stringify(window.canvas);
      window.canvas.clear();
      try {
        var json = JSON.parse(b);
        window.canvas.loadFromJSON(b);
      } catch (e) {}
    } else {
      // $(this).attr('data-original-title', 'back');
      $('#tshirtFacing').attr(
        'src',
        '/new-designer-assets/img/mens_longsleeve_front.png'
      );
      b = JSON.stringify(window.canvas);
      window.canvas.clear();
      try {
        var json = JSON.parse(a);
        window.canvas.loadFromJSON(a);
      } catch (e) {}
    }
  } else if (valueSelect === '/new-designer-assets/img/mens_tank_front.png') {
    if (side === 'back') {
      // $(this).attr('data-original-title', 'Show Front View');
      $('#tshirtFacing').attr(
        'src',
        '/new-designer-assets/img/mens_tank_back.png'
      );
      a = JSON.stringify(window.canvas);
      window.canvas.clear();
      try {
        var json = JSON.parse(b);
        window.canvas.loadFromJSON(b);
      } catch (e) {}
    } else {
      // $(this).attr('data-original-title', 'back');
      $('#tshirtFacing').attr(
        'src',
        '/new-designer-assets/img/mens_tank_front.png'
      );
      b = JSON.stringify(window.canvas);
      window.canvas.clear();
      try {
        var json = JSON.parse(a);
        window.canvas.loadFromJSON(a);
      } catch (e) {}
    }
  } else if (valueSelect === '/new-designer-assets/img/mens_hoodie_front.png') {
    if (side === 'back') {
      // $(this).attr('data-original-title', 'Show Front View');
      $('#tshirtFacing').attr(
        'src',
        '/new-designer-assets/img/mens_hoodie_back.png'
      );
      a = JSON.stringify(window.canvas);
      window.canvas.clear();
      try {
        var json = JSON.parse(b);
        window.canvas.loadFromJSON(b);
      } catch (e) {}
    } else {
      // $(this).attr('data-original-title', 'back');
      $('#tshirtFacing').attr(
        'src',
        '/new-designer-assets/img/mens_hoodie_front.png'
      );
      b = JSON.stringify(window.canvas);
      window.canvas.clear();
      try {
        var json = JSON.parse(a);
        window.canvas.loadFromJSON(a);
      } catch (e) {}
    }
  }

  window.canvas.renderAll();
  setTimeout(function() {
    window.canvas.renderAll();

    window.canvas.calcOffset();
  }, 100);
};

// const changeSide = function() {
//   if (valueSelect === '/new-designer-assets/img/crew_front.png') {
//     if ($(this).attr('data-original-title') == 'Show Back View') {
//       $(this).attr('data-original-title', 'Show Front View');
//       $('#tshirtFacing').attr('src', '/new-designer-assets/img/crew_back.png');
//       a = JSON.stringify(window.canvas);
//       window.canvas.clear();
//       try {
//         var json = JSON.parse(b);
//         window.canvas.loadFromJSON(b);
//       } catch (e) {}
//     } else {
//       $(this).attr('data-original-title', 'Show Back View');
//       $('#tshirtFacing').attr('src', '/new-designer-assets/img/crew_front.png');
//       b = JSON.stringify(window.canvas);
//       window.canvas.clear();
//       try {
//         var json = JSON.parse(a);
//         window.canvas.loadFromJSON(a);
//       } catch (e) {}
//     }
//   } else if (
//     valueSelect === '/new-designer-assets/img/mens_longsleeve_front.png'
//   ) {
//     if ($(this).attr('data-original-title') == 'Show Back View') {
//       $(this).attr('data-original-title', 'Show Front View');
//       $('#tshirtFacing').attr(
//         'src',
//         '/new-designer-assets/img/mens_longsleeve_back.png'
//       );
//       a = JSON.stringify(window.canvas);
//       window.canvas.clear();
//       try {
//         var json = JSON.parse(b);
//         window.canvas.loadFromJSON(b);
//       } catch (e) {}
//     } else {
//       $(this).attr('data-original-title', 'Show Back View');
//       $('#tshirtFacing').attr(
//         'src',
//         '/new-designer-assets/img/mens_longsleeve_front.png'
//       );
//       b = JSON.stringify(window.canvas);
//       window.canvas.clear();
//       try {
//         var json = JSON.parse(a);
//         window.canvas.loadFromJSON(a);
//       } catch (e) {}
//     }
//   } else if (valueSelect === '/new-designer-assets/img/mens_tank_front.png') {
//     if ($(this).attr('data-original-title') == 'Show Back View') {
//       $(this).attr('data-original-title', 'Show Front View');
//       $('#tshirtFacing').attr(
//         'src',
//         '/new-designer-assets/img/mens_tank_back.png'
//       );
//       a = JSON.stringify(window.canvas);
//       window.canvas.clear();
//       try {
//         var json = JSON.parse(b);
//         window.canvas.loadFromJSON(b);
//       } catch (e) {}
//     } else {
//       $(this).attr('data-original-title', 'Show Back View');
//       $('#tshirtFacing').attr(
//         'src',
//         '/new-designer-assets/img/mens_tank_front.png'
//       );
//       b = JSON.stringify(window.canvas);
//       window.canvas.clear();
//       try {
//         var json = JSON.parse(a);
//         window.canvas.loadFromJSON(a);
//       } catch (e) {}
//     }
//   } else if (valueSelect === '/new-designer-assets/img/mens_hoodie_front.png') {
//     if ($(this).attr('data-original-title') == 'Show Back View') {
//       $(this).attr('data-original-title', 'Show Front View');
//       $('#tshirtFacing').attr(
//         'src',
//         '/new-designer-assets/img/mens_hoodie_back.png'
//       );
//       a = JSON.stringify(window.canvas);
//       window.canvas.clear();
//       try {
//         var json = JSON.parse(b);
//         window.canvas.loadFromJSON(b);
//       } catch (e) {}
//     } else {
//       $(this).attr('data-original-title', 'Show Back View');
//       $('#tshirtFacing').attr(
//         'src',
//         '/new-designer-assets/img/mens_hoodie_front.png'
//       );
//       b = JSON.stringify(window.canvas);
//       window.canvas.clear();
//       try {
//         var json = JSON.parse(a);
//         window.canvas.loadFromJSON(a);
//       } catch (e) {}
//     }
//   }

//   window.canvas.renderAll();
//   setTimeout(function() {
//     window.canvas.renderAll();

//     window.canvas.calcOffset();
//   }, 100);
// };

// $('#flipback').click(changeSide);

document.getElementById('font-list').addEventListener('change', e => {
  setFont(e.target.value);
});

// const btnSave = document.getElementById('btn-save');

// btnSave.addEventListener('click', () => {
// window.canvas.deactivateAll().renderAll();

// let data = window.canvas.toDataURL({
//   format: 'png',
//   multiplier: 12
// });

// btnSave.insertAdjacentHTML(
//   "afterend",
//   `<div style=" position: relative">
//   <img class="design" src="${data}" style="position: absolute; top: 16.5%; left: 160px; width: 200px; height: 400px;" />
//   <img src="/img/crew_front.png"/ style="background-color: skyblue;">
//   </div>`
// );

// const dataBase = data.split('base64,')[1];
// console.log(dataBase);
// });
