



$(document).ready(function() {

    console.log('im ready im readyim readyim readyim readyim readyim ready');

    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    var draw = false;
    var socket = io();

    var oldXcoord ;
    var oldYcoord ;


    $(canvas).on('mousedown', function eventHandler(event) {
         oldXcoord = event.clientX;
         oldYcoord = event.clientY;
        draw = true;
    });
    $(canvas).on('mouseup', function eventHandler(event) {

        draw = false;
    });
    $(canvas).on('mousemove', function eventHandler(event) {
            if (draw) {
            ctx.strokeStyle = 'rgb(49, 135, 176)';
            ctx.lineJoin = 'round';
            ctx.lineWidth = 5;

            ctx.beginPath();
            ctx.moveTo(oldXcoord, oldYcoord);
            ctx.lineTo(event.clientX, event.clientY);
            ctx.closePath();
            ctx.stroke();

            socket.emit('draw', {
                   x1: oldXcoord, y1:  oldYcoord,
                   x2: event.clientX, y2: event.clientY
              });

          }
            oldXcoord = event.clientX;
            oldYcoord = event.clientY;

       });

       socket.on('draw', function(data){
           console.log(data)
           ctx.strokeStyle = 'rgb(49, 135, 176)';
           ctx.lineJoin = 'round';
           ctx.lineWidth = 5;

           ctx.beginPath();
           ctx.moveTo(data.x1, data.y1);
           ctx.lineTo(data.x2, data.y2);
          //  oldXcoord = data.x;
          //  oldYcoord = data.y;
           ctx.closePath();
           ctx.stroke();

       })
 });
