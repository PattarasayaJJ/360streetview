let s = 120


var viewer = new PhotoSphereViewer.Viewer({
  container: document.querySelector("#viewer"),
  panorama: "./img/location1.jpg",
  // panoData:{
  //   fullWidth: 10858,
  //   fullHeight: 5429,
  //   croppedX: 700,
  //   croppedY: 762,
  //   croppedWidth: 10858,
  //   croppedHeight: 3906,
  // },

  plugins: [
    [
      PhotoSphereViewer.MarkersPlugin,
      {
        markers: [
          {
            id: "gotoen",
            position:  { yaw: '-180deg', pitch: '-1deg' },
            imageLayer: "./icon/arrowhead.png",
            size: { width: 463*0.2, height: 507*0.2 },
            
          },

          {
            id: "gotote",
            position:  { yaw: '250deg', pitch: '-1deg' },
            imageLayer: "./icon/arrowhead.png",
            size: { width: 463*0.2, height: 507*0.2 },
            
          },


          {
            id: "m1-1",
            position: { yaw: '-285deg', pitch: '15deg' },
            imageLayer: "./icon/placeholder.png",
            size: { width: 463*0.2, height: 507*0.2 },
            tooltip:"<div class='alert alert-info'>ตึกหลอด</div>",
            content: document.getElementById("c1-1").innerHTML,
          },
          {
            id: "m1-2",
            position: { yaw: '-47deg', pitch: '5deg' },
            imageLayer: "./icon/placeholder.png",
            size: { width: 463*0.2, height: 507*0.2 },
            tooltip:"<div class='alert alert-info'>วงเวียน ร.4</div>",
            content: document.getElementById("c1-2").innerHTML,
          },
          {
            id: "m1-3",
            position: { yaw: '-40deg', pitch: '15deg' },
            imageLayer: "./icon/placeholder.png",
            size: { width: 463*0.2, height: 507*0.2 },
            tooltip:"<div class='alert alert-info'>คณะเทคโนโลยี</div>",
            content: document.getElementById("c1-3").innerHTML,
          },
          {
            id: "m1-4",
            position: { yaw: '112deg', pitch: '8deg' },
            imageLayer: "./icon/placeholder.png",
            size: { width: 463*0.2, height: 507*0.2 },
            tooltip:"<div class='alert alert-info'>สำนักเทคโนโลยีดิจิทัล</div>",
            content: document.getElementById("c1-4").innerHTML,
          },
          {
            id: "m1-5",
            position: { yaw: '175deg', pitch: '8deg' },
            imageLayer: "./icon/placeholder.png",
            size: { width: 463*0.2, height: 507*0.2 },
            tooltip:"<div class='alert alert-info'>อาคาร 50 ปี คณะวิศวกรรมศาสตร์</div>",
            content: document.getElementById("c1-5").innerHTML,
          },
        ],
      },
    ],
  ],
});

const markersPlugin = viewer.getPlugin(PhotoSphereViewer.MarkersPlugin);
let visibleRangePlugin = viewer.getPlugin(PhotoSphereViewer.VisibleRangePlugin);

