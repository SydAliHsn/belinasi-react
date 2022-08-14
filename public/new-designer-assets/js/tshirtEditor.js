var canvas;
var tshirts = new Array(); //prototype: [{style:'x',color:'white',front:'a',back:'b',price:{tshirt:'12.95',frontPrint:'4.99',backPrint:'4.99',total:'22.47'}}]
var a;
var b;
var line1;
var line2;
var line3;
var line4;
$(document).ready(function() {
  //setup front side canvas
  window.canvas = new fabric.Canvas('tcanvas', {
    hoverCursor: 'pointer',
    selection: true,
    selectionBorderColor: 'pink'
  });
  window.canvas.on({
    'object:moving': function(e) {
      e.target.opacity = 0.5;
    },
    'object:modified': function(e) {
      e.target.opacity = 1;
    },
    'object:selected': onObjectSelected,
    'selection:cleared': onSelectedCleared
  });

  // piggyback on `window.canvas.findTarget`, to fire "object:over" and "object:out" events
  window.canvas.findTarget = (function(originalFn) {
    return function() {
      var target = originalFn.apply(this, arguments);
      if (target) {
        if (this._hoveredTarget !== target) {
          window.canvas.fire('object:over', { target: target });
          if (this._hoveredTarget) {
            window.canvas.fire('object:out', { target: this._hoveredTarget });
          }
          this._hoveredTarget = target;
        }
      } else if (this._hoveredTarget) {
        window.canvas.fire('object:out', { target: this._hoveredTarget });
        this._hoveredTarget = null;
      }
      return target;
    };
  })(window.canvas.findTarget);

  window.canvas.on('object:over', function(e) {
    //e.target.setFill('red');
    //window.canvas.renderAll();
  });

  window.canvas.on('object:out', function(e) {
    //e.target.setFill('green');
    //window.canvas.renderAll();
  });

  document.getElementById('add-text').onsubmit = function(e) {
    e.preventDefault();
    var text = $('#text-string').val();
    var textSample = new fabric.Text(text, {
      left: fabric.util.getRandomInt(0, 100),
      top: fabric.util.getRandomInt(65, 265),
      fontFamily: 'Comic Sans MS',
      angle: 0,
      fill: '#555555',
      scaleX: 1.2,
      scaleY: 1.2,
      fontWeight: '',
      hasRotatingPoint: true
    });
    window.canvas.add(textSample);
    window.canvas.item(window.canvas.item.length - 1).hasRotatingPoint = true;
    $('#texteditor').css('display', 'block');
    $('#imageeditor').css('display', 'block');
  };
  $('#text-string').keyup(function() {
    var activeObject = window.canvas.getActiveObject();
    if (activeObject && activeObject.type === 'text') {
      activeObject.text = this.value;
      window.canvas.renderAll();
    }
  });
  // $(".img-polaroid").click(function (e) {
  //   console.log(e);
  //   var el = e.target;
  //   /*temp code*/
  //   var offset = 50;
  //   var left = fabric.util.getRandomInt(0 + offset, 200 - offset);
  //   var top = fabric.util.getRandomInt(0 + offset, 400 - offset);
  //   var angle = fabric.util.getRandomInt(-20, 40);
  //   var width = fabric.util.getRandomInt(30, 50);
  //   var opacity = (function (min, max) {
  //     return Math.random() * (max - min) + min;
  //   })(0.5, 1);

  //   fabric.Image.fromURL(el.src, function (image) {
  //     image.set({
  //       left: left,
  //       top: top,
  //       angle: 0,
  //       padding: 10,
  //       cornersize: 10,
  //       hasRotatingPoint: true,
  //     });
  //     //image.scale(getRandomNum(0.1, 0.25)).setCoords();
  //     window.canvas.add(image);
  //   });
  // });
  document.getElementById('remove-selected').onclick = function() {
    var activeObject = window.canvas.getActiveObject(),
      activeGroup = window.canvas.getActiveGroup();
    if (activeObject) {
      window.canvas.remove(activeObject);
      $('#text-string').val('');
    } else if (activeGroup) {
      var objectsInGroup = activeGroup.getObjects();
      window.canvas.discardActiveGroup();
      objectsInGroup.forEach(function(object) {
        window.canvas.remove(object);
      });
    }
  };
  // document.getElementById("bring-to-front").onclick = function () {
  //   var activeObject = window.canvas.getActiveObject(),
  //     activeGroup = window.canvas.getActiveGroup();
  //   if (activeObject) {
  //     activeObject.bringToFront();
  //   } else if (activeGroup) {
  //     var objectsInGroup = activeGroup.getObjects();
  //     window.canvas.discardActiveGroup();
  //     objectsInGroup.forEach(function (object) {
  //       object.bringToFront();
  //     });
  //   }
  // };
  // document.getElementById("send-to-back").onclick = function () {
  //   var activeObject = window.canvas.getActiveObject(),
  //     activeGroup = window.canvas.getActiveGroup();
  //   if (activeObject) {
  //     activeObject.sendToBack();
  //   } else if (activeGroup) {
  //     var objectsInGroup = activeGroup.getObjects();
  //     window.canvas.discardActiveGroup();
  //     objectsInGroup.forEach(function (object) {
  //       object.sendToBack();
  //     });
  //   }
  // };
  $('#text-bold').click(function() {
    var activeObject = window.canvas.getActiveObject();
    if (activeObject && activeObject.type === 'text') {
      activeObject.fontWeight = activeObject.fontWeight == 'bold' ? '' : 'bold';
      window.canvas.renderAll();
    }
  });
  $('#text-italic').click(function() {
    var activeObject = window.canvas.getActiveObject();
    if (activeObject && activeObject.type === 'text') {
      activeObject.fontStyle =
        activeObject.fontStyle == 'italic' ? '' : 'italic';
      window.canvas.renderAll();
    }
  });
  $('#text-strike').click(function() {
    var activeObject = window.canvas.getActiveObject();
    if (activeObject && activeObject.type === 'text') {
      activeObject.textDecoration =
        activeObject.textDecoration == 'line-through' ? '' : 'line-through';
      window.canvas.renderAll();
    }
  });
  $('#text-underline').click(function() {
    var activeObject = window.canvas.getActiveObject();
    if (activeObject && activeObject.type === 'text') {
      activeObject.textDecoration =
        activeObject.textDecoration == 'underline' ? '' : 'underline';
      window.canvas.renderAll();
    }
  });
  $('#text-left').click(function() {
    var activeObject = window.canvas.getActiveObject();
    if (activeObject && activeObject.type === 'text') {
      activeObject.textAlign = 'left';
      window.canvas.renderAll();
    }
  });
  $('#text-center').click(function() {
    var activeObject = window.canvas.getActiveObject();
    if (activeObject && activeObject.type === 'text') {
      activeObject.textAlign = 'center';
      window.canvas.renderAll();
    }
  });
  $('#text-right').click(function() {
    var activeObject = window.canvas.getActiveObject();
    if (activeObject && activeObject.type === 'text') {
      activeObject.textAlign = 'right';
      window.canvas.renderAll();
    }
  });
  $('#font-family').change(function() {
    var activeObject = window.canvas.getActiveObject();
    if (activeObject && activeObject.type === 'text') {
      activeObject.fontFamily = this.value;
      window.canvas.renderAll();
    }
  });
  $('#text-bgcolor').miniColors({
    change: function(hex, rgb) {
      var activeObject = window.canvas.getActiveObject();
      if (activeObject && activeObject.type === 'text') {
        activeObject.backgroundColor = this.value;
        window.canvas.renderAll();
      }
    },
    open: function(hex, rgb) {
      //
    },
    close: function(hex, rgb) {
      //
    }
  });
  $('#text-fontcolor').miniColors({
    change: function(hex, rgb) {
      var activeObject = window.canvas.getActiveObject();
      if (activeObject && activeObject.type === 'text') {
        activeObject.fill = this.value;
        window.canvas.renderAll();
      }
    },
    open: function(hex, rgb) {
      //
    },
    close: function(hex, rgb) {
      //
    }
  });

  $('#text-strokecolor').miniColors({
    change: function(hex, rgb) {
      var activeObject = window.canvas.getActiveObject();
      if (activeObject && activeObject.type === 'text') {
        activeObject.strokeStyle = this.value;
        window.canvas.renderAll();
      }
    },
    open: function(hex, rgb) {
      //
    },
    close: function(hex, rgb) {
      //
    }
  });

  //window.canvas.add(new fabric.fabric.Object({hasBorders:true,hasControls:false,hasRotatingPoint:false,selectable:false,type:'rect'}));
  // $('#drawingArea').hover(
  //   function() {
  //     window.canvas.add(line1);
  //     window.canvas.add(line2);
  //     window.canvas.add(line3);
  //     window.canvas.add(line4);
  //     window.canvas.renderAll();
  //   },
  //   function() {
  //     window.canvas.remove(line1);
  //     window.canvas.remove(line2);
  //     window.canvas.remove(line3);
  //     window.canvas.remove(line4);
  //     window.canvas.renderAll();
  //   }
  // );

  $('.color-preview').click(function() {
    var color = $(this).css('background-color');
    document.getElementById('shirtDiv').style.backgroundColor = color;
  });

  // $('#flip').click(function() {
  //   if ($(this).attr('data-original-title') == 'Show Back View') {
  //     $(this).attr('data-original-title', 'Show Front View');
  //     $('#tshirtFacing').attr('src', '/new-designer-assets/img/crew_back.png');
  //     a = JSON.stringify(window.canvas);
  //     window.canvas.clear();
  //     try {
  //       var json = JSON.parse(b);
  //       window.canvas.loadFromJSON(b);
  //     } catch (e) {}
  //   } else {
  //     $(this).attr('data-original-title', 'Show Back View');
  //     $('#tshirtFacing').attr('src', '/new-designer-assets/img/crew_front.png');
  //     b = JSON.stringify(window.canvas);
  //     window.canvas.clear();
  //     try {
  //       var json = JSON.parse(a);
  //       window.canvas.loadFromJSON(a);
  //     } catch (e) {}
  //   }
  //   window.canvas.renderAll();
  //   setTimeout(function() {
  //     window.canvas.calcOffset();
  //   }, 200);
  // });

  $('.clearfix button,a').tooltip();
  line1 = new fabric.Line([0, 0, 200, 0], {
    stroke: '#000000',
    strokeWidth: 1,
    hasBorders: false,
    hasControls: false,
    hasRotatingPoint: false,
    selectable: false
  });
  line2 = new fabric.Line([199, 0, 200, 399], {
    stroke: '#000000',
    strokeWidth: 1,
    hasBorders: false,
    hasControls: false,
    hasRotatingPoint: false,
    selectable: false
  });
  line3 = new fabric.Line([0, 0, 0, 400], {
    stroke: '#000000',
    strokeWidth: 1,
    hasBorders: false,
    hasControls: false,
    hasRotatingPoint: false,
    selectable: false
  });
  line4 = new fabric.Line([0, 400, 200, 399], {
    stroke: '#000000',
    strokeWidth: 1,
    hasBorders: false,
    hasControls: false,
    hasRotatingPoint: false,
    selectable: false
  });
}); //doc ready

