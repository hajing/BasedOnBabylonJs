(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"08e7":function(e,n,t){"use strict";var a=t("4a8c"),r=t.n(a);r.a},2639:function(e,n,t){},2762:function(e,n,t){"use strict";t.r(n);var a=function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},r=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("canvas",{attrs:{id:"renderCanvas"}})])}],o=t("3890"),i=(t("7172"),{name:"ziyap",data:function(){return{publicPath:"/BasedOnBabylonJs/"}},mounted:function(){this.hemin()},methods:{hemin:function(){var e=document.getElementById("renderCanvas"),n=new o["Engine"](e,!0),t=function(){var t=new o["Scene"](n),a=o["Mesh"].CreateBox("box",4,t),r=new o["StandardMaterial"]("material2",t);r.diffuseColor=new o["Color3"](.5,1,2),a.material=r;var i=o["Mesh"].CreateBox("box2",4,t),c=new o["StandardMaterial"]("material1",t);c.wireframe=!0,i.material=c,i.position=new o["Vector3"](0,6,0);var s=new o["ArcRotateCamera"]("arcCamera",o["Tools"].ToRadians(0),o["Tools"].ToRadians(90),20,o["Vector3"].Zero(),t);s.attachControl(e,!0),s.useAutoRotationBehavior=!0;var u=new o["HemisphericLight"]("light1",new o["Vector3"](1,1,0),t);return u.parent=s,u.diffuse=new o["Color3"].White,t},a=t();n.runRenderLoop((function(){a.render()})),window.addEventListener("resize",(function(){n.resize()}))},babylonTest:function(){var e=this,n=document.getElementById("renderCanvas"),t=new o["Engine"](n,!0),a=function(){var a=new o["Scene"](t),r=new o["ArcRotateCamera"]("Camera",Math.PI/2,Math.PI/2,2,new o["Vector3"](0,0,5),a);r.attachControl(n,!0);new o["HemisphericLight"]("light1",new o["Vector3"](1,1,0),a);var i=o["MeshBuilder"].CreateSphere("sphere",{diameter:2},a);i.position.y=2;var c=o["MeshBuilder"].CreateBox("cube",{size:1},a);c.rotation.x=2,c.rotation.y=3,c.rotation.z=4;var s=new o["StandardMaterial"]("texture1",a);s.diffuseColor=new o["Color3"](0,1,0),i.material=s;var u=new o["StandardMaterial"]("texture2",a);return u.diffuseTexture=new o["Texture"]("".concat(e.publicPath,"textures/logo.png"),a),c.material=u,a},r=a();t.runRenderLoop((function(){r.render()})),window.addEventListener("resize",(function(){t.resize()}))},chang:function(){console.log("触发")},init:function(){var e=this,n=document.getElementById("renderCanvas"),t=new o["Engine"](n,!0),a=function(){var a=new o["Scene"](t),r=new o["FreeCamera"]("camera1",new o["Vector3"](0,5,-10),a);r.setTarget(o["Vector3"].Zero()),r.attachControl(n,!1);new o["HemisphericLight"]("light1",new o["Vector3"](0,1,0),a);var i=o["CubeTexture"].CreateFromPrefilteredData("".concat(e.publicPath,"textures/environment.dds"),a);a.createDefaultSkybox(i,!0);return o["SceneLoader"].Append("".concat(e.publicPath,"scenes/BoomBox/"),"BoomBox.gltf",a,(function(e){e.createDefaultCameraOrLight(!0,!0,!0),e.activeCamera.alpha+=Math.PI})),a},r=a();t.runRenderLoop((function(){r.render()})),window.addEventListener("resize",(function(){t.resize()}))}}}),c=i,s=(t("506d"),t("2877")),u=Object(s["a"])(c,a,r,!1,null,"2993ce70",null);n["default"]=u.exports},"27d1":function(e,n,t){},2992:function(e,n,t){},"4a38":function(e,n,t){},"4a8c":function(e,n,t){},"506d":function(e,n,t){"use strict";var a=t("27d1"),r=t.n(a);r.a},6589:function(e,n,t){"use strict";var a=t("d16a"),r=t.n(a);r.a},"66cf":function(e,n,t){"use strict";var a=t("4a38"),r=t.n(a);r.a},"685b":function(e,n,t){"use strict";t.r(n);var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("canvas",{attrs:{id:"renderCanvas"}}),t("button",{attrs:{id:"sweetButton"},on:{click:function(n){return e.chang()}}},[e._v("切换 颜色")])])},r=[],o=t("3890"),i=(t("7172"),{name:"color",data:function(){return{publicPath:"/BasedOnBabylonJs/",scene:null,materialSphere:null,vol:1}},mounted:function(){this.init()},methods:{chang:function(){console.log("触发"),1===this.vol?(this.materialSphere.diffuseColor=new o["Color3"](.5,1,2),this.vol=0):(this.materialSphere.diffuseColor=new o["Color3"](.5,1,.5),this.vol=1)},init:function(){var e=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=document.getElementById("renderCanvas"),i=new o["Engine"](r,!0),c=function(){var c=new o["Scene"](i),s=new o["PointLight"]("Omni",new o["Vector3"](20,20,20),c),u=new o["ArcRotateCamera"]("Camera",o["Tools"].ToRadians(0),o["Tools"].ToRadians(60),10,o["Vector3"].Zero(),c);u.attachControl(r,!1),u.useAutoRotationBehavior=!0;var l=o["MeshBuilder"].CreateBox("sphere",{size:3},c),d=new o["StandardMaterial"]("texture1",c);return d.diffuseColor=new o["Color3"](n,t,a),e.materialSphere=d,l.material=d,c.registerBeforeRender((function(){s.position=u.position})),c},s=c();i.runRenderLoop((function(){s.render()})),window.addEventListener("resize",(function(){i.resize()})),this.scene=s}}}),c=i,s=(t("66cf"),t("2877")),u=Object(s["a"])(c,a,r,!1,null,"5ee6a5e2",null);n["default"]=u.exports},"7a3d":function(e,n,t){"use strict";t.r(n);var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("canvas",{attrs:{id:"renderCanvas"}}),t("button",{on:{click:function(n){return e.changColor()}}},[e._v("切换 颜色")]),t("button",{on:{click:function(n){return e.chang()}}},[e._v("切换 部件")])])},r=[],o=t("3890"),i=(t("7172"),{name:"parts",data:function(){return{publicPath:"/BasedOnBabylonJs/",scene:null,vol:1,carTask:null}},mounted:function(){this.ziyao()},methods:{changColor:function(){var e=new o["StandardMaterial"]("green",this.scene);e.diffuseColor=new o["Color3"](0,1,0);for(var n=0;n<this.carTask.loadedMeshes.length;n++)n%2!==0&&(this.carTask.loadedMeshes[n].material=e)},ziyao:function(){var e=this,n=document.getElementById("renderCanvas"),t=new o["Engine"](n,!0);t.enableOfflineSupport=!1;var a=function(){var a=new o["Scene"](t),r=new o["ArcRotateCamera"]("arcCam",o["Tools"].ToRadians(0),o["Tools"].ToRadians(60),20,o["Vector3"](),a);r.attachControl(n,!0),r.useAutoRotationBehavior=!0;var i=new o["PointLight"]("pointLight",new o["Vector3"](0,0,0),a);i.parent=r,i.intensity=1.5;var c=new o["AssetsManager"](a),s=c.addMeshTask("skull task","","".concat(e.publicPath,"scenes/Car/"),"1967ShelbyFordMustang.babylon");return e.carTask=s,c.load(),a},r=a();this.scene=r,t.runRenderLoop((function(){r.render()})),window.addEventListener("resize",(function(){t.resize()}))},chang:function(){var e,n=this.scene.getMeshByName("mySphere");if(n&&n.dispose(),1===this.vol){this.vol=0,e=o["MeshBuilder"].CreateBox("mySphere",{size:2},this.scene);var t=new o["StandardMaterial"]("texture1",this.scene);t.diffuseColor=new o["Color3"](.5,1,.5)}else{this.vol=1,e=o["MeshBuilder"].CreateSphere("mySphere",{diameter:2},this.scene);t=new o["StandardMaterial"]("texture2",this.scene);t.diffuseColor=new o["Color3"](.5,1,2)}e.material=t,e.position=new o["Vector3"](0,3,3)},init:function(){var e=this,n=document.getElementById("renderCanvas"),t=new o["Engine"](n,!0);t.enableOfflineSupport=!1;var a=function(){var a=new o["Scene"](t),r=new o["ArcRotateCamera"]("arcCam",o["Tools"].ToRadians(0),o["Tools"].ToRadians(60),20,o["Vector3"](),a);r.attachControl(n,!0),r.useAutoRotationBehavior=!0;var i=new o["PointLight"]("pointLight",new o["Vector3"](0,0,0),a);return i.parent=r,i.intensity=1.5,o["SceneLoader"].ImportMesh("","".concat(e.publicPath,"scenes/Car/"),"1967ShelbyFordMustang.babylon",a,(function(e){console.log(e)})),a},r=a();this.scene=r,t.runRenderLoop((function(){r.render()})),window.addEventListener("resize",(function(){t.resize()}))}}}),c=i,s=(t("a58a"),t("2877")),u=Object(s["a"])(c,a,r,!1,null,"bee48f48",null);n["default"]=u.exports},a58a:function(e,n,t){"use strict";var a=t("2992"),r=t.n(a);r.a},b969:function(e,n,t){"use strict";var a=t("2639"),r=t.n(a);r.a},c71b:function(e,n,t){"use strict";t.r(n);var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("canvas",{attrs:{id:"renderCanvas"}}),t("button",{on:{click:function(n){return e.chang()}}},[e._v("切换 形状")])])},r=[],o=t("3890"),i=(t("7172"),{name:"shape",data:function(){return{publicPath:"/BasedOnBabylonJs/"}},mounted:function(){this.init()},methods:{chang:function(){console.log("触发")},init:function(){var e=this,n=document.getElementById("renderCanvas"),t=new o["Engine"](n,!0),a=function(){var a=new o["Scene"](t),r=new o["FreeCamera"]("camera1",new o["Vector3"](0,5,-10),a);r.setTarget(o["Vector3"].Zero()),r.attachControl(n,!1);new o["HemisphericLight"]("light1",new o["Vector3"](0,1,0),a);var i=o["CubeTexture"].CreateFromPrefilteredData("".concat(e.publicPath,"textures/environment.dds"),a);a.createDefaultSkybox(i,!0);return o["SceneLoader"].Append("".concat(e.publicPath,"scenes/BoomBox/"),"BoomBox.gltf",a,(function(e){e.createDefaultCameraOrLight(!0,!0,!0),e.activeCamera.alpha+=Math.PI})),a},r=a();t.runRenderLoop((function(){r.render()})),window.addEventListener("resize",(function(){t.resize()}))}}}),c=i,s=(t("b969"),t("2877")),u=Object(s["a"])(c,a,r,!1,null,"f812409a",null);n["default"]=u.exports},d16a:function(e,n,t){},d85d:function(e,n,t){"use strict";t.r(n);var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("canvas",{attrs:{id:"renderCanvas"}}),t("button",{on:{click:function(n){return e.chang()}}},[e._v("切换 印花/贴图")])])},r=[],o=t("3890"),i=(t("7172"),{name:"printed",data:function(){return{publicPath:"/BasedOnBabylonJs/",cube:null,scene:null,vol:1}},mounted:function(){this.init()},methods:{chang:function(){console.log("触发");var e=new o["StandardMaterial"]("texture2",this.scene);1===this.vol?(e.diffuseTexture=new o["Texture"]("".concat(this.publicPath,"textures/logo.png"),this.scene),this.vol=0):(e.diffuseTexture=new o["Texture"]("".concat(this.publicPath,"textures/angular.png"),this.scene),this.vol=1),this.cube.material=e},init:function(){var e=this,n=document.getElementById("renderCanvas"),t=new o["Engine"](n,!0),a=function(){var a=new o["Scene"](t),r=new o["ArcRotateCamera"]("arcCamera",o["Tools"].ToRadians(0),o["Tools"].ToRadians(60),10,o["Vector3"].Zero(),a);r.attachControl(n,!0),r.useAutoRotationBehavior=!0;new o["HemisphericLight"]("light1",new o["Vector3"](0,1,0),a);var i=o["MeshBuilder"].CreateBox("cube",{size:3},a);return e.cube=i,a},r=a();this.scene=r,t.runRenderLoop((function(){r.render()})),window.addEventListener("resize",(function(){t.resize()}))}}}),c=i,s=(t("6589"),t("2877")),u=Object(s["a"])(c,a,r,!1,null,"e37b41dc",null);n["default"]=u.exports},f820:function(e,n,t){"use strict";t.r(n);var a=function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},r=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"about"},[t("h1",[e._v("This is an about page")])])}],o=t("2877"),i={},c=Object(o["a"])(i,a,r,!1,null,null,null);n["default"]=c.exports},feca:function(e,n,t){"use strict";t.r(n);var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("canvas",{attrs:{id:"renderCanvas"}}),t("button",{on:{click:function(n){return e.chang()}}},[e._v("切换 面料/纹理")])])},r=[],o=t("3890"),i=(t("7172"),{name:"fabric",data:function(){return{publicPath:"/BasedOnBabylonJs/",scene:null}},mounted:function(){this.init()},methods:{chang:function(){console.log("触发");var e=this.scene.getMeshByName("box").material;e.bumpTexture=new o["Texture"]("".concat(this.publicPath,"textures/gfs_no.png"),this.scene)},init:function(){var e=this,n=document.getElementById("renderCanvas"),t=new o["Engine"](n,!0),a=function(){var a=new o["Scene"](t),r=new o["Mesh"].CreateBox("box",4,a),i=new o["PointLight"]("Omni",new o["Vector3"](20,20,20),a),c=new o["ArcRotateCamera"]("Camera",o["Tools"].ToRadians(0),o["Tools"].ToRadians(60),10,o["Vector3"].Zero(),a);c.attachControl(n,!1),c.useAutoRotationBehavior=!0;var s=new o["StandardMaterial"]("material1",a);return s.diffuseTexture=new o["Texture"]("".concat(e.publicPath,"textures/gfs.png"),a),r.material=s,a.registerBeforeRender((function(){i.position=c.position})),a},r=a();this.scene=r,t.runRenderLoop((function(){r.render()})),window.addEventListener("resize",(function(){t.resize()}))}}}),c=i,s=(t("08e7"),t("2877")),u=Object(s["a"])(c,a,r,!1,null,"63eac98b",null);n["default"]=u.exports}}]);
//# sourceMappingURL=about.905c7398.js.map