markersPlugin.addEventListener("select-marker", ({ marker }) => {
  console.log(marker.id + " click");

  if (marker.id == "gotoload") {
    viewer.setPanorama("./img/location1.jpg");
    markersPlugin.clearMarkers();

    markersPlugin.addMarker({
      id: "gotoen",
      position:  { yaw: '-180deg', pitch: '-1deg' },
      imageLayer: "./icon/arrowhead.png",
      size: { width: 463*0.2, height: 507*0.2 },
      
    });

    markersPlugin.addMarker({
      id: "gotote",
      position:  { yaw: '250deg', pitch: '-1deg' },
      imageLayer: "./icon/arrowhead.png",
      size: { width: 463*0.2, height: 507*0.2 },
      
    });

    markersPlugin.addMarker({
      id: "m1-1",
      position: { yaw: '-285deg', pitch: '15deg' },
      imageLayer: "./icon/placeholder.png",
      size: { width: 463*0.2, height: 507*0.2 },
      tooltip:"<div class='alert alert-info'>ตึกหลอด</div>",
      content: document.getElementById("c1-1").innerHTML,
    });

    markersPlugin.addMarker({
      id: "m1-2",
      position: { yaw: '-47deg', pitch: '5deg' },
      imageLayer: "./icon/placeholder.png",
      size: { width: 463*0.2, height: 507*0.2 },
      tooltip:"<div class='alert alert-info'>วงเวียน ร.4</div>",
      content: document.getElementById("c1-2").innerHTML,
    });

    markersPlugin.addMarker({
      id: "m1-3",
      position: { yaw: '-40deg', pitch: '15deg' },
      imageLayer: "./icon/placeholder.png",
      size: { width: 463*0.2, height: 507*0.2 },
      tooltip:"<div class='alert alert-info'>คณะเทคโนโลยี</div>",
      content: document.getElementById("c1-3").innerHTML,
    });

    markersPlugin.addMarker({
      id: "m1-4",
      position: { yaw: '112deg', pitch: '8deg' },
      imageLayer: "./icon/placeholder.png",
      size: { width: 463*0.2, height: 507*0.2 },
      tooltip:"<div class='alert alert-info'>สำนักเทคโนโลยีดิจิทัล</div>",
      content: document.getElementById("c1-4").innerHTML,
    });

    markersPlugin.addMarker({
      id: "m1-5",
      position: { yaw: '175deg', pitch: '8deg' },
      imageLayer: "./icon/placeholder.png",
      size: { width: 463*0.2, height: 507*0.2 },
      tooltip:"<div class='alert alert-info'>อาคาร 50 ปี คณะวิศวกรรมศาสตร์</div>",
      content: document.getElementById("c1-5").innerHTML,
    });

  }


  // เทคโน


  if (marker.id == "gotote") {
    viewer.setPanorama("./img/location4.jpg");
    markersPlugin.clearMarkers();

    markersPlugin.addMarker({
      id: "gotoload",
      position:  { yaw: '53deg', pitch: '5deg' },
      imageLayer: "./icon/arrowhead.png",
      size: { width: s, height: s },
      
    });
    markersPlugin.addMarker({
      id: "gototennis",
      position:  { yaw: '-55deg', pitch: '0deg' },
      imageLayer: "./icon/arrowhead.png",
      size: { width: 463*0.2, height: 507*0.2 },
     
    });


    markersPlugin.addMarker({
      id: "m2-1",
      position: { yaw: '-125deg', pitch: '5deg' },
      imageLayer: "./icon/placeholder.png",
      size: { width: 463*0.2, height: 507*0.2 },
      tooltip:"<div class='alert alert-info'>สะพานขาว</div>",
      content: document.getElementById("c2-1").innerHTML,
    });
    markersPlugin.addMarker({
      id: "m2-2",
      position: { yaw: '-85deg', pitch: '5deg' },
      imageLayer: "./icon/placeholder.png",
      size: { width: 463*0.2, height: 507*0.2 },
      tooltip:"<div class='alert alert-info'>สระพลาสติก</div>",
      content: document.getElementById("c2-2").innerHTML,
    });
    markersPlugin.addMarker({
      id: "m2-3",
      position: { yaw: '-5deg', pitch: '5deg' },
      imageLayer: "./icon/placeholder.png",
      size: { width: 463*0.2, height: 507*0.2 },
      tooltip:"<div class='alert alert-info'>คณะเทคโนโลยี สาขาธรณี</div>",
      content: document.getElementById("c2-3").innerHTML,
    });
    markersPlugin.addMarker({
      id: "m2-4",
      position: { yaw: '115deg', pitch: '5deg' },
      imageLayer: "./icon/placeholder.png",
      size: { width: 463*0.2, height: 507*0.2 },
      tooltip:"<div class='alert alert-info'>คณะวิศวกรรมศาสตร์ สาขาเครื่องกล</div>",
      content: document.getElementById("c2-4").innerHTML,
    });
    markersPlugin.addMarker({
      id: "m2-5",
      position: { yaw: '180deg', pitch: '5deg' },
      imageLayer: "./icon/placeholder.png",
      size: { width: 463*0.2, height: 507*0.2 },
      tooltip:"<div class='alert alert-info'>โรงพิมพ์มหาวิทยาลัยขอนแก่น</div>",
      content: document.getElementById("c2-5").innerHTML,
    });
  }



  // ตึกเพียร

  if (marker.id == "gotoen") {
    viewer.setPanorama("./img/location2.jpg");
    markersPlugin.clearMarkers();

    markersPlugin.addMarker({
      id: "gotoload",
      position:  { yaw: '10deg', pitch: '0deg' },
      imageLayer: "./icon/arrowhead1.png",
      size: { width: 463*0.2, height: 507*0.2 },
   
    });
    markersPlugin.addMarker({
      id: "gotoph",
      position:  { yaw: '175deg', pitch: '0deg' },
      imageLayer: "./icon/arrowhead.png",
      size: { width: 463*0.2, height: 507*0.2 },
   
    });
    markersPlugin.addMarker({
      id: "m3-1",
      position: { yaw: '-120deg', pitch: '5deg' },
      imageLayer: "./icon/placeholder.png",
      size: { width: 463*0.2, height: 507*0.2 },
      tooltip:"<div class='alert alert-info'>ลานจอดรถ</div>",
      content: document.getElementById("c3-1").innerHTML,
    });
    markersPlugin.addMarker({
      id: "m3-2",
      position: { yaw: '-155deg', pitch: '10deg' },
      imageLayer: "./icon/placeholder.png",
      size: { width: 463*0.2, height: 507*0.2 },
      tooltip:"<div class='alert alert-info'>คณะวิศวะกรรมศาสตร์ สาขาอุตสาหการ</div>",
      content: document.getElementById("c3-2").innerHTML,
    });
    markersPlugin.addMarker({
      id: "m3-3",
      position: { yaw: '-20deg', pitch: '7deg' },
      imageLayer: "./icon/placeholder.png",
      size: { width: 463*0.2, height: 507*0.2 },
      tooltip:"<div class='alert alert-info'>คณะวิศวกรรมศาสตร์ สาขาเกษตร</div>",
      content: document.getElementById("c3-3").innerHTML,
    });
    markersPlugin.addMarker({
      id: "m3-4",
      position: { yaw: '380deg', pitch: '13deg' },
      imageLayer: "./icon/placeholder.png",
      size: { width: 463*0.2, height: 507*0.2 },
      tooltip:"<div class='alert alert-info'>ตึก 50 ปี วิศวกรรมศาสตร์</div>",
      content: document.getElementById("c3-4").innerHTML,
    });
    markersPlugin.addMarker({
      id: "m3-5",
      position: { yaw: '-240deg', pitch: '15deg' },
      imageLayer: "./icon/placeholder.png",
      size: { width: 463*0.2, height: 507*0.2 },
      tooltip:"<div class='alert alert-info'>ตึกเพียรวิจิตร</div>",
      content: document.getElementById("c3-5").innerHTML,
    });

  }


// สาธา
  
  if (marker.id == "gotoph") {
    viewer.setPanorama("./img/location3.jpg");
    markersPlugin.clearMarkers();

    markersPlugin.addMarker({
      id: "gotoen",
      position:  { yaw: '-55deg', pitch: '0deg' },
      imageLayer: "./icon/arrowhead1.png",
      size: { width: 463*0.2, height: 507*0.2 },
    
    });
    markersPlugin.addMarker({
      id: "gotote",
      position: { yaw: "230deg", pitch: "5deg" },
      imageLayer: "./icon/arrowhead.png",
      size: { width: 463*0.2, height: 507*0.2 },
   
    });
    markersPlugin.addMarker({
      id: "m4-1",
      position: { yaw: '-165deg', pitch: '5deg' },
      imageLayer: "./icon/placeholder.png",
      size: { width: 463*0.2, height: 507*0.2 },
      tooltip:"<div class='alert alert-info'>โรงอาหารหอพักนักศึกษาคณะแพทย์</div>",
      content: document.getElementById("c4-1").innerHTML,
    });
    markersPlugin.addMarker({
      id: "m4-2",
      position: { yaw: '-135deg', pitch: '10deg' },
      imageLayer: "./icon/placeholder.png",
      size: { width: 463*0.2, height: 507*0.2 },
      tooltip:"<div class='alert alert-info'>หอพักนักศึกษาคณะแพทย์</div>",
      content: document.getElementById("c4-2").innerHTML,
    });
    markersPlugin.addMarker({
      id: "m4-3",
      position: { yaw: '-20deg', pitch: '7deg' },
      imageLayer: "./icon/placeholder.png",
      size: { width: 463*0.2, height: 507*0.2 },      
      tooltip:"<div class='alert alert-info'>คณะวิศวกรรมศาสตร์ สาขาเคมี</div>",
      content: document.getElementById("c4-3").innerHTML,
    });
    markersPlugin.addMarker({
      id: "m4-4",
      position: { yaw: '400deg', pitch: '10deg' },
      imageLayer: "./icon/placeholder.png",
      size: { width: 463*0.2, height: 507*0.2 },
      tooltip:"<div class='alert alert-info'>คณะวิศวกรรมศาสตร์ สาขาคอมพิวเตอร์</div>",
      content: document.getElementById("c4-4").innerHTML,
    });
    markersPlugin.addMarker({
      id: "m4-5",
      position: { yaw: '-210deg', pitch: '10deg' },
      imageLayer: "./icon/placeholder.png",
      size: { width: 463*0.2, height: 507*0.2 },      
      tooltip:"<div class='alert alert-info'>คณะสาธารณสุขศาสตร์</div>",
      content: document.getElementById("c4-5").innerHTML,
    });

  }



// เทนนิส
  
  if (marker.id == "gototennis") {
    viewer.setPanorama("./img/location5.jpg");
    markersPlugin.clearMarkers();

    markersPlugin.addMarker({
      id: "gotote",
      position:  { yaw: '-230deg', pitch: '5deg' },
      imageLayer: "./icon/arrowhead.png",
      size: { width: 463*0.2, height: 507*0.2 },
      
    });
   
    markersPlugin.addMarker({
      id: "m5-1",
      position: { yaw: '-295deg', pitch: '15deg' },
      imageLayer: "./icon/placeholder.png",
      size: { width: 463*0.2, height: 507*0.2 },      
      tooltip:"<div class='alert alert-info'>คณะเกษตรศาสตร์</div>",
      content: document.getElementById("c5-1").innerHTML,
    });
    markersPlugin.addMarker({
      id: "m5-2",
      position: { yaw: '-97deg', pitch: '0deg' },
      imageLayer: "./icon/placeholder.png",
      size: { width: 463*0.2, height: 507*0.2 },
      tooltip:"<div class='alert alert-info'>สนามเปตอง</div>",
      content: document.getElementById("c5-2").innerHTML,
    });
    markersPlugin.addMarker({
      id: "m5-3",
      position: { yaw: '250deg', pitch: '5deg' },
      imageLayer: "./icon/placeholder.png",
      size: { width: 463*0.2, height: 507*0.2 },      
      tooltip:"<div class='alert alert-info'>สระว่ายน้ำ ชนเห็นชอบ</div>",
      content: document.getElementById("c5-3").innerHTML,
    });
    markersPlugin.addMarker({
      id: "m5-4",
      position: { yaw: '112deg', pitch: '8deg' },
      imageLayer: "./icon/placeholder.png",
      size: { width: 463*0.2, height: 507*0.2 },
      tooltip:"<div class='alert alert-info'>เรือนจำเพาะทดลอง คณะเกษตรศาสตร์</div>",
      content: document.getElementById("c5-4").innerHTML,
    });
    markersPlugin.addMarker({
      id: "m5-5",
      position: { yaw: '195deg', pitch: '6deg' },
      imageLayer: "./icon/placeholder.png",
      size: { width: 463*0.2, height: 507*0.2 },      
      tooltip:"<div class='alert alert-info'>สนามเทนนิส</div>",
      content: document.getElementById("c5-5").innerHTML,
    });

  }


});