function getRandomNum(min, max) {
  return Math.random() * (max - min) + min;
}

function onObjectSelected(e) {
  var selectedObject = e.target;
  $('#text-string').val('');
  selectedObject.hasRotatingPoint = true;
  if (selectedObject && selectedObject.type === 'text') {
    //display text editor
    $('#texteditor').css('display', 'block');
    $('#text-string').val(selectedObject.getText());
    $('#text-fontcolor').miniColors('value', selectedObject.fill);
    $('#text-strokecolor').miniColors('value', selectedObject.strokeStyle);
    $('#imageeditor').css('display', 'block');
  } else if (selectedObject && selectedObject.type === 'image') {
    //display image editor
    $('#texteditor').css('display', 'none');
    $('#imageeditor').css('display', 'block');
  }
}
function onSelectedCleared(e) {
  $('#texteditor').css('display', 'none');
  $('#text-string').val('');
  $('#imageeditor').css('display', 'none');
}
function setFont(font) {
  var activeObject = window.canvas.getActiveObject();
  if (activeObject && activeObject.type === 'text') {
    activeObject.fontFamily = font;
    window.canvas.renderAll();
  }
}
function removeWhite() {
  var activeObject = window.canvas.getActiveObject();
  if (activeObject && activeObject.type === 'image') {
    activeObject.filters[2] = new fabric.Image.filters.RemoveWhite({
      threshold: 100,
      distance: 10
    }); //0-255, 0-255
    activeObject.applyFilters(window.canvas.renderAll.bind(window.canvas));
  }
}

// const uploadBtn = document.querySelector('.btn-upload');
const fileToUpload = document.querySelector('#fileToUpload');
const avatarlist = document.querySelector('#avatarlist');

// uploadBtn.addEventListener('click', async e => {
//   e.preventDefault();

//   const img = document.createElement('img');

//   img.src = URL.createObjectURL(fileToUpload.files[0]);

//   img.classList.add('img-polaroid');
//   img.style = 'cursor: pointer;';

//   avatarlist.append(img);
// });

avatarlist.addEventListener('click', e => {
  if (!e.target.classList.contains('img-polaroid')) return;

  var el = e.target;

  /*temp code*/
  var offset = 50;
  // var left = fabric.util.getRandomInt(0 + offset, 200 - offset);
  // var top = fabric.util.getRandomInt(0 + offset, 400 - offset);
  var left = fabric.util.getRandomInt(0 + offset, 100 - offset);
  var top = fabric.util.getRandomInt(0 + offset, 200 - offset);
  var angle = fabric.util.getRandomInt(-20, 40);
  var width = fabric.util.getRandomInt(30, 50);
  var opacity = (function(min, max) {
    return Math.random() * (max - min) + min;
  })(0.5, 1);

  fabric.Image.fromURL(
    el.src,
    function(image) {
      image.scaleToWidth(150);
      image.scaleToHeight(150);

      image.set({
        left: left,
        top: top,
        angle: 0,
        padding: 10,
        cornersize: 10,
        hasRotatingPoint: true
      });
      //image.scale(getRandomNum(0.1, 0.25)).setCoords();
      window.canvas.add(image);
    },
    { crossOrigin: 'anonymous' }
  );
});
