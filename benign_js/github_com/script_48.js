/* 元のURL: https://github.com */
// 外部JS: https://github.githubassets.com/assets/vendors-node_modules_three_examples_jsm_loaders_GLTFLoader_js-3cd49dd18ea6.js
"use strict";(globalThis.webpackChunk_github_ui_github_ui=globalThis.webpackChunk_github_ui_github_ui||[]).push([["vendors-node_modules_three_examples_jsm_loaders_GLTFLoader_js"],{17888:(e,t,i)=>{i.d(t,{B:()=>GLTFLoader});var r=i(39437);let GLTFLoader=class GLTFLoader extends r.aHM{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new GLTFMaterialsClearcoatExtension(e)}),this.register(function(e){return new GLTFTextureBasisUExtension(e)}),this.register(function(e){return new GLTFTextureWebPExtension(e)}),this.register(function(e){return new GLTFMaterialsSheenExtension(e)}),this.register(function(e){return new GLTFMaterialsTransmissionExtension(e)}),this.register(function(e){return new GLTFMaterialsVolumeExtension(e)}),this.register(function(e){return new GLTFMaterialsIorExtension(e)}),this.register(function(e){return new GLTFMaterialsEmissiveStrengthExtension(e)}),this.register(function(e){return new GLTFMaterialsSpecularExtension(e)}),this.register(function(e){return new GLTFMaterialsIridescenceExtension(e)}),this.register(function(e){return new GLTFLightsExtension(e)}),this.register(function(e){return new GLTFMeshoptCompression(e)}),this.register(function(e){return new GLTFMeshGpuInstancing(e)})}load(e,t,i,a){let n,s=this;n=""!==this.resourcePath?this.resourcePath:""!==this.path?this.path:r.r6x.extractUrlBase(e),this.manager.itemStart(e);let o=function(t){a?a(t):console.error(t),s.manager.itemError(e),s.manager.itemEnd(e)},l=new r.Y9S(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(i){try{s.parse(i,n,function(i){t(i),s.manager.itemEnd(e)},o)}catch(e){o(e)}},i,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return -1===this.pluginCallbacks.indexOf(e)&&this.pluginCallbacks.push(e),this}unregister(e){return -1!==this.pluginCallbacks.indexOf(e)&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,a){let o,l={},h={};if("string"==typeof e)o=JSON.parse(e);else if(e instanceof ArrayBuffer)if(r.r6x.decodeText(new Uint8Array(e,0,4))===s){try{l[n.KHR_BINARY_GLTF]=new GLTFBinaryExtension(e)}catch(e){a&&a(e);return}o=JSON.parse(l[n.KHR_BINARY_GLTF].content)}else o=JSON.parse(r.r6x.decodeText(new Uint8Array(e)));else o=e;if(void 0===o.asset||o.asset.version[0]<2){a&&a(Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new GLTFParser(o,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let e=0;e<this.pluginCallbacks.length;e++){let t=this.pluginCallbacks[e](c);h[t.name]=t,l[t.name]=!0}if(o.extensionsUsed)for(let e=0;e<o.extensionsUsed.length;++e){let t=o.extensionsUsed[e],i=o.extensionsRequired||[];switch(t){case n.KHR_MATERIALS_UNLIT:l[t]=new GLTFMaterialsUnlitExtension;break;case n.KHR_DRACO_MESH_COMPRESSION:l[t]=new GLTFDracoMeshCompressionExtension(o,this.dracoLoader);break;case n.KHR_TEXTURE_TRANSFORM:l[t]=new GLTFTextureTransformExtension;break;case n.KHR_MESH_QUANTIZATION:l[t]=new GLTFMeshQuantizationExtension;break;default:i.indexOf(t)>=0&&void 0===h[t]&&console.warn('THREE.GLTFLoader: Unknown extension "'+t+'".')}}c.setExtensions(l),c.setPlugins(h),c.parse(i,a)}parseAsync(e,t){let i=this;return new Promise(function(r,a){i.parse(e,t,r,a)})}};function a(){let e={};return{get:function(t){return e[t]},add:function(t,i){e[t]=i},remove:function(t){delete e[t]},removeAll:function(){e={}}}}let n={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};let GLTFLightsExtension=class GLTFLightsExtension{constructor(e){this.parser=e,this.name=n.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let i=0,r=t.length;i<r;i++){let r=t[i];r.extensions&&r.extensions[this.name]&&void 0!==r.extensions[this.name].light&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t,i=this.parser,a="light:"+e,n=i.cache.get(a);if(n)return n;let s=i.json,o=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e],l=new r.Q1f(0xffffff);void 0!==o.color&&l.fromArray(o.color);let h=void 0!==o.range?o.range:0;switch(o.type){case"directional":(t=new r.ZyN(l)).target.position.set(0,0,-1),t.add(t.target);break;case"point":(t=new r.HiM(l)).distance=h;break;case"spot":(t=new r.nCl(l)).distance=h,o.spot=o.spot||{},o.spot.innerConeAngle=void 0!==o.spot.innerConeAngle?o.spot.innerConeAngle:0,o.spot.outerConeAngle=void 0!==o.spot.outerConeAngle?o.spot.outerConeAngle:Math.PI/4,t.angle=o.spot.outerConeAngle,t.penumbra=1-o.spot.innerConeAngle/o.spot.outerConeAngle,t.target.position.set(0,0,-1),t.add(t.target);break;default:throw Error("THREE.GLTFLoader: Unexpected light type: "+o.type)}return t.position.set(0,0,0),t.decay=2,x(t,o),void 0!==o.intensity&&(t.intensity=o.intensity),t.name=i.createUniqueName(o.name||"light_"+e),n=Promise.resolve(t),i.cache.add(a,n),n}getDependency(e,t){if("light"===e)return this._loadLight(t)}createNodeAttachment(e){let t=this,i=this.parser,r=i.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return void 0===a?null:this._loadLight(a).then(function(e){return i._getNodeRef(t.cache,a,e)})}};let GLTFMaterialsUnlitExtension=class GLTFMaterialsUnlitExtension{constructor(){this.name=n.KHR_MATERIALS_UNLIT}getMaterialType(){return r.V9B}extendParams(e,t,i){let a=[];e.color=new r.Q1f(1,1,1),e.opacity=1;let n=t.pbrMetallicRoughness;if(n){if(Array.isArray(n.baseColorFactor)){let t=n.baseColorFactor;e.color.fromArray(t),e.opacity=t[3]}void 0!==n.baseColorTexture&&a.push(i.assignTexture(e,"map",n.baseColorTexture,r.S2Q))}return Promise.all(a)}};let GLTFMaterialsEmissiveStrengthExtension=class GLTFMaterialsEmissiveStrengthExtension{constructor(e){this.parser=e,this.name=n.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name].emissiveStrength;return void 0!==r&&(t.emissiveIntensity=r),Promise.resolve()}};let GLTFMaterialsClearcoatExtension=class GLTFMaterialsClearcoatExtension{constructor(e){this.parser=e,this.name=n.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let t=this.parser.json.materials[e];return t.extensions&&t.extensions[this.name]?r.uSd:null}extendMaterialParams(e,t){let i=this.parser,a=i.json.materials[e];if(!a.extensions||!a.extensions[this.name])return Promise.resolve();let n=[],s=a.extensions[this.name];if(void 0!==s.clearcoatFactor&&(t.clearcoat=s.clearcoatFactor),void 0!==s.clearcoatTexture&&n.push(i.assignTexture(t,"clearcoatMap",s.clearcoatTexture)),void 0!==s.clearcoatRoughnessFactor&&(t.clearcoatRoughness=s.clearcoatRoughnessFactor),void 0!==s.clearcoatRoughnessTexture&&n.push(i.assignTexture(t,"clearcoatRoughnessMap",s.clearcoatRoughnessTexture)),void 0!==s.clearcoatNormalTexture&&(n.push(i.assignTexture(t,"clearcoatNormalMap",s.clearcoatNormalTexture)),void 0!==s.clearcoatNormalTexture.scale)){let e=s.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new r.I9Y(e,e)}return Promise.all(n)}};let GLTFMaterialsIridescenceExtension=class GLTFMaterialsIridescenceExtension{constructor(e){this.parser=e,this.name=n.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let t=this.parser.json.materials[e];return t.extensions&&t.extensions[this.name]?r.uSd:null}extendMaterialParams(e,t){let i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let a=[],n=r.extensions[this.name];return void 0!==n.iridescenceFactor&&(t.iridescence=n.iridescenceFactor),void 0!==n.iridescenceTexture&&a.push(i.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),void 0!==n.iridescenceIor&&(t.iridescenceIOR=n.iridescenceIor),void 0===t.iridescenceThicknessRange&&(t.iridescenceThicknessRange=[100,400]),void 0!==n.iridescenceThicknessMinimum&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),void 0!==n.iridescenceThicknessMaximum&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),void 0!==n.iridescenceThicknessTexture&&a.push(i.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(a)}};let GLTFMaterialsSheenExtension=class GLTFMaterialsSheenExtension{constructor(e){this.parser=e,this.name=n.KHR_MATERIALS_SHEEN}getMaterialType(e){let t=this.parser.json.materials[e];return t.extensions&&t.extensions[this.name]?r.uSd:null}extendMaterialParams(e,t){let i=this.parser,a=i.json.materials[e];if(!a.extensions||!a.extensions[this.name])return Promise.resolve();let n=[];t.sheenColor=new r.Q1f(0,0,0),t.sheenRoughness=0,t.sheen=1;let s=a.extensions[this.name];return void 0!==s.sheenColorFactor&&t.sheenColor.fromArray(s.sheenColorFactor),void 0!==s.sheenRoughnessFactor&&(t.sheenRoughness=s.sheenRoughnessFactor),void 0!==s.sheenColorTexture&&n.push(i.assignTexture(t,"sheenColorMap",s.sheenColorTexture,r.S2Q)),void 0!==s.sheenRoughnessTexture&&n.push(i.assignTexture(t,"sheenRoughnessMap",s.sheenRoughnessTexture)),Promise.all(n)}};let GLTFMaterialsTransmissionExtension=class GLTFMaterialsTransmissionExtension{constructor(e){this.parser=e,this.name=n.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let t=this.parser.json.materials[e];return t.extensions&&t.extensions[this.name]?r.uSd:null}extendMaterialParams(e,t){let i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let a=[],n=r.extensions[this.name];return void 0!==n.transmissionFactor&&(t.transmission=n.transmissionFactor),void 0!==n.transmissionTexture&&a.push(i.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(a)}};let GLTFMaterialsVolumeExtension=class GLTFMaterialsVolumeExtension{constructor(e){this.parser=e,this.name=n.KHR_MATERIALS_VOLUME}getMaterialType(e){let t=this.parser.json.materials[e];return t.extensions&&t.extensions[this.name]?r.uSd:null}extendMaterialParams(e,t){let i=this.parser,a=i.json.materials[e];if(!a.extensions||!a.extensions[this.name])return Promise.resolve();let n=[],s=a.extensions[this.name];t.thickness=void 0!==s.thicknessFactor?s.thicknessFactor:0,void 0!==s.thicknessTexture&&n.push(i.assignTexture(t,"thicknessMap",s.thicknessTexture)),t.attenuationDistance=s.attenuationDistance||1/0;let o=s.attenuationColor||[1,1,1];return t.attenuationColor=new r.Q1f(o[0],o[1],o[2]),Promise.all(n)}};let GLTFMaterialsIorExtension=class GLTFMaterialsIorExtension{constructor(e){this.parser=e,this.name=n.KHR_MATERIALS_IOR}getMaterialType(e){let t=this.parser.json.materials[e];return t.extensions&&t.extensions[this.name]?r.uSd:null}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return t.ior=void 0!==r.ior?r.ior:1.5,Promise.resolve()}};let GLTFMaterialsSpecularExtension=class GLTFMaterialsSpecularExtension{constructor(e){this.parser=e,this.name=n.KHR_MATERIALS_SPECULAR}getMaterialType(e){let t=this.parser.json.materials[e];return t.extensions&&t.extensions[this.name]?r.uSd:null}extendMaterialParams(e,t){let i=this.parser,a=i.json.materials[e];if(!a.extensions||!a.extensions[this.name])return Promise.resolve();let n=[],s=a.extensions[this.name];t.specularIntensity=void 0!==s.specularFactor?s.specularFactor:1,void 0!==s.specularTexture&&n.push(i.assignTexture(t,"specularIntensityMap",s.specularTexture));let o=s.specularColorFactor||[1,1,1];return t.specularColor=new r.Q1f(o[0],o[1],o[2]),void 0!==s.specularColorTexture&&n.push(i.assignTexture(t,"specularColorMap",s.specularColorTexture,r.S2Q)),Promise.all(n)}};let GLTFTextureBasisUExtension=class GLTFTextureBasisUExtension{constructor(e){this.parser=e,this.name=n.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,i=t.json,r=i.textures[e];if(!r.extensions||!r.extensions[this.name])return null;let a=r.extensions[this.name],n=t.options.ktx2Loader;if(!n)if(!(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0))return null;else throw Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return t.loadTextureImage(e,a.source,n)}};let GLTFTextureWebPExtension=class GLTFTextureWebPExtension{constructor(e){this.parser=e,this.name=n.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,i=this.parser,r=i.json,a=r.textures[e];if(!a.extensions||!a.extensions[t])return null;let n=a.extensions[t],s=r.images[n.source],o=i.textureLoader;if(s.uri){let e=i.options.manager.getHandler(s.uri);null!==e&&(o=e)}return this.detectSupport().then(function(a){if(a)return i.loadTextureImage(e,n.source,o);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(1===t.height)}})),this.isSupported}};let GLTFMeshoptCompression=class GLTFMeshoptCompression{constructor(e){this.name=n.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,i=t.bufferViews[e];if(!i.extensions||!i.extensions[this.name])return null;{let e=i.extensions[this.name],r=this.parser.getDependency("buffer",e.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported)if(!(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0))return null;else throw Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return r.then(function(t){let i=e.byteOffset||0,r=e.byteLength||0,n=e.count,s=e.byteStride,o=new Uint8Array(t,i,r);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(n,s,o,e.mode,e.filter).then(function(e){return e.buffer}):a.ready.then(function(){let t=new ArrayBuffer(n*s);return a.decodeGltfBuffer(new Uint8Array(t),n,s,o,e.mode,e.filter),t})})}}};let GLTFMeshGpuInstancing=class GLTFMeshGpuInstancing{constructor(e){this.name=n.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||void 0===i.mesh)return null;for(let e of t.meshes[i.mesh].primitives)if(e.mode!==h.TRIANGLES&&e.mode!==h.TRIANGLE_STRIP&&e.mode!==h.TRIANGLE_FAN&&void 0!==e.mode)return null;let a=i.extensions[this.name].attributes,n=[],s={};for(let e in a)n.push(this.parser.getDependency("accessor",a[e]).then(t=>(s[e]=t,s[e])));return n.length<1?null:(n.push(this.parser.createNodeMesh(e)),Promise.all(n).then(e=>{let t=e.pop(),i=t.isGroup?t.children:[t],a=e[0].count,n=[];for(let e of i){let t=new r.kn4,i=new r.Pq0,o=new r.PTz,l=new r.Pq0(1,1,1),h=new r.ZLX(e.geometry,e.material,a);for(let e=0;e<a;e++)s.TRANSLATION&&i.fromBufferAttribute(s.TRANSLATION,e),s.ROTATION&&o.fromBufferAttribute(s.ROTATION,e),s.SCALE&&l.fromBufferAttribute(s.SCALE,e),h.setMatrixAt(e,t.compose(i,o,l));for(let t in s)"TRANSLATION"!==t&&"ROTATION"!==t&&"SCALE"!==t&&e.geometry.setAttribute(t,s[t]);r.B69.prototype.copy.call(h,e),h.frustumCulled=!1,this.parser.assignFinalMaterial(h),n.push(h)}return t.isGroup?(t.clear(),t.add(...n),t):n[0]}))}};let s="glTF",o={JSON:0x4e4f534a,BIN:5130562};let GLTFBinaryExtension=class GLTFBinaryExtension{constructor(e){this.name=n.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,12);if(this.header={magic:r.r6x.decodeText(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==s)throw Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-12,a=new DataView(e,12),l=0;for(;l<i;){let t=a.getUint32(l,!0);l+=4;let i=a.getUint32(l,!0);if(l+=4,i===o.JSON){let i=new Uint8Array(e,12+l,t);this.content=r.r6x.decodeText(i)}else if(i===o.BIN){let i=12+l;this.body=e.slice(i,i+t)}l+=t}if(null===this.content)throw Error("THREE.GLTFLoader: JSON content not found.")}};let GLTFDracoMeshCompressionExtension=class GLTFDracoMeshCompressionExtension{constructor(e,t){if(!t)throw Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=n.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let i=this.json,r=this.dracoLoader,a=e.extensions[this.name].bufferView,n=e.extensions[this.name].attributes,s={},o={},l={};for(let e in n)s[f[e]||e.toLowerCase()]=n[e];for(let t in e.attributes){let r=f[t]||t.toLowerCase();if(void 0!==n[t]){let a=i.accessors[e.attributes[t]],n=c[a.componentType];l[r]=n.name,o[r]=!0===a.normalized}}return t.getDependency("bufferView",a).then(function(e){return new Promise(function(t){r.decodeDracoFile(e,function(e){for(let t in e.attributes){let i=e.attributes[t],r=o[t];void 0!==r&&(i.normalized=r)}t(e)},s,l)})})}};let GLTFTextureTransformExtension=class GLTFTextureTransformExtension{constructor(){this.name=n.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return void 0!==t.texCoord&&console.warn('THREE.GLTFLoader: Custom UV sets in "'+this.name+'" extension not yet supported.'),void 0===t.offset&&void 0===t.rotation&&void 0===t.scale||(e=e.clone(),void 0!==t.offset&&e.offset.fromArray(t.offset),void 0!==t.rotation&&(e.rotation=t.rotation),void 0!==t.scale&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}};let GLTFMeshQuantizationExtension=class GLTFMeshQuantizationExtension{constructor(){this.name=n.KHR_MESH_QUANTIZATION}};let GLTFCubicSplineInterpolant=class GLTFCubicSplineInterpolant extends r.lGw{constructor(e,t,i,r){super(e,t,i,r)}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,a=e*r*3+r;for(let e=0;e!==r;e++)t[e]=i[a+e];return t}interpolate_(e,t,i,r){let a=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=2*s,l=3*s,h=r-t,c=(i-t)/h,u=c*c,d=u*c,p=e*l,f=p-l,m=-2*d+3*u,g=d-u,v=1-m,_=g-u+c;for(let e=0;e!==s;e++){let t=n[f+e+s],i=n[f+e+o]*h,r=n[p+e+s],l=n[p+e]*h;a[e]=v*t+_*i+m*r+g*l}return a}};let l=new r.PTz;let GLTFCubicSplineQuaternionInterpolant=class GLTFCubicSplineQuaternionInterpolant extends GLTFCubicSplineInterpolant{interpolate_(e,t,i,r){let a=super.interpolate_(e,t,i,r);return l.fromArray(a).normalize().toArray(a),a}};let h={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},c={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},u={9728:r.hxR,9729:r.k6q,9984:r.pHI,9985:r.kRr,9986:r.Cfg,9987:r.$_I},d={33071:r.ghU,33648:r.kTW,10497:r.GJx},p={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},f={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv2",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},m={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},g={CUBICSPLINE:void 0,LINEAR:r.PJ3,STEP:r.ljd},v={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function _(e,t,i){for(let r in i.extensions)void 0===e[r]&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[r]=i.extensions[r])}function x(e,t){void 0!==t.extras&&("object"==typeof t.extras?Object.assign(e.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function y(e){let t="",i=Object.keys(e).sort();for(let r=0,a=i.length;r<a;r++)t+=i[r]+":"+e[i[r]]+";";return t}function M(e){switch(e){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}let b=new r.kn4;let GLTFParser=class GLTFParser{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new a,this.associations=new Map,this.primitiveCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,n=!1,s=-1;"undefined"!=typeof navigator&&(i=!0===/^((?!chrome|android).)*safari/i.test(navigator.userAgent),s=(n=navigator.userAgent.indexOf("Firefox")>-1)?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),"undefined"==typeof createImageBitmap||i||n&&s<98?this.textureLoader=new r.Tap(this.options.manager):this.textureLoader=new r.Kzg(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new r.Y9S(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),"use-credentials"===this.options.crossOrigin&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let i=this,r=this.json,a=this.extensions;this.cache.removeAll(),this._invokeAll(function(e){return e._markDefs&&e._markDefs()}),Promise.all(this._invokeAll(function(e){return e.beforeRoot&&e.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(t){let n={scene:t[0][r.scene||0],scenes:t[0],animations:t[1],cameras:t[2],asset:r.asset,parser:i,userData:{}};_(a,n,r),x(n,r),Promise.all(i._invokeAll(function(e){return e.afterRoot&&e.afterRoot(n)})).then(function(){e(n)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){let r=t[i].joints;for(let t=0,i=r.length;t<i;t++)e[r[t]].isBone=!0}for(let t=0,r=e.length;t<r;t++){let r=e[t];void 0!==r.mesh&&(this._addNodeRef(this.meshCache,r.mesh),void 0!==r.skin&&(i[r.mesh].isSkinnedMesh=!0)),void 0!==r.camera&&this._addNodeRef(this.cameraCache,r.camera)}}_addNodeRef(e,t){void 0!==t&&(void 0===e.refs[t]&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;let r=i.clone(),a=(e,t)=>{let i=this.associations.get(e);for(let[r,n]of(null!=i&&this.associations.set(t,i),e.children.entries()))a(n,t.children[r])};return a(i,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){let r=e(t[i]);if(r)return r}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let i=[];for(let r=0;r<t.length;r++){let a=e(t[r]);a&&i.push(a)}return i}getDependency(e,t){let i=e+":"+t,r=this.cache.get(i);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(e){return e.loadNode&&e.loadNode(t)});break;case"mesh":r=this._invokeOne(function(e){return e.loadMesh&&e.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(e){return e.loadBufferView&&e.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(e){return e.loadMaterial&&e.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(e){return e.loadTexture&&e.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(e){return e.loadAnimation&&e.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(!(r=this._invokeOne(function(i){return i!=this&&i.getDependency&&i.getDependency(e,t)})))throw Error("Unknown type: "+e)}this.cache.add(i,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){let i=this;t=Promise.all((this.json[e+("mesh"===e?"es":"s")]||[]).map(function(t,r){return i.getDependency(e,r)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],i=this.fileLoader;if(t.type&&"arraybuffer"!==t.type)throw Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(void 0===t.uri&&0===e)return Promise.resolve(this.extensions[n.KHR_BINARY_GLTF].body);let a=this.options;return new Promise(function(e,n){i.load(r.r6x.resolveURL(t.uri,a.path),e,void 0,function(){n(Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(e){let i=t.byteLength||0,r=t.byteOffset||0;return e.slice(r,r+i)})}loadAccessor(e){let t=this,i=this.json,a=this.json.accessors[e];if(void 0===a.bufferView&&void 0===a.sparse){let e=p[a.type],t=c[a.componentType],i=!0===a.normalized,n=new t(a.count*e);return Promise.resolve(new r.THS(n,e,i))}let n=[];return void 0!==a.bufferView?n.push(this.getDependency("bufferView",a.bufferView)):n.push(null),void 0!==a.sparse&&(n.push(this.getDependency("bufferView",a.sparse.indices.bufferView)),n.push(this.getDependency("bufferView",a.sparse.values.bufferView))),Promise.all(n).then(function(e){let n,s,o=e[0],l=p[a.type],h=c[a.componentType],u=h.BYTES_PER_ELEMENT,d=u*l,f=a.byteOffset||0,m=void 0!==a.bufferView?i.bufferViews[a.bufferView].byteStride:void 0,g=!0===a.normalized;if(m&&m!==d){let e=Math.floor(f/m),i="InterleavedBuffer:"+a.bufferView+":"+a.componentType+":"+e+":"+a.count,c=t.cache.get(i);c||(n=new h(o,e*m,a.count*m/u),c=new r.eB$(n,m/u),t.cache.add(i,c)),s=new r.eHs(c,l,f%m/u,g)}else n=null===o?new h(a.count*l):new h(o,f,a.count*l),s=new r.THS(n,l,g);if(void 0!==a.sparse){let t=p.SCALAR,i=c[a.sparse.indices.componentType],n=a.sparse.indices.byteOffset||0,u=a.sparse.values.byteOffset||0,d=new i(e[1],n,a.sparse.count*t),f=new h(e[2],u,a.sparse.count*l);null!==o&&(s=new r.THS(s.array.slice(),s.itemSize,s.normalized));for(let e=0,t=d.length;e<t;e++){let t=d[e];if(s.setX(t,f[e*l]),l>=2&&s.setY(t,f[e*l+1]),l>=3&&s.setZ(t,f[e*l+2]),l>=4&&s.setW(t,f[e*l+3]),l>=5)throw Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return s})}loadTexture(e){let t=this.json,i=this.options,r=t.textures[e].source,a=t.images[r],n=this.textureLoader;if(a.uri){let e=i.manager.getHandler(a.uri);null!==e&&(n=e)}return this.loadTextureImage(e,r,n)}loadTextureImage(e,t,i){let a=this,n=this.json,s=n.textures[e],o=n.images[t],l=(o.uri||o.bufferView)+":"+s.sampler;if(this.textureCache[l])return this.textureCache[l];let h=this.loadImageSource(t,i).then(function(t){t.flipY=!1,t.name=s.name||o.name||"";let i=(n.samplers||{})[s.sampler]||{};return t.magFilter=u[i.magFilter]||r.k6q,t.minFilter=u[i.minFilter]||r.$_I,t.wrapS=d[i.wrapS]||r.GJx,t.wrapT=d[i.wrapT]||r.GJx,a.associations.set(t,{textures:e}),t}).catch(function(){return null});return this.textureCache[l]=h,h}loadImageSource(e,t){let i=this.json,a=this.options;if(void 0!==this.sourceCache[e])return this.sourceCache[e].then(e=>e.clone());let n=i.images[e],s=self.URL||self.webkitURL,o=n.uri||"",l=!1;if(void 0!==n.bufferView)o=this.getDependency("bufferView",n.bufferView).then(function(e){l=!0;let t=new Blob([e],{type:n.mimeType});return o=s.createObjectURL(t)});else if(void 0===n.uri)throw Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(o).then(function(e){return new Promise(function(i,n){let s=i;!0===t.isImageBitmapLoader&&(s=function(e){let t=new r.gPd(e);t.needsUpdate=!0,i(t)}),t.load(r.r6x.resolveURL(e,a.path),s,void 0,n)})}).then(function(e){var t;return!0===l&&s.revokeObjectURL(o),e.userData.mimeType=n.mimeType||((t=n.uri).search(/\.jpe?g($|\?)/i)>0||0===t.search(/^data\:image\/jpeg/)?"image/jpeg":t.search(/\.webp($|\?)/i)>0||0===t.search(/^data\:image\/webp/)?"image/webp":"image/png"),e}).catch(function(e){throw console.error("THREE.GLTFLoader: Couldn't load texture",o),e});return this.sourceCache[e]=h,h}assignTexture(e,t,i,r){let a=this;return this.getDependency("texture",i.index).then(function(s){if(!s)return null;if(void 0!==i.texCoord&&0!=i.texCoord&&("aoMap"!==t||1!=i.texCoord)&&console.warn("THREE.GLTFLoader: Custom UV set "+i.texCoord+" for texture "+t+" not yet supported."),a.extensions[n.KHR_TEXTURE_TRANSFORM]){let e=void 0!==i.extensions?i.extensions[n.KHR_TEXTURE_TRANSFORM]:void 0;if(e){let t=a.associations.get(s);s=a.extensions[n.KHR_TEXTURE_TRANSFORM].extendTexture(s,e),a.associations.set(s,t)}}return void 0!==r&&(s.encoding=r),e[t]=s,s})}assignFinalMaterial(e){let t=e.geometry,i=e.material,a=void 0===t.attributes.tangent,n=void 0!==t.attributes.color,s=void 0===t.attributes.normal;if(e.isPoints){let e="PointsMaterial:"+i.uuid,t=this.cache.get(e);t||(t=new r.BH$,r.imn.prototype.copy.call(t,i),t.color.copy(i.color),t.map=i.map,t.sizeAttenuation=!1,this.cache.add(e,t)),i=t}else if(e.isLine){let e="LineBasicMaterial:"+i.uuid,t=this.cache.get(e);t||(t=new r.mrM,r.imn.prototype.copy.call(t,i),t.color.copy(i.color),this.cache.add(e,t)),i=t}if(a||n||s){let e="ClonedMaterial:"+i.uuid+":";a&&(e+="derivative-tangents:"),n&&(e+="vertex-colors:"),s&&(e+="flat-shading:");let t=this.cache.get(e);t||(t=i.clone(),n&&(t.vertexColors=!0),s&&(t.flatShading=!0),a&&(t.normalScale&&(t.normalScale.y*=-1),t.clearcoatNormalScale&&(t.clearcoatNormalScale.y*=-1)),this.cache.add(e,t),this.associations.set(t,this.associations.get(i))),i=t}i.aoMap&&void 0===t.attributes.uv2&&void 0!==t.attributes.uv&&t.setAttribute("uv2",t.attributes.uv),e.material=i}getMaterialType(){return r._4j}loadMaterial(e){let t,i=this,a=this.json,s=this.extensions,o=a.materials[e],l={},h=o.extensions||{},c=[];if(h[n.KHR_MATERIALS_UNLIT]){let e=s[n.KHR_MATERIALS_UNLIT];t=e.getMaterialType(),c.push(e.extendParams(l,o,i))}else{let a=o.pbrMetallicRoughness||{};if(l.color=new r.Q1f(1,1,1),l.opacity=1,Array.isArray(a.baseColorFactor)){let e=a.baseColorFactor;l.color.fromArray(e),l.opacity=e[3]}void 0!==a.baseColorTexture&&c.push(i.assignTexture(l,"map",a.baseColorTexture,r.S2Q)),l.metalness=void 0!==a.metallicFactor?a.metallicFactor:1,l.roughness=void 0!==a.roughnessFactor?a.roughnessFactor:1,void 0!==a.metallicRoughnessTexture&&(c.push(i.assignTexture(l,"metalnessMap",a.metallicRoughnessTexture)),c.push(i.assignTexture(l,"roughnessMap",a.metallicRoughnessTexture))),t=this._invokeOne(function(t){return t.getMaterialType&&t.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(t){return t.extendMaterialParams&&t.extendMaterialParams(e,l)})))}!0===o.doubleSided&&(l.side=r.$EB);let u=o.alphaMode||v.OPAQUE;if(u===v.BLEND?(l.transparent=!0,l.depthWrite=!1):(l.transparent=!1,u===v.MASK&&(l.alphaTest=void 0!==o.alphaCutoff?o.alphaCutoff:.5)),void 0!==o.normalTexture&&t!==r.V9B&&(c.push(i.assignTexture(l,"normalMap",o.normalTexture)),l.normalScale=new r.I9Y(1,1),void 0!==o.normalTexture.scale)){let e=o.normalTexture.scale;l.normalScale.set(e,e)}return void 0!==o.occlusionTexture&&t!==r.V9B&&(c.push(i.assignTexture(l,"aoMap",o.occlusionTexture)),void 0!==o.occlusionTexture.strength&&(l.aoMapIntensity=o.occlusionTexture.strength)),void 0!==o.emissiveFactor&&t!==r.V9B&&(l.emissive=new r.Q1f().fromArray(o.emissiveFactor)),void 0!==o.emissiveTexture&&t!==r.V9B&&c.push(i.assignTexture(l,"emissiveMap",o.emissiveTexture,r.S2Q)),Promise.all(c).then(function(){let r=new t(l);return o.name&&(r.name=o.name),x(r,o),i.associations.set(r,{materials:e}),o.extensions&&_(s,r,o),r})}createUniqueName(e){let t=r.Nwf.sanitizeNodeName(e||""),i=t;for(let e=1;this.nodeNamesUsed[i];++e)i=t+"_"+e;return this.nodeNamesUsed[i]=!0,i}loadGeometries(e){let t=this,i=this.extensions,a=this.primitiveCache,s=[];for(let o=0,l=e.length;o<l;o++){let l=e[o],h=function(e){let t=e.extensions&&e.extensions[n.KHR_DRACO_MESH_COMPRESSION];return t?"draco:"+t.bufferView+":"+t.indices+":"+y(t.attributes):e.indices+":"+y(e.attributes)+":"+e.mode}(l),c=a[h];if(c)s.push(c.promise);else{let e;e=l.extensions&&l.extensions[n.KHR_DRACO_MESH_COMPRESSION]?function(e){return i[n.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(e,t).then(function(i){return S(i,e,t)})}(l):S(new r.LoY,l,t),a[h]={primitive:l,promise:e},s.push(e)}}return Promise.all(s)}loadMesh(e){let t=this,i=this.json,a=this.extensions,n=i.meshes[e],s=n.primitives,o=[];for(let e=0,t=s.length;e<t;e++){var l;let t=void 0===s[e].material?(void 0===(l=this.cache).DefaultMaterial&&(l.DefaultMaterial=new r._4j({color:0xffffff,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:r.hB5})),l.DefaultMaterial):this.getDependency("material",s[e].material);o.push(t)}return o.push(t.loadGeometries(s)),Promise.all(o).then(function(i){let o=i.slice(0,i.length-1),l=i[i.length-1],c=[];for(let i=0,u=l.length;i<u;i++){let u,d=l[i],p=s[i],f=o[i];if(p.mode===h.TRIANGLES||p.mode===h.TRIANGLE_STRIP||p.mode===h.TRIANGLE_FAN||void 0===p.mode)!0!==(u=!0===n.isSkinnedMesh?new r.I46(d,f):new r.eaF(d,f)).isSkinnedMesh||u.geometry.attributes.skinWeight.normalized||u.normalizeSkinWeights(),p.mode===h.TRIANGLE_STRIP?u.geometry=T(u.geometry,r.O49):p.mode===h.TRIANGLE_FAN&&(u.geometry=T(u.geometry,r.rYR));else if(p.mode===h.LINES)u=new r.DXC(d,f);else if(p.mode===h.LINE_STRIP)u=new r.N1A(d,f);else if(p.mode===h.LINE_LOOP)u=new r.FCc(d,f);else if(p.mode===h.POINTS)u=new r.ONl(d,f);else throw Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(u.geometry.morphAttributes).length>0&&function(e,t){if(e.updateMorphTargets(),void 0!==t.weights)for(let i=0,r=t.weights.length;i<r;i++)e.morphTargetInfluences[i]=t.weights[i];if(t.extras&&Array.isArray(t.extras.targetNames)){let i=t.extras.targetNames;if(e.morphTargetInfluences.length===i.length){e.morphTargetDictionary={};for(let t=0,r=i.length;t<r;t++)e.morphTargetDictionary[i[t]]=t}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}(u,n),u.name=t.createUniqueName(n.name||"mesh_"+e),x(u,n),p.extensions&&_(a,u,p),t.assignFinalMaterial(u),c.push(u)}for(let i=0,r=c.length;i<r;i++)t.associations.set(c[i],{meshes:e,primitives:i});if(1===c.length)return c[0];let u=new r.YJl;t.associations.set(u,{meshes:e});for(let e=0,t=c.length;e<t;e++)u.add(c[e]);return u})}loadCamera(e){let t,i=this.json.cameras[e],a=i[i.type];return a?("perspective"===i.type?t=new r.ubm(r.cj9.radToDeg(a.yfov),a.aspectRatio||1,a.znear||1,a.zfar||2e6):"orthographic"===i.type&&(t=new r.qUd(-a.xmag,a.xmag,a.ymag,-a.ymag,a.znear,a.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),x(t,i),Promise.resolve(t)):void console.warn("THREE.GLTFLoader: Missing camera parameters.")}loadSkin(e){let t=this.json.skins[e],i=[];for(let e=0,r=t.joints.length;e<r;e++)i.push(this.getDependency("node",t.joints[e]));return void 0!==t.inverseBindMatrices?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(e){let i=e.pop(),a=[],n=[];for(let s=0,o=e.length;s<o;s++){let o=e[s];if(o){a.push(o);let e=new r.kn4;null!==i&&e.fromArray(i.array,16*s),n.push(e)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[s])}return new r.EAD(a,n)})}loadAnimation(e){let t=this.json.animations[e],i=[],a=[],n=[],s=[],o=[];for(let e=0,r=t.channels.length;e<r;e++){let r=t.channels[e],l=t.samplers[r.sampler],h=r.target,c=h.node,u=void 0!==t.parameters?t.parameters[l.input]:l.input,d=void 0!==t.parameters?t.parameters[l.output]:l.output;i.push(this.getDependency("node",c)),a.push(this.getDependency("accessor",u)),n.push(this.getDependency("accessor",d)),s.push(l),o.push(h)}return Promise.all([Promise.all(i),Promise.all(a),Promise.all(n),Promise.all(s),Promise.all(o)]).then(function(i){let a=i[0],n=i[1],s=i[2],o=i[3],l=i[4],h=[];for(let e=0,t=a.length;e<t;e++){let t,i=a[e],c=n[e],u=s[e],d=o[e],p=l[e];if(void 0===i)continue;switch(i.updateMatrix(),m[p.path]){case m.weights:t=r.Hit;break;case m.rotation:t=r.MBL;break;case m.position:case m.scale:default:t=r.RiT}let f=i.name?i.name:i.uuid,v=void 0!==d.interpolation?g[d.interpolation]:r.PJ3,_=[];m[p.path]===m.weights?i.traverse(function(e){e.morphTargetInfluences&&_.push(e.name?e.name:e.uuid)}):_.push(f);let x=u.array;if(u.normalized){let e=M(x.constructor),t=new Float32Array(x.length);for(let i=0,r=x.length;i<r;i++)t[i]=x[i]*e;x=t}for(let e=0,i=_.length;e<i;e++){let i=new t(_[e]+"."+m[p.path],c.array,x,v);"CUBICSPLINE"===d.interpolation&&(i.createInterpolant=function(e){return new(this instanceof r.MBL?GLTFCubicSplineQuaternionInterpolant:GLTFCubicSplineInterpolant)(this.times,this.values,this.getValueSize()/3,e)},i.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),h.push(i)}}let c=t.name?t.name:"animation_"+e;return new r.tz3(c,void 0,h)})}createNodeMesh(e){let t=this.json,i=this,r=t.nodes[e];return void 0===r.mesh?null:i.getDependency("mesh",r.mesh).then(function(e){let t=i._getNodeRef(i.meshCache,r.mesh,e);return void 0!==r.weights&&t.traverse(function(e){if(e.isMesh)for(let t=0,i=r.weights.length;t<i;t++)e.morphTargetInfluences[t]=r.weights[t]}),t})}loadNode(e){let t=this.json,i=this.extensions,a=this,n=t.nodes[e],s=n.name?a.createUniqueName(n.name):"";return(function(){let t=[],i=a._invokeOne(function(t){return t.createNodeMesh&&t.createNodeMesh(e)});i&&t.push(i),void 0!==n.camera&&t.push(a.getDependency("camera",n.camera).then(function(e){return a._getNodeRef(a.cameraCache,n.camera,e)})),a._invokeAll(function(t){return t.createNodeAttachment&&t.createNodeAttachment(e)}).forEach(function(e){t.push(e)});let r=[],s=n.children||[];for(let e=0,t=s.length;e<t;e++)r.push(a.getDependency("node",s[e]));let o=void 0===n.skin?Promise.resolve(null):a.getDependency("skin",n.skin);return Promise.all([Promise.all(t),Promise.all(r),o])})().then(function(t){let o,l=t[0],h=t[1],c=t[2];if((o=!0===n.isBone?new r.$Kf:l.length>1?new r.YJl:1===l.length?l[0]:new r.B69)!==l[0])for(let e=0,t=l.length;e<t;e++)o.add(l[e]);if(n.name&&(o.userData.name=n.name,o.name=s),x(o,n),n.extensions&&_(i,o,n),void 0!==n.matrix){let e=new r.kn4;e.fromArray(n.matrix),o.applyMatrix4(e)}else void 0!==n.translation&&o.position.fromArray(n.translation),void 0!==n.rotation&&o.quaternion.fromArray(n.rotation),void 0!==n.scale&&o.scale.fromArray(n.scale);a.associations.has(o)||a.associations.set(o,{}),a.associations.get(o).nodes=e,null!==c&&o.traverse(function(e){e.isSkinnedMesh&&e.bind(c,b)});for(let e=0,t=h.length;e<t;e++)o.add(h[e]);return o})}loadScene(e){let t=this.extensions,i=this.json.scenes[e],a=this,n=new r.YJl;i.name&&(n.name=a.createUniqueName(i.name)),x(n,i),i.extensions&&_(t,n,i);let s=i.nodes||[],o=[];for(let e=0,t=s.length;e<t;e++)o.push(a.getDependency("node",s[e]));return Promise.all(o).then(function(e){for(let t=0,i=e.length;t<i;t++)n.add(e[t]);return a.associations=(e=>{let t=new Map;for(let[e,i]of a.associations)(e instanceof r.imn||e instanceof r.gPd)&&t.set(e,i);return e.traverse(e=>{let i=a.associations.get(e);null!=i&&t.set(e,i)}),t})(n),n})}};function S(e,t,i){let a=t.attributes,n=[];for(let t in a){let r=f[t]||t.toLowerCase();r in e.attributes||n.push(function(t,r){return i.getDependency("accessor",t).then(function(t){e.setAttribute(r,t)})}(a[t],r))}if(void 0!==t.indices&&!e.index){let r=i.getDependency("accessor",t.indices).then(function(t){e.setIndex(t)});n.push(r)}return x(e,t),!function(e,t,i){let a=t.attributes,n=new r.NRn;if(void 0===a.POSITION)return;{let e=i.json.accessors[a.POSITION],t=e.min,s=e.max;if(void 0===t||void 0===s)return console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");if(n.set(new r.Pq0(t[0],t[1],t[2]),new r.Pq0(s[0],s[1],s[2])),e.normalized){let t=M(c[e.componentType]);n.min.multiplyScalar(t),n.max.multiplyScalar(t)}}let s=t.targets;if(void 0!==s){let e=new r.Pq0,t=new r.Pq0;for(let r=0,a=s.length;r<a;r++){let a=s[r];if(void 0!==a.POSITION){let r=i.json.accessors[a.POSITION],n=r.min,s=r.max;if(void 0!==n&&void 0!==s){if(t.setX(Math.max(Math.abs(n[0]),Math.abs(s[0]))),t.setY(Math.max(Math.abs(n[1]),Math.abs(s[1]))),t.setZ(Math.max(Math.abs(n[2]),Math.abs(s[2]))),r.normalized){let e=M(c[r.componentType]);t.multiplyScalar(e)}e.max(t)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}n.expandByVector(e)}e.boundingBox=n;let o=new r.iyt;n.getCenter(o.center),o.radius=n.min.distanceTo(n.max)/2,e.boundingSphere=o}(e,t,i),Promise.all(n).then(function(){return void 0!==t.targets?function(e,t,i){let r=!1,a=!1,n=!1;for(let e=0,i=t.length;e<i;e++){let i=t[e];if(void 0!==i.POSITION&&(r=!0),void 0!==i.NORMAL&&(a=!0),void 0!==i.COLOR_0&&(n=!0),r&&a&&n)break}if(!r&&!a&&!n)return Promise.resolve(e);let s=[],o=[],l=[];for(let h=0,c=t.length;h<c;h++){let c=t[h];if(r){let t=void 0!==c.POSITION?i.getDependency("accessor",c.POSITION):e.attributes.position;s.push(t)}if(a){let t=void 0!==c.NORMAL?i.getDependency("accessor",c.NORMAL):e.attributes.normal;o.push(t)}if(n){let t=void 0!==c.COLOR_0?i.getDependency("accessor",c.COLOR_0):e.attributes.color;l.push(t)}}return Promise.all([Promise.all(s),Promise.all(o),Promise.all(l)]).then(function(t){let i=t[0],s=t[1],o=t[2];return r&&(e.morphAttributes.position=i),a&&(e.morphAttributes.normal=s),n&&(e.morphAttributes.color=o),e.morphTargetsRelative=!0,e})}(e,t.targets,i):e})}function T(e,t){let i=e.getIndex();if(null===i){let t=[],r=e.getAttribute("position");if(void 0===r)return console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),e;for(let e=0;e<r.count;e++)t.push(e);e.setIndex(t),i=e.getIndex()}let a=i.count-2,n=[];if(t===r.rYR)for(let e=1;e<=a;e++)n.push(i.getX(0)),n.push(i.getX(e)),n.push(i.getX(e+1));else for(let e=0;e<a;e++)e%2==0?(n.push(i.getX(e)),n.push(i.getX(e+1)),n.push(i.getX(e+2))):(n.push(i.getX(e+2)),n.push(i.getX(e+1)),n.push(i.getX(e)));n.length/3!==a&&console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let s=e.clone();return s.setIndex(n),s}},39437:(e,t,i)=>{let r;i.d(t,{$EB:()=>o,$Kf:()=>Bone,$_I:()=>S,B69:()=>Object3D,BH$:()=>PointsMaterial,BKk:()=>ShaderMaterial,Cfg:()=>y,CmU:()=>InstancedBufferGeometry,DXC:()=>LineSegments,EAD:()=>Skeleton,FCc:()=>LineLoop,FNr:()=>MeshMatcapMaterial,FV:()=>f,GJx:()=>m,HiM:()=>PointLight,Hit:()=>NumberKeyframeTrack,I46:()=>SkinnedMesh,I9Y:()=>Vector2,IUQ:()=>Vector4,JeP:()=>rI,Kzg:()=>ImageBitmapLoader,LoY:()=>BufferGeometry,MBL:()=>QuaternionKeyframeTrack,N1A:()=>Line,NRn:()=>Box3,Nwf:()=>PropertyBinding,O49:()=>E,O9p:()=>Euler,ONl:()=>Points,OuU:()=>p,PJ3:()=>w,PTz:()=>Quaternion,Pq0:()=>Vector3,Q1f:()=>Color,Qev:()=>EventDispatcher,RiT:()=>VectorKeyframeTrack,S2Q:()=>L,S3G:()=>WebGL1Renderer,THS:()=>BufferAttribute,Tap:()=>TextureLoader,V9B:()=>MeshBasicMaterial,Y9S:()=>FileLoader,YHV:()=>Spherical,YJl:()=>Group,Z58:()=>Scene,ZLX:()=>InstancedMesh,ZyN:()=>DirectionalLight,_4j:()=>MeshStandardMaterial,aHM:()=>Loader,bCz:()=>l,bdM:()=>PlaneGeometry,cj9:()=>X,eB$:()=>InterleavedBuffer,eHs:()=>InterleavedBufferAttribute,eaF:()=>Mesh,gO9:()=>h,gPd:()=>Texture,ghU:()=>g,hB5:()=>s,hxR:()=>_,ie2:()=>d,imn:()=>Material,iyt:()=>Sphere,k6q:()=>M,kBv:()=>a,kRr:()=>b,kTW:()=>v,kn4:()=>Matrix4,lGw:()=>Interpolant,ljd:()=>T,mrM:()=>LineBasicMaterial,nCl:()=>SpotLight,nWS:()=>WebGLRenderTarget,ojh:()=>c,pHI:()=>x,qUd:()=>OrthographicCamera,qad:()=>u,r6x:()=>LoaderUtils,rYR:()=>A,tBo:()=>Raycaster,tgE:()=>C,tz3:()=>AnimationClip,uSd:()=>MeshPhysicalMaterial,uWO:()=>InstancedBufferAttribute,ubm:()=>PerspectiveCamera,wtR:()=>n,zD7:()=>Clock});let a={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},n={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},s=0,o=2,l=5,h=100,c=200,u=201,d=204,p=205,f=4,m=1e3,g=1001,v=1002,_=1003,x=1004,y=1005,M=1006,b=1007,S=1008,T=2300,w=2301,E=1,A=2,C=3e3,L=3001,R="srgb",P="srgb-linear",D="300 es";let EventDispatcher=class EventDispatcher{addEventListener(e,t){void 0===this._listeners&&(this._listeners={});let i=this._listeners;void 0===i[e]&&(i[e]=[]),-1===i[e].indexOf(t)&&i[e].push(t)}hasEventListener(e,t){if(void 0===this._listeners)return!1;let i=this._listeners;return void 0!==i[e]&&-1!==i[e].indexOf(t)}removeEventListener(e,t){if(void 0===this._listeners)return;let i=this._listeners[e];if(void 0!==i){let e=i.indexOf(t);-1!==e&&i.splice(e,1)}}dispatchEvent(e){if(void 0===this._listeners)return;let t=this._listeners[e.type];if(void 0!==t){e.target=this;let i=t.slice(0);for(let t=0,r=i.length;t<r;t++)i[t].call(this,e);e.target=null}}};let I=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],N=1234567,O=Math.PI/180,U=180/Math.PI;function V(){let e=0xffffffff*Math.random()|0,t=0xffffffff*Math.random()|0,i=0xffffffff*Math.random()|0,r=0xffffffff*Math.random()|0;return(I[255&e]+I[e>>8&255]+I[e>>16&255]+I[e>>24&255]+"-"+I[255&t]+I[t>>8&255]+"-"+I[t>>16&15|64]+I[t>>24&255]+"-"+I[63&i|128]+I[i>>8&255]+"-"+I[i>>16&255]+I[i>>24&255]+I[255&r]+I[r>>8&255]+I[r>>16&255]+I[r>>24&255]).toLowerCase()}function z(e,t,i){return Math.max(t,Math.min(i,e))}function B(e,t){return(e%t+t)%t}function F(e,t,i){return(1-i)*e+i*t}function k(e){return(e&e-1)==0&&0!==e}function G(e){return Math.pow(2,Math.ceil(Math.log(e)/Math.LN2))}function H(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}function W(e,t){switch(t.constructor){case Float32Array:return e;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error("Invalid component type.")}}function j(e,t){switch(t.constructor){case Float32Array:return e;case Uint16Array:return Math.round(65535*e);case Uint8Array:return Math.round(255*e);case Int16Array:return Math.round(32767*e);case Int8Array:return Math.round(127*e);default:throw Error("Invalid component type.")}}var X=Object.freeze({__proto__:null,DEG2RAD:O,RAD2DEG:U,generateUUID:V,clamp:z,euclideanModulo:B,mapLinear:function(e,t,i,r,a){return r+(e-t)*(a-r)/(i-t)},inverseLerp:function(e,t,i){return e!==t?(i-e)/(t-e):0},lerp:F,damp:function(e,t,i,r){return F(e,t,1-Math.exp(-i*r))},pingpong:function(e,t=1){return t-Math.abs(B(e,2*t)-t)},smoothstep:function(e,t,i){return e<=t?0:e>=i?1:(e=(e-t)/(i-t))*e*(3-2*e)},smootherstep:function(e,t,i){return e<=t?0:e>=i?1:(e=(e-t)/(i-t))*e*e*(e*(6*e-15)+10)},randInt:function(e,t){return e+Math.floor(Math.random()*(t-e+1))},randFloat:function(e,t){return e+Math.random()*(t-e)},randFloatSpread:function(e){return e*(.5-Math.random())},seededRandom:function(e){void 0!==e&&(N=e);let t=N+=0x6d2b79f5;return t=Math.imul(t^t>>>15,1|t),(((t^=t+Math.imul(t^t>>>7,61|t))^t>>>14)>>>0)/0x100000000},degToRad:function(e){return e*O},radToDeg:function(e){return e*U},isPowerOfTwo:k,ceilPowerOfTwo:G,floorPowerOfTwo:H,setQuaternionFromProperEuler:function(e,t,i,r,a){let n=Math.cos,s=Math.sin,o=n(i/2),l=s(i/2),h=n((t+r)/2),c=s((t+r)/2),u=n((t-r)/2),d=s((t-r)/2),p=n((r-t)/2),f=s((r-t)/2);switch(a){case"XYX":e.set(o*c,l*u,l*d,o*h);break;case"YZY":e.set(l*d,o*c,l*u,o*h);break;case"ZXZ":e.set(l*u,l*d,o*c,o*h);break;case"XZX":e.set(o*c,l*f,l*p,o*h);break;case"YXY":e.set(l*p,o*c,l*f,o*h);break;case"ZYZ":e.set(l*f,l*p,o*c,o*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+a)}},normalize:j,denormalize:W});let Vector2=class Vector2{constructor(e=0,t=0){Vector2.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),a=this.x-e.x,n=this.y-e.y;return this.x=a*i-n*r+e.x,this.y=a*r+n*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};let Matrix3=class Matrix3{constructor(){Matrix3.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,i,r,a,n,s,o,l){let h=this.elements;return h[0]=e,h[1]=r,h[2]=s,h[3]=t,h[4]=a,h[5]=o,h[6]=i,h[7]=n,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,a=this.elements,n=i[0],s=i[3],o=i[6],l=i[1],h=i[4],c=i[7],u=i[2],d=i[5],p=i[8],f=r[0],m=r[3],g=r[6],v=r[1],_=r[4],x=r[7],y=r[2],M=r[5],b=r[8];return a[0]=n*f+s*v+o*y,a[3]=n*m+s*_+o*M,a[6]=n*g+s*x+o*b,a[1]=l*f+h*v+c*y,a[4]=l*m+h*_+c*M,a[7]=l*g+h*x+c*b,a[2]=u*f+d*v+p*y,a[5]=u*m+d*_+p*M,a[8]=u*g+d*x+p*b,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],n=e[4],s=e[5],o=e[6],l=e[7],h=e[8];return t*n*h-t*s*l-i*a*h+i*s*o+r*a*l-r*n*o}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],n=e[4],s=e[5],o=e[6],l=e[7],h=e[8],c=h*n-s*l,u=s*o-h*a,d=l*a-n*o,p=t*c+i*u+r*d;if(0===p)return this.set(0,0,0,0,0,0,0,0,0);let f=1/p;return e[0]=c*f,e[1]=(r*l-h*i)*f,e[2]=(s*i-r*n)*f,e[3]=u*f,e[4]=(h*t-r*o)*f,e[5]=(r*a-s*t)*f,e[6]=d*f,e[7]=(i*o-l*t)*f,e[8]=(n*t-i*a)*f,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,a,n,s){let o=Math.cos(a),l=Math.sin(a);return this.set(i*o,i*l,-i*(o*n+l*s)+n+e,-r*l,r*o,-r*(-l*n+o*s)+s+t,0,0,1),this}scale(e,t){return this.premultiply(q.makeScale(e,t)),this}rotate(e){return this.premultiply(q.makeRotation(-e)),this}translate(e,t){return this.premultiply(q.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let e=0;e<9;e++)if(t[e]!==i[e])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};let q=new Matrix3;function Y(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function K(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function J(e){return e<.04045?.0773993808*e:Math.pow(.9478672986*e+.0521327014,2.4)}function Z(e){return e<.0031308?12.92*e:1.055*Math.pow(e,.41666)-.055}Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array;let Q={[R]:{[P]:J},[P]:{[R]:Z}},$={legacyMode:!0,get workingColorSpace(){return P},set workingColorSpace(colorSpace){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(e,t,i){if(this.legacyMode||t===i||!t||!i)return e;if(Q[t]&&void 0!==Q[t][i]){let r=Q[t][i];return e.r=r(e.r),e.g=r(e.g),e.b=r(e.b),e}throw Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},toWorkingColorSpace:function(e,t){return this.convert(e,t,this.workingColorSpace)}},ee={aliceblue:0xf0f8ff,antiquewhite:0xfaebd7,aqua:65535,aquamarine:8388564,azure:0xf0ffff,beige:0xf5f5dc,bisque:0xffe4c4,black:0,blanchedalmond:0xffebcd,blue:255,blueviolet:9055202,brown:0xa52a2a,burlywood:0xdeb887,cadetblue:6266528,chartreuse:8388352,chocolate:0xd2691e,coral:0xff7f50,cornflowerblue:6591981,cornsilk:0xfff8dc,crimson:0xdc143c,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:0xb8860b,darkgray:0xa9a9a9,darkgreen:25600,darkgrey:0xa9a9a9,darkkhaki:0xbdb76b,darkmagenta:9109643,darkolivegreen:5597999,darkorange:0xff8c00,darkorchid:0x9932cc,darkred:9109504,darksalmon:0xe9967a,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:0xff1493,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:0xb22222,floralwhite:0xfffaf0,forestgreen:2263842,fuchsia:0xff00ff,gainsboro:0xdcdcdc,ghostwhite:0xf8f8ff,gold:0xffd700,goldenrod:0xdaa520,gray:8421504,green:32768,greenyellow:0xadff2f,grey:8421504,honeydew:0xf0fff0,hotpink:0xff69b4,indianred:0xcd5c5c,indigo:4915330,ivory:0xfffff0,khaki:0xf0e68c,lavender:0xe6e6fa,lavenderblush:0xfff0f5,lawngreen:8190976,lemonchiffon:0xfffacd,lightblue:0xadd8e6,lightcoral:0xf08080,lightcyan:0xe0ffff,lightgoldenrodyellow:0xfafad2,lightgray:0xd3d3d3,lightgreen:9498256,lightgrey:0xd3d3d3,lightpink:0xffb6c1,lightsalmon:0xffa07a,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:0xb0c4de,lightyellow:0xffffe0,lime:65280,limegreen:3329330,linen:0xfaf0e6,magenta:0xff00ff,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:0xba55d3,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:0xc71585,midnightblue:1644912,mintcream:0xf5fffa,mistyrose:0xffe4e1,moccasin:0xffe4b5,navajowhite:0xffdead,navy:128,oldlace:0xfdf5e6,olive:8421376,olivedrab:7048739,orange:0xffa500,orangered:0xff4500,orchid:0xda70d6,palegoldenrod:0xeee8aa,palegreen:0x98fb98,paleturquoise:0xafeeee,palevioletred:0xdb7093,papayawhip:0xffefd5,peachpuff:0xffdab9,peru:0xcd853f,pink:0xffc0cb,plum:0xdda0dd,powderblue:0xb0e0e6,purple:8388736,rebeccapurple:6697881,red:0xff0000,rosybrown:0xbc8f8f,royalblue:4286945,saddlebrown:9127187,salmon:0xfa8072,sandybrown:0xf4a460,seagreen:3050327,seashell:0xfff5ee,sienna:0xa0522d,silver:0xc0c0c0,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:0xfffafa,springgreen:65407,steelblue:4620980,tan:0xd2b48c,teal:32896,thistle:0xd8bfd8,tomato:0xff6347,turquoise:4251856,violet:0xee82ee,wheat:0xf5deb3,white:0xffffff,whitesmoke:0xf5f5f5,yellow:0xffff00,yellowgreen:0x9acd32},et={r:0,g:0,b:0},ei={h:0,s:0,l:0},er={h:0,s:0,l:0};function ea(e,t,i){return(i<0&&(i+=1),i>1&&(i-=1),i<1/6)?e+(t-e)*6*i:i<.5?t:i<2/3?e+(t-e)*6*(2/3-i):e}function en(e,t){return t.r=e.r,t.g=e.g,t.b=e.b,t}let Color=class Color{constructor(e,t,i){if(this.isColor=!0,this.r=1,this.g=1,this.b=1,void 0===t&&void 0===i)return this.set(e);return this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):"number"==typeof e?this.setHex(e):"string"==typeof e&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=R){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255,$.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=$.workingColorSpace){return this.r=e,this.g=t,this.b=i,$.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=$.workingColorSpace){if(e=B(e,1),t=z(t,0,1),i=z(i,0,1),0===t)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=ea(a,r,e+1/3),this.g=ea(a,r,e),this.b=ea(a,r,e-1/3)}return $.toWorkingColorSpace(this,r),this}setStyle(e,t=R){let i;function r(t){void 0!==t&&1>parseFloat(t)&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let e,a=i[1],n=i[2];switch(a){case"rgb":case"rgba":if(e=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(n))return this.r=Math.min(255,parseInt(e[1],10))/255,this.g=Math.min(255,parseInt(e[2],10))/255,this.b=Math.min(255,parseInt(e[3],10))/255,$.toWorkingColorSpace(this,t),r(e[4]),this;if(e=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(n))return this.r=Math.min(100,parseInt(e[1],10))/100,this.g=Math.min(100,parseInt(e[2],10))/100,this.b=Math.min(100,parseInt(e[3],10))/100,$.toWorkingColorSpace(this,t),r(e[4]),this;break;case"hsl":case"hsla":if(e=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(n)){let i=parseFloat(e[1])/360,a=parseFloat(e[2])/100,n=parseFloat(e[3])/100;return r(e[4]),this.setHSL(i,a,n,t)}}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let e=i[1],r=e.length;if(3===r)return this.r=parseInt(e.charAt(0)+e.charAt(0),16)/255,this.g=parseInt(e.charAt(1)+e.charAt(1),16)/255,this.b=parseInt(e.charAt(2)+e.charAt(2),16)/255,$.toWorkingColorSpace(this,t),this;if(6===r)return this.r=parseInt(e.charAt(0)+e.charAt(1),16)/255,this.g=parseInt(e.charAt(2)+e.charAt(3),16)/255,this.b=parseInt(e.charAt(4)+e.charAt(5),16)/255,$.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=R){let i=ee[e.toLowerCase()];return void 0!==i?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=J(e.r),this.g=J(e.g),this.b=J(e.b),this}copyLinearToSRGB(e){return this.r=Z(e.r),this.g=Z(e.g),this.b=Z(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=R){return $.fromWorkingColorSpace(en(this,et),e),z(255*et.r,0,255)<<16^z(255*et.g,0,255)<<8^(0|z(255*et.b,0,255))}getHexString(e=R){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=$.workingColorSpace){let i,r;$.fromWorkingColorSpace(en(this,et),t);let a=et.r,n=et.g,s=et.b,o=Math.max(a,n,s),l=Math.min(a,n,s),h=(l+o)/2;if(l===o)i=0,r=0;else{let e=o-l;switch(r=h<=.5?e/(o+l):e/(2-o-l),o){case a:i=(n-s)/e+6*(n<s);break;case n:i=(s-a)/e+2;break;case s:i=(a-n)/e+4}i/=6}return e.h=i,e.s=r,e.l=h,e}getRGB(e,t=$.workingColorSpace){return $.fromWorkingColorSpace(en(this,et),t),e.r=et.r,e.g=et.g,e.b=et.b,e}getStyle(e=R){return($.fromWorkingColorSpace(en(this,et),e),e!==R)?`color(${e} ${et.r} ${et.g} ${et.b})`:`rgb(${255*et.r|0},${255*et.g|0},${255*et.b|0})`}offsetHSL(e,t,i){return this.getHSL(ei),ei.h+=e,ei.s+=t,ei.l+=i,this.setHSL(ei.h,ei.s,ei.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ei),e.getHSL(er);let i=F(ei.h,er.h,t),r=F(ei.s,er.s,t),a=F(ei.l,er.l,t);return this.setHSL(i,r,a),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};Color.NAMES=ee;let ImageUtils=class ImageUtils{static getDataURL(e){let t;if(/^data:/i.test(e.src)||"undefined"==typeof HTMLCanvasElement)return e.src;if(e instanceof HTMLCanvasElement)t=e;else{void 0===r&&(r=K("canvas")),r.width=e.width,r.height=e.height;let i=r.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=r}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if("undefined"!=typeof HTMLImageElement&&e instanceof HTMLImageElement||"undefined"!=typeof HTMLCanvasElement&&e instanceof HTMLCanvasElement||"undefined"!=typeof ImageBitmap&&e instanceof ImageBitmap){let t=K("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),a=r.data;for(let e=0;e<a.length;e++)a[e]=255*J(a[e]/255);return i.putImageData(r,0,0),t}if(!e.data)return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e;{let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(255*J(t[e]/255)):t[e]=J(t[e]);return{data:t,width:e.width,height:e.height}}}};let Source=class Source{constructor(e=null){this.isSource=!0,this.uuid=V(),this.data=e,this.version=0}set needsUpdate(e){!0===e&&this.version++}toJSON(e){let t=void 0===e||"string"==typeof e;if(!t&&void 0!==e.images[this.uuid])return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(null!==r){let e;if(Array.isArray(r)){e=[];for(let t=0,i=r.length;t<i;t++)r[t].isDataTexture?e.push(es(r[t].image)):e.push(es(r[t]))}else e=es(r);i.url=e}return t||(e.images[this.uuid]=i),i}};function es(e){return"undefined"!=typeof HTMLImageElement&&e instanceof HTMLImageElement||"undefined"!=typeof HTMLCanvasElement&&e instanceof HTMLCanvasElement||"undefined"!=typeof ImageBitmap&&e instanceof ImageBitmap?ImageUtils.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let eo=0;let Texture=class Texture extends EventDispatcher{constructor(e=Texture.DEFAULT_IMAGE,t=Texture.DEFAULT_MAPPING,i=g,r=g,a=M,n=S,s=1023,o=1009,l=Texture.DEFAULT_ANISOTROPY,h=C){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:eo++}),this.uuid=V(),this.name="",this.source=new Source(e),this.mipmaps=[],this.mapping=t,this.wrapS=i,this.wrapT=r,this.magFilter=a,this.minFilter=n,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=o,this.offset=new Vector2(0,0),this.repeat=new Vector2(1,1),this.center=new Vector2(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Matrix3,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=void 0===e||"string"==typeof e;if(!t&&void 0!==e.textures[this.uuid])return e.textures[this.uuid];let i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(300!==this.mapping)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case m:e.x=e.x-Math.floor(e.x);break;case g:e.x=e.x<0?0:1;break;case v:1===Math.abs(Math.floor(e.x)%2)?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case m:e.y=e.y-Math.floor(e.y);break;case g:e.y=e.y<0?0:1;break;case v:1===Math.abs(Math.floor(e.y)%2)?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){!0===e&&(this.version++,this.source.needsUpdate=!0)}};Texture.DEFAULT_IMAGE=null,Texture.DEFAULT_MAPPING=300,Texture.DEFAULT_ANISOTROPY=1;let Vector4=class Vector4{constructor(e=0,t=0,i=0,r=1){Vector4.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=void 0!==e.w?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,a=this.w,n=e.elements;return this.x=n[0]*t+n[4]*i+n[8]*r+n[12]*a,this.y=n[1]*t+n[5]*i+n[9]*r+n[13]*a,this.z=n[2]*t+n[6]*i+n[10]*r+n[14]*a,this.w=n[3]*t+n[7]*i+n[11]*r+n[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,a,n=e.elements,s=n[0],o=n[4],l=n[8],h=n[1],c=n[5],u=n[9],d=n[2],p=n[6],f=n[10];if(.01>Math.abs(o-h)&&.01>Math.abs(l-d)&&.01>Math.abs(u-p)){if(.1>Math.abs(o+h)&&.1>Math.abs(l+d)&&.1>Math.abs(u+p)&&.1>Math.abs(s+c+f-3))return this.set(1,0,0,0),this;t=Math.PI;let e=(s+1)/2,n=(c+1)/2,m=(f+1)/2,g=(o+h)/4,v=(l+d)/4,_=(u+p)/4;return e>n&&e>m?e<.01?(i=0,r=.707106781,a=.707106781):(r=g/(i=Math.sqrt(e)),a=v/i):n>m?n<.01?(i=.707106781,r=0,a=.707106781):(i=g/(r=Math.sqrt(n)),a=_/r):m<.01?(i=.707106781,r=.707106781,a=0):(i=v/(a=Math.sqrt(m)),r=_/a),this.set(i,r,a,t),this}let m=Math.sqrt((p-u)*(p-u)+(l-d)*(l-d)+(h-o)*(h-o));return .001>Math.abs(m)&&(m=1),this.x=(p-u)/m,this.y=(l-d)/m,this.z=(h-o)/m,this.w=Math.acos((s+c+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};let WebGLRenderTarget=class WebGLRenderTarget extends EventDispatcher{constructor(e=1,t=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Vector4(0,0,e,t),this.scissorTest=!1,this.viewport=new Vector4(0,0,e,t),this.texture=new Texture({width:e,height:t,depth:1},i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=void 0!==i.generateMipmaps&&i.generateMipmaps,this.texture.internalFormat=void 0!==i.internalFormat?i.internalFormat:null,this.texture.minFilter=void 0!==i.minFilter?i.minFilter:M,this.depthBuffer=void 0===i.depthBuffer||i.depthBuffer,this.stencilBuffer=void 0!==i.stencilBuffer&&i.stencilBuffer,this.depthTexture=void 0!==i.depthTexture?i.depthTexture:null,this.samples=void 0!==i.samples?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Source(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,null!==e.depthTexture&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}};let DataArrayTexture=class DataArrayTexture extends Texture{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=_,this.minFilter=_,this.wrapR=g,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};let Data3DTexture=class Data3DTexture extends Texture{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=_,this.minFilter=_,this.wrapR=g,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};let Quaternion=class Quaternion{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,a,n,s){let o=i[r+0],l=i[r+1],h=i[r+2],c=i[r+3],u=a[n+0],d=a[n+1],p=a[n+2],f=a[n+3];if(0===s){e[t+0]=o,e[t+1]=l,e[t+2]=h,e[t+3]=c;return}if(1===s){e[t+0]=u,e[t+1]=d,e[t+2]=p,e[t+3]=f;return}if(c!==f||o!==u||l!==d||h!==p){let e=1-s,t=o*u+l*d+h*p+c*f,i=t>=0?1:-1,r=1-t*t;if(r>Number.EPSILON){let a=Math.sqrt(r),n=Math.atan2(a,t*i);e=Math.sin(e*n)/a,s=Math.sin(s*n)/a}let a=s*i;if(o=o*e+u*a,l=l*e+d*a,h=h*e+p*a,c=c*e+f*a,e===1-s){let e=1/Math.sqrt(o*o+l*l+h*h+c*c);o*=e,l*=e,h*=e,c*=e}}e[t]=o,e[t+1]=l,e[t+2]=h,e[t+3]=c}static multiplyQuaternionsFlat(e,t,i,r,a,n){let s=i[r],o=i[r+1],l=i[r+2],h=i[r+3],c=a[n],u=a[n+1],d=a[n+2],p=a[n+3];return e[t]=s*p+h*c+o*d-l*u,e[t+1]=o*p+h*u+l*c-s*d,e[t+2]=l*p+h*d+s*u-o*c,e[t+3]=h*p-s*c-o*u-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){let i=e._x,r=e._y,a=e._z,n=e._order,s=Math.cos,o=Math.sin,l=s(i/2),h=s(r/2),c=s(a/2),u=o(i/2),d=o(r/2),p=o(a/2);switch(n){case"XYZ":this._x=u*h*c+l*d*p,this._y=l*d*c-u*h*p,this._z=l*h*p+u*d*c,this._w=l*h*c-u*d*p;break;case"YXZ":this._x=u*h*c+l*d*p,this._y=l*d*c-u*h*p,this._z=l*h*p-u*d*c,this._w=l*h*c+u*d*p;break;case"ZXY":this._x=u*h*c-l*d*p,this._y=l*d*c+u*h*p,this._z=l*h*p+u*d*c,this._w=l*h*c-u*d*p;break;case"ZYX":this._x=u*h*c-l*d*p,this._y=l*d*c+u*h*p,this._z=l*h*p-u*d*c,this._w=l*h*c+u*d*p;break;case"YZX":this._x=u*h*c+l*d*p,this._y=l*d*c+u*h*p,this._z=l*h*p-u*d*c,this._w=l*h*c-u*d*p;break;case"XZY":this._x=u*h*c-l*d*p,this._y=l*d*c-u*h*p,this._z=l*h*p+u*d*c,this._w=l*h*c+u*d*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+n)}return!1!==t&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],a=t[8],n=t[1],s=t[5],o=t[9],l=t[2],h=t[6],c=t[10],u=i+s+c;if(u>0){let e=.5/Math.sqrt(u+1);this._w=.25/e,this._x=(h-o)*e,this._y=(a-l)*e,this._z=(n-r)*e}else if(i>s&&i>c){let e=2*Math.sqrt(1+i-s-c);this._w=(h-o)/e,this._x=.25*e,this._y=(r+n)/e,this._z=(a+l)/e}else if(s>c){let e=2*Math.sqrt(1+s-i-c);this._w=(a-l)/e,this._x=(r+n)/e,this._y=.25*e,this._z=(o+h)/e}else{let e=2*Math.sqrt(1+c-i-s);this._w=(n-r)/e,this._x=(a+l)/e,this._y=(o+h)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0):(this._x=0,this._y=-e.z,this._z=e.y)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x),this._w=i,this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(z(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(0===i)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return 0===e?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,a=e._z,n=e._w,s=t._x,o=t._y,l=t._z,h=t._w;return this._x=i*h+n*s+r*l-a*o,this._y=r*h+n*o+a*s-i*l,this._z=a*h+n*l+i*o-r*s,this._w=n*h-i*s-r*o-a*l,this._onChangeCallback(),this}slerp(e,t){if(0===t)return this;if(1===t)return this.copy(e);let i=this._x,r=this._y,a=this._z,n=this._w,s=n*e._w+i*e._x+r*e._y+a*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=n,this._x=i,this._y=r,this._z=a,this;let o=1-s*s;if(o<=Number.EPSILON){let e=1-t;return this._w=e*n+t*this._w,this._x=e*i+t*this._x,this._y=e*r+t*this._y,this._z=e*a+t*this._z,this.normalize(),this._onChangeCallback(),this}let l=Math.sqrt(o),h=Math.atan2(l,s),c=Math.sin((1-t)*h)/l,u=Math.sin(t*h)/l;return this._w=n*c+this._w*u,this._x=i*c+this._x*u,this._y=r*c+this._y*u,this._z=a*c+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),a=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(a),i*Math.cos(a),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};let Vector3=class Vector3{constructor(e=0,t=0,i=0){Vector3.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return void 0===i&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(eh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(eh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*r,this.y=a[1]*t+a[4]*i+a[7]*r,this.z=a[2]*t+a[5]*i+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,a=e.elements,n=1/(a[3]*t+a[7]*i+a[11]*r+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*r+a[12])*n,this.y=(a[1]*t+a[5]*i+a[9]*r+a[13])*n,this.z=(a[2]*t+a[6]*i+a[10]*r+a[14])*n,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,a=e.x,n=e.y,s=e.z,o=e.w,l=o*t+n*r-s*i,h=o*i+s*t-a*r,c=o*r+a*i-n*t,u=-a*t-n*i-s*r;return this.x=l*o+-(u*a)+-(h*s)- -(c*n),this.y=h*o+-(u*n)+-(c*a)- -(l*s),this.z=c*o+-(u*s)+-(l*n)- -(h*a),this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r,this.y=a[1]*t+a[5]*i+a[9]*r,this.z=a[2]*t+a[6]*i+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,r=e.y,a=e.z,n=t.x,s=t.y,o=t.z;return this.x=r*o-a*s,this.y=a*n-i*o,this.z=i*s-r*n,this}projectOnVector(e){let t=e.lengthSq();if(0===t)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return el.copy(this).projectOnVector(e),this.sub(el)}reflect(e){return this.sub(el.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());return 0===t?Math.PI/2:Math.acos(z(this.dot(e)/t,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,4*t)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,3*t)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};let el=new Vector3,eh=new Quaternion;let Box3=class Box3{constructor(e=new Vector3(Infinity,Infinity,Infinity),t=new Vector3(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=Infinity,i=Infinity,r=Infinity,a=-1/0,n=-1/0,s=-1/0;for(let o=0,l=e.length;o<l;o+=3){let l=e[o],h=e[o+1],c=e[o+2];l<t&&(t=l),h<i&&(i=h),c<r&&(r=c),l>a&&(a=l),h>n&&(n=h),c>s&&(s=c)}return this.min.set(t,i,r),this.max.set(a,n,s),this}setFromBufferAttribute(e){let t=Infinity,i=Infinity,r=Infinity,a=-1/0,n=-1/0,s=-1/0;for(let o=0,l=e.count;o<l;o++){let l=e.getX(o),h=e.getY(o),c=e.getZ(o);l<t&&(t=l),h<i&&(i=h),c<r&&(r=c),l>a&&(a=l),h>n&&(n=h),c>s&&(s=c)}return this.min.set(t,i,r),this.max.set(a,n,s),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=eu.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=Infinity,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(void 0!==i)if(t&&void 0!=i.attributes&&void 0!==i.attributes.position){let t=i.attributes.position;for(let i=0,r=t.count;i<r;i++)eu.fromBufferAttribute(t,i).applyMatrix4(e.matrixWorld),this.expandByPoint(eu)}else null===i.boundingBox&&i.computeBoundingBox(),ed.copy(i.boundingBox),ed.applyMatrix4(e.matrixWorld),this.union(ed);let r=e.children;for(let e=0,i=r.length;e<i;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return!(e.x<this.min.x)&&!(e.x>this.max.x)&&!(e.y<this.min.y)&&!(e.y>this.max.y)&&!(e.z<this.min.z)&&!(e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x)&&!(e.min.x>this.max.x)&&!(e.max.y<this.min.y)&&!(e.min.y>this.max.y)&&!(e.max.z<this.min.z)&&!(e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,eu),eu.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ex),ey.subVectors(this.max,ex),ep.subVectors(e.a,ex),ef.subVectors(e.b,ex),em.subVectors(e.c,ex),eg.subVectors(ef,ep),ev.subVectors(em,ef),e_.subVectors(ep,em);let t=[0,-eg.z,eg.y,0,-ev.z,ev.y,0,-e_.z,e_.y,eg.z,0,-eg.x,ev.z,0,-ev.x,e_.z,0,-e_.x,-eg.y,eg.x,0,-ev.y,ev.x,0,-e_.y,e_.x,0];return!!eS(t,ep,ef,em,ey)&&!!eS(t=[1,0,0,0,1,0,0,0,1],ep,ef,em,ey)&&(eM.crossVectors(eg,ev),eS(t=[eM.x,eM.y,eM.z],ep,ef,em,ey))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return eu.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=.5*this.getSize(eu).length(),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(ec[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ec[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ec[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ec[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ec[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ec[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ec[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ec[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ec)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}};let ec=[new Vector3,new Vector3,new Vector3,new Vector3,new Vector3,new Vector3,new Vector3,new Vector3],eu=new Vector3,ed=new Box3,ep=new Vector3,ef=new Vector3,em=new Vector3,eg=new Vector3,ev=new Vector3,e_=new Vector3,ex=new Vector3,ey=new Vector3,eM=new Vector3,eb=new Vector3;function eS(e,t,i,r,a){for(let n=0,s=e.length-3;n<=s;n+=3){eb.fromArray(e,n);let s=a.x*Math.abs(eb.x)+a.y*Math.abs(eb.y)+a.z*Math.abs(eb.z),o=t.dot(eb),l=i.dot(eb),h=r.dot(eb);if(Math.max(-Math.max(o,l,h),Math.min(o,l,h))>s)return!1}return!0}let eT=new Box3,ew=new Vector3,eE=new Vector3;let Sphere=class Sphere{constructor(e=new Vector3,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;void 0!==t?i.copy(t):eT.setFromPoints(e).getCenter(i);let r=0;for(let t=0,a=e.length;t<a;t++)r=Math.max(r,i.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?e.makeEmpty():(e.set(this.center,this.center),e.expandByScalar(this.radius)),e}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ew.subVectors(e,this.center);let t=ew.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),i=(e-this.radius)*.5;this.center.addScaledVector(ew,i/e),this.radius+=i}return this}union(e){return e.isEmpty()||(this.isEmpty()?this.copy(e):!0===this.center.equals(e.center)?this.radius=Math.max(this.radius,e.radius):(eE.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ew.copy(e.center).add(eE)),this.expandByPoint(ew.copy(e.center).sub(eE)))),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}};let eA=new Vector3,eC=new Vector3,eL=new Vector3,eR=new Vector3,eP=new Vector3,eD=new Vector3,eI=new Vector3;let Ray=class Ray{constructor(e=new Vector3,t=new Vector3(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,eA)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=eA.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(eA.copy(this.direction).multiplyScalar(t).add(this.origin),eA.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){let a,n,s,o;eC.copy(e).add(t).multiplyScalar(.5),eL.copy(t).sub(e).normalize(),eR.copy(this.origin).sub(eC);let l=.5*e.distanceTo(t),h=-this.direction.dot(eL),c=eR.dot(this.direction),u=-eR.dot(eL),d=eR.lengthSq(),p=Math.abs(1-h*h);if(p>0)if(a=h*u-c,n=h*c-u,o=l*p,a>=0)if(n>=-o)if(n<=o){let e=1/p;a*=e,n*=e,s=a*(a+h*n+2*c)+n*(h*a+n+2*u)+d}else s=-(a=Math.max(0,-(h*(n=l)+c)))*a+n*(n+2*u)+d;else s=-(a=Math.max(0,-(h*(n=-l)+c)))*a+n*(n+2*u)+d;else n<=-o?(n=(a=Math.max(0,-(-h*l+c)))>0?-l:Math.min(Math.max(-l,-u),l),s=-a*a+n*(n+2*u)+d):n<=o?(a=0,s=(n=Math.min(Math.max(-l,-u),l))*(n+2*u)+d):(n=(a=Math.max(0,-(h*l+c)))>0?l:Math.min(Math.max(-l,-u),l),s=-a*a+n*(n+2*u)+d);else n=h>0?-l:l,s=-(a=Math.max(0,-(h*n+c)))*a+n*(n+2*u)+d;return i&&i.copy(this.direction).multiplyScalar(a).add(this.origin),r&&r.copy(eL).multiplyScalar(n).add(eC),s}intersectSphere(e,t){eA.subVectors(e.center,this.origin);let i=eA.dot(this.direction),r=eA.dot(eA)-i*i,a=e.radius*e.radius;if(r>a)return null;let n=Math.sqrt(a-r),s=i-n,o=i+n;return s<0&&o<0?null:s<0?this.at(o,t):this.at(s,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(0===t)return 0===e.distanceToPoint(this.origin)?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return null===i?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return!!(0===t||e.normal.dot(this.direction)*t<0)}intersectBox(e,t){let i,r,a,n,s,o,l=1/this.direction.x,h=1/this.direction.y,c=1/this.direction.z,u=this.origin;return(l>=0?(i=(e.min.x-u.x)*l,r=(e.max.x-u.x)*l):(i=(e.max.x-u.x)*l,r=(e.min.x-u.x)*l),h>=0?(a=(e.min.y-u.y)*h,n=(e.max.y-u.y)*h):(a=(e.max.y-u.y)*h,n=(e.min.y-u.y)*h),i>n||a>r||((a>i||isNaN(i))&&(i=a),(n<r||isNaN(r))&&(r=n),c>=0?(s=(e.min.z-u.z)*c,o=(e.max.z-u.z)*c):(s=(e.max.z-u.z)*c,o=(e.min.z-u.z)*c),i>o||s>r||((s>i||i!=i)&&(i=s),(o<r||r!=r)&&(r=o),r<0)))?null:this.at(i>=0?i:r,t)}intersectsBox(e){return null!==this.intersectBox(e,eA)}intersectTriangle(e,t,i,r,a){let n;eP.subVectors(t,e),eD.subVectors(i,e),eI.crossVectors(eP,eD);let s=this.direction.dot(eI);if(s>0){if(r)return null;n=1}else{if(!(s<0))return null;n=-1,s=-s}eR.subVectors(this.origin,e);let o=n*this.direction.dot(eD.crossVectors(eR,eD));if(o<0)return null;let l=n*this.direction.dot(eP.cross(eR));if(l<0||o+l>s)return null;let h=-n*eR.dot(eI);return h<0?null:this.at(h/s,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};let Matrix4=class Matrix4{constructor(){Matrix4.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,i,r,a,n,s,o,l,h,c,u,d,p,f,m){let g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=r,g[1]=a,g[5]=n,g[9]=s,g[13]=o,g[2]=l,g[6]=h,g[10]=c,g[14]=u,g[3]=d,g[7]=p,g[11]=f,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Matrix4().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,r=1/eN.setFromMatrixColumn(e,0).length(),a=1/eN.setFromMatrixColumn(e,1).length(),n=1/eN.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*n,t[9]=i[9]*n,t[10]=i[10]*n,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,r=e.y,a=e.z,n=Math.cos(i),s=Math.sin(i),o=Math.cos(r),l=Math.sin(r),h=Math.cos(a),c=Math.sin(a);if("XYZ"===e.order){let e=n*h,i=n*c,r=s*h,a=s*c;t[0]=o*h,t[4]=-o*c,t[8]=l,t[1]=i+r*l,t[5]=e-a*l,t[9]=-s*o,t[2]=a-e*l,t[6]=r+i*l,t[10]=n*o}else if("YXZ"===e.order){let e=o*h,i=o*c,r=l*h,a=l*c;t[0]=e+a*s,t[4]=r*s-i,t[8]=n*l,t[1]=n*c,t[5]=n*h,t[9]=-s,t[2]=i*s-r,t[6]=a+e*s,t[10]=n*o}else if("ZXY"===e.order){let e=o*h,i=o*c,r=l*h,a=l*c;t[0]=e-a*s,t[4]=-n*c,t[8]=r+i*s,t[1]=i+r*s,t[5]=n*h,t[9]=a-e*s,t[2]=-n*l,t[6]=s,t[10]=n*o}else if("ZYX"===e.order){let e=n*h,i=n*c,r=s*h,a=s*c;t[0]=o*h,t[4]=r*l-i,t[8]=e*l+a,t[1]=o*c,t[5]=a*l+e,t[9]=i*l-r,t[2]=-l,t[6]=s*o,t[10]=n*o}else if("YZX"===e.order){let e=n*o,i=n*l,r=s*o,a=s*l;t[0]=o*h,t[4]=a-e*c,t[8]=r*c+i,t[1]=c,t[5]=n*h,t[9]=-s*h,t[2]=-l*h,t[6]=i*c+r,t[10]=e-a*c}else if("XZY"===e.order){let e=n*o,i=n*l,r=s*o,a=s*l;t[0]=o*h,t[4]=-c,t[8]=l*h,t[1]=e*c+a,t[5]=n*h,t[9]=i*c-r,t[2]=r*c-i,t[6]=s*h,t[10]=a*c+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(eU,e,eV)}lookAt(e,t,i){let r=this.elements;return eF.subVectors(e,t),0===eF.lengthSq()&&(eF.z=1),eF.normalize(),ez.crossVectors(i,eF),0===ez.lengthSq()&&(1===Math.abs(i.z)?eF.x+=1e-4:eF.z+=1e-4,eF.normalize(),ez.crossVectors(i,eF)),ez.normalize(),eB.crossVectors(eF,ez),r[0]=ez.x,r[4]=eB.x,r[8]=eF.x,r[1]=ez.y,r[5]=eB.y,r[9]=eF.y,r[2]=ez.z,r[6]=eB.z,r[10]=eF.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,a=this.elements,n=i[0],s=i[4],o=i[8],l=i[12],h=i[1],c=i[5],u=i[9],d=i[13],p=i[2],f=i[6],m=i[10],g=i[14],v=i[3],_=i[7],x=i[11],y=i[15],M=r[0],b=r[4],S=r[8],T=r[12],w=r[1],E=r[5],A=r[9],C=r[13],L=r[2],R=r[6],P=r[10],D=r[14],I=r[3],N=r[7],O=r[11],U=r[15];return a[0]=n*M+s*w+o*L+l*I,a[4]=n*b+s*E+o*R+l*N,a[8]=n*S+s*A+o*P+l*O,a[12]=n*T+s*C+o*D+l*U,a[1]=h*M+c*w+u*L+d*I,a[5]=h*b+c*E+u*R+d*N,a[9]=h*S+c*A+u*P+d*O,a[13]=h*T+c*C+u*D+d*U,a[2]=p*M+f*w+m*L+g*I,a[6]=p*b+f*E+m*R+g*N,a[10]=p*S+f*A+m*P+g*O,a[14]=p*T+f*C+m*D+g*U,a[3]=v*M+_*w+x*L+y*I,a[7]=v*b+_*E+x*R+y*N,a[11]=v*S+_*A+x*P+y*O,a[15]=v*T+_*C+x*D+y*U,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],a=e[12],n=e[1],s=e[5],o=e[9],l=e[13],h=e[2],c=e[6],u=e[10],d=e[14],p=e[3],f=e[7];return p*(a*o*c-r*l*c-a*s*u+i*l*u+r*s*d-i*o*d)+f*(t*o*d-t*l*u+a*n*u-r*n*d+r*l*h-a*o*h)+e[11]*(t*l*c-t*s*d-a*n*c+i*n*d+a*s*h-i*l*h)+e[15]*(-r*s*h-t*o*c+t*s*u+r*n*c-i*n*u+i*o*h)}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(e,t,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],n=e[4],s=e[5],o=e[6],l=e[7],h=e[8],c=e[9],u=e[10],d=e[11],p=e[12],f=e[13],m=e[14],g=e[15],v=c*m*l-f*u*l+f*o*d-s*m*d-c*o*g+s*u*g,_=p*u*l-h*m*l-p*o*d+n*m*d+h*o*g-n*u*g,x=h*f*l-p*c*l+p*s*d-n*f*d-h*s*g+n*c*g,y=p*c*o-h*f*o-p*s*u+n*f*u+h*s*m-n*c*m,M=t*v+i*_+r*x+a*y;if(0===M)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let b=1/M;return e[0]=v*b,e[1]=(f*u*a-c*m*a-f*r*d+i*m*d+c*r*g-i*u*g)*b,e[2]=(s*m*a-f*o*a+f*r*l-i*m*l-s*r*g+i*o*g)*b,e[3]=(c*o*a-s*u*a-c*r*l+i*u*l+s*r*d-i*o*d)*b,e[4]=_*b,e[5]=(h*m*a-p*u*a+p*r*d-t*m*d-h*r*g+t*u*g)*b,e[6]=(p*o*a-n*m*a-p*r*l+t*m*l+n*r*g-t*o*g)*b,e[7]=(n*u*a-h*o*a+h*r*l-t*u*l-n*r*d+t*o*d)*b,e[8]=x*b,e[9]=(p*c*a-h*f*a-p*i*d+t*f*d+h*i*g-t*c*g)*b,e[10]=(n*f*a-p*s*a+p*i*l-t*f*l-n*i*g+t*s*g)*b,e[11]=(h*s*a-n*c*a-h*i*l+t*c*l+n*i*d-t*s*d)*b,e[12]=y*b,e[13]=(h*f*r-p*c*r+p*i*u-t*f*u-h*i*m+t*c*m)*b,e[14]=(p*s*r-n*f*r-p*i*o+t*f*o+n*i*m-t*s*m)*b,e[15]=(n*c*r-h*s*r+h*i*o-t*c*o-n*i*u+t*s*u)*b,this}scale(e){let t=this.elements,i=e.x,r=e.y,a=e.z;return t[0]*=i,t[4]*=r,t[8]*=a,t[1]*=i,t[5]*=r,t[9]*=a,t[2]*=i,t[6]*=r,t[10]*=a,t[3]*=i,t[7]*=r,t[11]*=a,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2];return Math.sqrt(Math.max(t,e[4]*e[4]+e[5]*e[5]+e[6]*e[6],e[8]*e[8]+e[9]*e[9]+e[10]*e[10]))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),a=1-i,n=e.x,s=e.y,o=e.z,l=a*n,h=a*s;return this.set(l*n+i,l*s-r*o,l*o+r*s,0,l*s+r*o,h*s+i,h*o-r*n,0,l*o-r*s,h*o+r*n,a*o*o+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,a,n){return this.set(1,i,a,0,e,1,n,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,a=t._x,n=t._y,s=t._z,o=t._w,l=a+a,h=n+n,c=s+s,u=a*l,d=a*h,p=a*c,f=n*h,m=n*c,g=s*c,v=o*l,_=o*h,x=o*c,y=i.x,M=i.y,b=i.z;return r[0]=(1-(f+g))*y,r[1]=(d+x)*y,r[2]=(p-_)*y,r[3]=0,r[4]=(d-x)*M,r[5]=(1-(u+g))*M,r[6]=(m+v)*M,r[7]=0,r[8]=(p+_)*b,r[9]=(m-v)*b,r[10]=(1-(u+f))*b,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements,a=eN.set(r[0],r[1],r[2]).length(),n=eN.set(r[4],r[5],r[6]).length(),s=eN.set(r[8],r[9],r[10]).length();0>this.determinant()&&(a=-a),e.x=r[12],e.y=r[13],e.z=r[14],eO.copy(this);let o=1/a,l=1/n,h=1/s;return eO.elements[0]*=o,eO.elements[1]*=o,eO.elements[2]*=o,eO.elements[4]*=l,eO.elements[5]*=l,eO.elements[6]*=l,eO.elements[8]*=h,eO.elements[9]*=h,eO.elements[10]*=h,t.setFromRotationMatrix(eO),i.x=a,i.y=n,i.z=s,this}makePerspective(e,t,i,r,a,n){let s=this.elements;return s[0]=2*a/(t-e),s[4]=0,s[8]=(t+e)/(t-e),s[12]=0,s[1]=0,s[5]=2*a/(i-r),s[9]=(i+r)/(i-r),s[13]=0,s[2]=0,s[6]=0,s[10]=-(n+a)/(n-a),s[14]=-2*n*a/(n-a),s[3]=0,s[7]=0,s[11]=-1,s[15]=0,this}makeOrthographic(e,t,i,r,a,n){let s=this.elements,o=1/(t-e),l=1/(i-r),h=1/(n-a);return s[0]=2*o,s[4]=0,s[8]=0,s[12]=-((t+e)*o),s[1]=0,s[5]=2*l,s[9]=0,s[13]=-((i+r)*l),s[2]=0,s[6]=0,s[10]=-2*h,s[14]=-((n+a)*h),s[3]=0,s[7]=0,s[11]=0,s[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let e=0;e<16;e++)if(t[e]!==i[e])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};let eN=new Vector3,eO=new Matrix4,eU=new Vector3(0,0,0),eV=new Vector3(1,1,1),ez=new Vector3,eB=new Vector3,eF=new Vector3,ek=new Matrix4,eG=new Quaternion;let Euler=class Euler{constructor(e=0,t=0,i=0,r=Euler.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let r=e.elements,a=r[0],n=r[4],s=r[8],o=r[1],l=r[5],h=r[9],c=r[2],u=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(z(s,-1,1)),.9999999>Math.abs(s)?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-n,a)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-z(h,-1,1)),.9999999>Math.abs(h)?(this._y=Math.atan2(s,d),this._z=Math.atan2(o,l)):(this._y=Math.atan2(-c,a),this._z=0);break;case"ZXY":this._x=Math.asin(z(u,-1,1)),.9999999>Math.abs(u)?(this._y=Math.atan2(-c,d),this._z=Math.atan2(-n,l)):(this._y=0,this._z=Math.atan2(o,a));break;case"ZYX":this._y=Math.asin(-z(c,-1,1)),.9999999>Math.abs(c)?(this._x=Math.atan2(u,d),this._z=Math.atan2(o,a)):(this._x=0,this._z=Math.atan2(-n,l));break;case"YZX":this._z=Math.asin(z(o,-1,1)),.9999999>Math.abs(o)?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-c,a)):(this._x=0,this._y=Math.atan2(s,d));break;case"XZY":this._z=Math.asin(-z(n,-1,1)),.9999999>Math.abs(n)?(this._x=Math.atan2(u,l),this._y=Math.atan2(s,a)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,!0===i&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return ek.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ek,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return eG.setFromEuler(this),this.setFromQuaternion(eG,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],void 0!==e[3]&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}};Euler.DefaultOrder="XYZ",Euler.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];let Layers=class Layers{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!=0}isEnabled(e){return(this.mask&1<<e)!=0}};let eH=0,eW=new Vector3,ej=new Quaternion,eX=new Matrix4,eq=new Vector3,eY=new Vector3,eK=new Vector3,eJ=new Quaternion,eZ=new Vector3(1,0,0),eQ=new Vector3(0,1,0),e$=new Vector3(0,0,1),e0={type:"added"},e1={type:"removed"};let Object3D=class Object3D extends EventDispatcher{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:eH++}),this.uuid=V(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Object3D.DefaultUp.clone();let e=new Vector3,t=new Euler,i=new Quaternion,r=new Vector3(1,1,1);t._onChange(function(){i.setFromEuler(t,!1)}),i._onChange(function(){t.setFromQuaternion(i,void 0,!1)}),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Matrix4},normalMatrix:{value:new Matrix3}}),this.matrix=new Matrix4,this.matrixWorld=new Matrix4,this.matrixAutoUpdate=Object3D.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Object3D.DefaultMatrixWorldAutoUpdate,this.layers=new Layers,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ej.setFromAxisAngle(e,t),this.quaternion.multiply(ej),this}rotateOnWorldAxis(e,t){return ej.setFromAxisAngle(e,t),this.quaternion.premultiply(ej),this}rotateX(e){return this.rotateOnAxis(eZ,e)}rotateY(e){return this.rotateOnAxis(eQ,e)}rotateZ(e){return this.rotateOnAxis(e$,e)}translateOnAxis(e,t){return eW.copy(e).applyQuaternion(this.quaternion),this.position.add(eW.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(eZ,e)}translateY(e){return this.translateOnAxis(eQ,e)}translateZ(e){return this.translateOnAxis(e$,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(eX.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?eq.copy(e):eq.set(e,t,i);let r=this.parent;this.updateWorldMatrix(!0,!1),eY.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?eX.lookAt(eY,eq,this.up):eX.lookAt(eq,eY,this.up),this.quaternion.setFromRotationMatrix(eX),r&&(eX.extractRotation(r.matrixWorld),ej.setFromRotationMatrix(eX),this.quaternion.premultiply(ej.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?console.error("THREE.Object3D.add: object can't be added as a child of itself.",e):e&&e.isObject3D?(null!==e.parent&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(e0)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return -1!==t&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(e1)),this}removeFromParent(){let e=this.parent;return null!==e&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){let t=this.children[e];t.parent=null,t.dispatchEvent(e1)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),eX.copy(this.matrixWorld).invert(),null!==e.parent&&(e.parent.updateWorldMatrix(!0,!1),eX.multiply(e.parent.matrixWorld)),e.applyMatrix4(eX),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){let r=this.children[i].getObjectByProperty(e,t);if(void 0!==r)return r}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let r=0,a=this.children.length;r<a;r++){let a=this.children[r].getObjectsByProperty(e,t);a.length>0&&(i=i.concat(a))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(eY,e,eK),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(eY,eJ,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(!1===this.visible)return;e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;null!==t&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(null===this.parent?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,r=t.length;i<r;i++){let r=t[i];(!0===r.matrixWorldAutoUpdate||!0===e)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let i=this.parent;if(!0===e&&null!==i&&!0===i.matrixWorldAutoUpdate&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),null===this.parent?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),!0===t){let e=this.children;for(let t=0,i=e.length;t<i;t++){let i=e[t];!0===i.matrixWorldAutoUpdate&&i.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=void 0===e||"string"==typeof e,i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});let r={};function a(t,i){return void 0===t[i.uuid]&&(t[i.uuid]=i.toJSON(e)),i.uuid}if(r.uuid=this.uuid,r.type=this.type,""!==this.name&&(r.name=this.name),!0===this.castShadow&&(r.castShadow=!0),!0===this.receiveShadow&&(r.receiveShadow=!0),!1===this.visible&&(r.visible=!1),!1===this.frustumCulled&&(r.frustumCulled=!1),0!==this.renderOrder&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),!1===this.matrixAutoUpdate&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),null!==this.instanceColor&&(r.instanceColor=this.instanceColor.toJSON())),this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&!0!==this.environment.isRenderTargetTexture&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);let t=this.geometry.parameters;if(void 0!==t&&void 0!==t.shapes){let i=t.shapes;if(Array.isArray(i))for(let t=0,r=i.length;t<r;t++){let r=i[t];a(e.shapes,r)}else a(e.shapes,i)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),void 0!==this.skeleton&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),void 0!==this.material)if(Array.isArray(this.material)){let t=[];for(let i=0,r=this.material.length;i<r;i++)t.push(a(e.materials,this.material[i]));r.material=t}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let i=this.animations[t];r.animations.push(a(e.animations,i))}}if(t){let t=n(e.geometries),r=n(e.materials),a=n(e.textures),s=n(e.images),o=n(e.shapes),l=n(e.skeletons),h=n(e.animations),c=n(e.nodes);t.length>0&&(i.geometries=t),r.length>0&&(i.materials=r),a.length>0&&(i.textures=a),s.length>0&&(i.images=s),o.length>0&&(i.shapes=o),l.length>0&&(i.skeletons=l),h.length>0&&(i.animations=h),c.length>0&&(i.nodes=c)}return i.object=r,i;function n(e){let t=[];for(let i in e){let r=e[i];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),!0===t)for(let t=0;t<e.children.length;t++){let i=e.children[t];this.add(i.clone())}return this}};Object3D.DefaultUp=new Vector3(0,1,0),Object3D.DefaultMatrixAutoUpdate=!0,Object3D.DefaultMatrixWorldAutoUpdate=!0;let e3=new Vector3,e2=new Vector3,e4=new Vector3,e5=new Vector3,e6=new Vector3,e8=new Vector3,e9=new Vector3,e7=new Vector3,te=new Vector3,tt=new Vector3;let Triangle=class Triangle{constructor(e=new Vector3,t=new Vector3,i=new Vector3){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),e3.subVectors(e,t),r.cross(e3);let a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,t,i,r,a){e3.subVectors(r,t),e2.subVectors(i,t),e4.subVectors(e,t);let n=e3.dot(e3),s=e3.dot(e2),o=e3.dot(e4),l=e2.dot(e2),h=e2.dot(e4),c=n*l-s*s;if(0===c)return a.set(-2,-1,-1);let u=1/c,d=(l*o-s*h)*u,p=(n*h-s*o)*u;return a.set(1-d-p,p,d)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,e5),e5.x>=0&&e5.y>=0&&e5.x+e5.y<=1}static getUV(e,t,i,r,a,n,s,o){return this.getBarycoord(e,t,i,r,e5),o.set(0,0),o.addScaledVector(a,e5.x),o.addScaledVector(n,e5.y),o.addScaledVector(s,e5.z),o}static isFrontFacing(e,t,i,r){return e3.subVectors(i,t),e2.subVectors(e,t),0>e3.cross(e2).dot(r)}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return e3.subVectors(this.c,this.b),e2.subVectors(this.a,this.b),.5*e3.cross(e2).length()}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Triangle.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Triangle.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,a){return Triangle.getUV(e,this.a,this.b,this.c,t,i,r,a)}containsPoint(e){return Triangle.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Triangle.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i,r,a=this.a,n=this.b,s=this.c;e6.subVectors(n,a),e8.subVectors(s,a),e7.subVectors(e,a);let o=e6.dot(e7),l=e8.dot(e7);if(o<=0&&l<=0)return t.copy(a);te.subVectors(e,n);let h=e6.dot(te),c=e8.dot(te);if(h>=0&&c<=h)return t.copy(n);let u=o*c-h*l;if(u<=0&&o>=0&&h<=0)return i=o/(o-h),t.copy(a).addScaledVector(e6,i);tt.subVectors(e,s);let d=e6.dot(tt),p=e8.dot(tt);if(p>=0&&d<=p)return t.copy(s);let f=d*l-o*p;if(f<=0&&l>=0&&p<=0)return r=l/(l-p),t.copy(a).addScaledVector(e8,r);let m=h*p-d*c;if(m<=0&&c-h>=0&&d-p>=0)return e9.subVectors(s,n),r=(c-h)/(c-h+(d-p)),t.copy(n).addScaledVector(e9,r);let g=1/(m+f+u);return i=f*g,r=u*g,t.copy(a).addScaledVector(e6,i).addScaledVector(e8,r)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}};let ti=0;let Material=class Material extends EventDispatcher{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ti++}),this.uuid=V(),this.name="",this.type="Material",this.blending=1,this.side=s,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=d,this.blendDst=p,this.blendEquation=h,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(void 0!==e)for(let t in e){let i=e[t];if(void 0===i){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}let r=this[t];if(void 0===r){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=void 0===e||"string"==typeof e;t&&(e={textures:{},images:{}});let i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};function r(e){let t=[];for(let i in e){let r=e[i];delete r.metadata,t.push(r)}return t}if(i.uuid=this.uuid,i.type=this.type,""!==this.name&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),void 0!==this.roughness&&(i.roughness=this.roughness),void 0!==this.metalness&&(i.metalness=this.metalness),void 0!==this.sheen&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),void 0!==this.sheenRoughness&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&1!==this.emissiveIntensity&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),void 0!==this.specularIntensity&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),void 0!==this.shininess&&(i.shininess=this.shininess),void 0!==this.clearcoat&&(i.clearcoat=this.clearcoat),void 0!==this.clearcoatRoughness&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),void 0!==this.iridescence&&(i.iridescence=this.iridescence),void 0!==this.iridescenceIOR&&(i.iridescenceIOR=this.iridescenceIOR),void 0!==this.iridescenceThicknessRange&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,void 0!==this.combine&&(i.combine=this.combine)),void 0!==this.envMapIntensity&&(i.envMapIntensity=this.envMapIntensity),void 0!==this.reflectivity&&(i.reflectivity=this.reflectivity),void 0!==this.refractionRatio&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),void 0!==this.transmission&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),void 0!==this.thickness&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),void 0!==this.attenuationDistance&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),void 0!==this.attenuationColor&&(i.attenuationColor=this.attenuationColor.getHex()),void 0!==this.size&&(i.size=this.size),null!==this.shadowSide&&(i.shadowSide=this.shadowSide),void 0!==this.sizeAttenuation&&(i.sizeAttenuation=this.sizeAttenuation),1!==this.blending&&(i.blending=this.blending),this.side!==s&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),!0===this.transparent&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,void 0!==this.rotation&&0!==this.rotation&&(i.rotation=this.rotation),!0===this.polygonOffset&&(i.polygonOffset=!0),0!==this.polygonOffsetFactor&&(i.polygonOffsetFactor=this.polygonOffsetFactor),0!==this.polygonOffsetUnits&&(i.polygonOffsetUnits=this.polygonOffsetUnits),void 0!==this.linewidth&&1!==this.linewidth&&(i.linewidth=this.linewidth),void 0!==this.dashSize&&(i.dashSize=this.dashSize),void 0!==this.gapSize&&(i.gapSize=this.gapSize),void 0!==this.scale&&(i.scale=this.scale),!0===this.dithering&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),!0===this.alphaToCoverage&&(i.alphaToCoverage=this.alphaToCoverage),!0===this.premultipliedAlpha&&(i.premultipliedAlpha=this.premultipliedAlpha),!0===this.wireframe&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),"round"!==this.wireframeLinecap&&(i.wireframeLinecap=this.wireframeLinecap),"round"!==this.wireframeLinejoin&&(i.wireframeLinejoin=this.wireframeLinejoin),!0===this.flatShading&&(i.flatShading=this.flatShading),!1===this.visible&&(i.visible=!1),!1===this.toneMapped&&(i.toneMapped=!1),!1===this.fog&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData),t){let t=r(e.textures),a=r(e.images);t.length>0&&(i.textures=t),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(null!==t){let e=t.length;i=Array(e);for(let r=0;r!==e;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){!0===e&&this.version++}};let MeshBasicMaterial=class MeshBasicMaterial extends Material{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Color(0xffffff),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};let tr=new Vector3,ta=new Vector2;let BufferAttribute=class BufferAttribute{constructor(e,t,i=!1){if(Array.isArray(e))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=void 0!==e?e.length/t:0,this.normalized=i,this.usage=35044,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){!0===e&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(2===this.itemSize)for(let t=0,i=this.count;t<i;t++)ta.fromBufferAttribute(this,t),ta.applyMatrix3(e),this.setXY(t,ta.x,ta.y);else if(3===this.itemSize)for(let t=0,i=this.count;t<i;t++)tr.fromBufferAttribute(this,t),tr.applyMatrix3(e),this.setXYZ(t,tr.x,tr.y,tr.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)tr.fromBufferAttribute(this,t),tr.applyMatrix4(e),this.setXYZ(t,tr.x,tr.y,tr.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)tr.fromBufferAttribute(this,t),tr.applyNormalMatrix(e),this.setXYZ(t,tr.x,tr.y,tr.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)tr.fromBufferAttribute(this,t),tr.transformDirection(e),this.setXYZ(t,tr.x,tr.y,tr.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=W(t,this.array)),t}setX(e,t){return this.normalized&&(t=j(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=W(t,this.array)),t}setY(e,t){return this.normalized&&(t=j(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=W(t,this.array)),t}setZ(e,t){return this.normalized&&(t=j(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=W(t,this.array)),t}setW(e,t){return this.normalized&&(t=j(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=j(t,this.array),i=j(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=j(t,this.array),i=j(i,this.array),r=j(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,a){return e*=this.itemSize,this.normalized&&(t=j(t,this.array),i=j(i,this.array),r=j(r,this.array),a=j(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return""!==this.name&&(e.name=this.name),35044!==this.usage&&(e.usage=this.usage),(0!==this.updateRange.offset||-1!==this.updateRange.count)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}};let Uint16BufferAttribute=class Uint16BufferAttribute extends BufferAttribute{constructor(e,t,i){super(new Uint16Array(e),t,i)}};let Uint32BufferAttribute=class Uint32BufferAttribute extends BufferAttribute{constructor(e,t,i){super(new Uint32Array(e),t,i)}};let Float32BufferAttribute=class Float32BufferAttribute extends BufferAttribute{constructor(e,t,i){super(new Float32Array(e),t,i)}};let tn=0,ts=new Matrix4,to=new Object3D,tl=new Vector3,th=new Box3,tc=new Box3,tu=new Vector3;let BufferGeometry=class BufferGeometry extends EventDispatcher{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:tn++}),this.uuid=V(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Y(e)?Uint32BufferAttribute:Uint16BufferAttribute)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return void 0!==this.attributes[e]}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;void 0!==t&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(void 0!==i){let t=new Matrix3().getNormalMatrix(e);i.applyNormalMatrix(t),i.needsUpdate=!0}let r=this.attributes.tangent;return void 0!==r&&(r.transformDirection(e),r.needsUpdate=!0),null!==this.boundingBox&&this.computeBoundingBox(),null!==this.boundingSphere&&this.computeBoundingSphere(),this}applyQuaternion(e){return ts.makeRotationFromQuaternion(e),this.applyMatrix4(ts),this}rotateX(e){return ts.makeRotationX(e),this.applyMatrix4(ts),this}rotateY(e){return ts.makeRotationY(e),this.applyMatrix4(ts),this}rotateZ(e){return ts.makeRotationZ(e),this.applyMatrix4(ts),this}translate(e,t,i){return ts.makeTranslation(e,t,i),this.applyMatrix4(ts),this}scale(e,t,i){return ts.makeScale(e,t,i),this.applyMatrix4(ts),this}lookAt(e){return to.lookAt(e),to.updateMatrix(),this.applyMatrix4(to.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(tl).negate(),this.translate(tl.x,tl.y,tl.z),this}setFromPoints(e){let t=[];for(let i=0,r=e.length;i<r;i++){let r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Float32BufferAttribute(t,3)),this}computeBoundingBox(){null===this.boundingBox&&(this.boundingBox=new Box3);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new Vector3(-1/0,-1/0,-1/0),new Vector3(Infinity,Infinity,Infinity));return}if(void 0!==e){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,i=t.length;e<i;e++){let i=t[e];th.setFromBufferAttribute(i),this.morphTargetsRelative?(tu.addVectors(this.boundingBox.min,th.min),this.boundingBox.expandByPoint(tu),tu.addVectors(this.boundingBox.max,th.max),this.boundingBox.expandByPoint(tu)):(this.boundingBox.expandByPoint(th.min),this.boundingBox.expandByPoint(th.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){null===this.boundingSphere&&(this.boundingSphere=new Sphere);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new Vector3,1/0);return}if(e){let i=this.boundingSphere.center;if(th.setFromBufferAttribute(e),t)for(let e=0,i=t.length;e<i;e++){let i=t[e];tc.setFromBufferAttribute(i),this.morphTargetsRelative?(tu.addVectors(th.min,tc.min),th.expandByPoint(tu),tu.addVectors(th.max,tc.max),th.expandByPoint(tu)):(th.expandByPoint(tc.min),th.expandByPoint(tc.max))}th.getCenter(i);let r=0;for(let t=0,a=e.count;t<a;t++)tu.fromBufferAttribute(e,t),r=Math.max(r,i.distanceToSquared(tu));if(t)for(let a=0,n=t.length;a<n;a++){let n=t[a],s=this.morphTargetsRelative;for(let t=0,a=n.count;t<a;t++)tu.fromBufferAttribute(n,t),s&&(tl.fromBufferAttribute(e,t),tu.add(tl)),r=Math.max(r,i.distanceToSquared(tu))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(null===e||void 0===t.position||void 0===t.normal||void 0===t.uv)return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");let i=e.array,r=t.position.array,a=t.normal.array,n=t.uv.array,s=r.length/3;!1===this.hasAttribute("tangent")&&this.setAttribute("tangent",new BufferAttribute(new Float32Array(4*s),4));let o=this.getAttribute("tangent").array,l=[],h=[];for(let e=0;e<s;e++)l[e]=new Vector3,h[e]=new Vector3;let c=new Vector3,u=new Vector3,d=new Vector3,p=new Vector2,f=new Vector2,m=new Vector2,g=new Vector3,v=new Vector3,_=this.groups;0===_.length&&(_=[{start:0,count:i.length}]);for(let e=0,t=_.length;e<t;++e){let t=_[e],a=t.start,s=t.count;for(let e=a,t=a+s;e<t;e+=3)!function(e,t,i){c.fromArray(r,3*e),u.fromArray(r,3*t),d.fromArray(r,3*i),p.fromArray(n,2*e),f.fromArray(n,2*t),m.fromArray(n,2*i),u.sub(c),d.sub(c),f.sub(p),m.sub(p);let a=1/(f.x*m.y-m.x*f.y);isFinite(a)&&(g.copy(u).multiplyScalar(m.y).addScaledVector(d,-f.y).multiplyScalar(a),v.copy(d).multiplyScalar(f.x).addScaledVector(u,-m.x).multiplyScalar(a),l[e].add(g),l[t].add(g),l[i].add(g),h[e].add(v),h[t].add(v),h[i].add(v))}(i[e+0],i[e+1],i[e+2])}let x=new Vector3,y=new Vector3,M=new Vector3,b=new Vector3;function S(e){M.fromArray(a,3*e),b.copy(M);let t=l[e];x.copy(t),x.sub(M.multiplyScalar(M.dot(t))).normalize(),y.crossVectors(b,t);let i=y.dot(h[e]);o[4*e]=x.x,o[4*e+1]=x.y,o[4*e+2]=x.z,o[4*e+3]=i<0?-1:1}for(let e=0,t=_.length;e<t;++e){let t=_[e],r=t.start,a=t.count;for(let e=r,t=r+a;e<t;e+=3)S(i[e+0]),S(i[e+1]),S(i[e+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(void 0!==t){let i=this.getAttribute("normal");if(void 0===i)i=new BufferAttribute(new Float32Array(3*t.count),3),this.setAttribute("normal",i);else for(let e=0,t=i.count;e<t;e++)i.setXYZ(e,0,0,0);let r=new Vector3,a=new Vector3,n=new Vector3,s=new Vector3,o=new Vector3,l=new Vector3,h=new Vector3,c=new Vector3;if(e)for(let u=0,d=e.count;u<d;u+=3){let d=e.getX(u+0),p=e.getX(u+1),f=e.getX(u+2);r.fromBufferAttribute(t,d),a.fromBufferAttribute(t,p),n.fromBufferAttribute(t,f),h.subVectors(n,a),c.subVectors(r,a),h.cross(c),s.fromBufferAttribute(i,d),o.fromBufferAttribute(i,p),l.fromBufferAttribute(i,f),s.add(h),o.add(h),l.add(h),i.setXYZ(d,s.x,s.y,s.z),i.setXYZ(p,o.x,o.y,o.z),i.setXYZ(f,l.x,l.y,l.z)}else for(let e=0,s=t.count;e<s;e+=3)r.fromBufferAttribute(t,e+0),a.fromBufferAttribute(t,e+1),n.fromBufferAttribute(t,e+2),h.subVectors(n,a),c.subVectors(r,a),h.cross(c),i.setXYZ(e+0,h.x,h.y,h.z),i.setXYZ(e+1,h.x,h.y,h.z),i.setXYZ(e+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)tu.fromBufferAttribute(e,t),tu.normalize(),e.setXYZ(t,tu.x,tu.y,tu.z)}toNonIndexed(){function e(e,t){let i=e.array,r=e.itemSize,a=e.normalized,n=new i.constructor(t.length*r),s=0,o=0;for(let a=0,l=t.length;a<l;a++){s=e.isInterleavedBufferAttribute?t[a]*e.data.stride+e.offset:t[a]*r;for(let e=0;e<r;e++)n[o++]=i[s++]}return new BufferAttribute(n,r,a)}if(null===this.index)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new BufferGeometry,i=this.index.array,r=this.attributes;for(let a in r){let n=e(r[a],i);t.setAttribute(a,n)}let a=this.morphAttributes;for(let r in a){let n=[],s=a[r];for(let t=0,r=s.length;t<r;t++){let r=e(s[t],i);n.push(r)}t.morphAttributes[r]=n}t.morphTargetsRelative=this.morphTargetsRelative;let n=this.groups;for(let e=0,i=n.length;e<i;e++){let i=n[e];t.addGroup(i.start,i.count,i.materialIndex)}return t}toJSON(){let e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,""!==this.name&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),void 0!==this.parameters){let t=this.parameters;for(let i in t)void 0!==t[i]&&(e[i]=t[i]);return e}e.data={attributes:{}};let t=this.index;null!==t&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let t in i){let r=i[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},a=!1;for(let t in this.morphAttributes){let i=this.morphAttributes[t],n=[];for(let t=0,r=i.length;t<r;t++){let r=i[t];n.push(r.toJSON(e.data))}n.length>0&&(r[t]=n,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let n=this.groups;n.length>0&&(e.data.groups=JSON.parse(JSON.stringify(n)));let s=this.boundingSphere;return null!==s&&(e.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;null!==i&&this.setIndex(i.clone(t));let r=e.attributes;for(let e in r){let i=r[e];this.setAttribute(e,i.clone(t))}let a=e.morphAttributes;for(let e in a){let i=[],r=a[e];for(let e=0,a=r.length;e<a;e++)i.push(r[e].clone(t));this.morphAttributes[e]=i}this.morphTargetsRelative=e.morphTargetsRelative;let n=e.groups;for(let e=0,t=n.length;e<t;e++){let t=n[e];this.addGroup(t.start,t.count,t.materialIndex)}let s=e.boundingBox;null!==s&&(this.boundingBox=s.clone());let o=e.boundingSphere;return null!==o&&(this.boundingSphere=o.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,void 0!==e.parameters&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}};let td=new Matrix4,tp=new Ray,tf=new Sphere,tm=new Vector3,tg=new Vector3,tv=new Vector3,t_=new Vector3,tx=new Vector3,ty=new Vector2,tM=new Vector2,tb=new Vector2,tS=new Vector3,tT=new Vector3;let Mesh=class Mesh extends Object3D{constructor(e=new BufferGeometry,t=new MeshBasicMaterial){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),void 0!==e.morphTargetInfluences&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),void 0!==e.morphTargetDictionary&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(void 0!==i){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=i.length;e<t;e++){let t=i[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,a=i.morphAttributes.position,n=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let s=this.morphTargetInfluences;if(a&&s){tx.set(0,0,0);for(let i=0,r=a.length;i<r;i++){let r=s[i],o=a[i];0!==r&&(t_.fromBufferAttribute(o,e),n?tx.addScaledVector(t_,r):tx.addScaledVector(t_.sub(t),r))}t.add(tx)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){let i,r=this.geometry,a=this.material,n=this.matrixWorld;if(void 0===a||(null===r.boundingSphere&&r.computeBoundingSphere(),tf.copy(r.boundingSphere),tf.applyMatrix4(n),!1===e.ray.intersectsSphere(tf))||(td.copy(n).invert(),tp.copy(e.ray).applyMatrix4(td),null!==r.boundingBox&&!1===tp.intersectsBox(r.boundingBox)))return;let s=r.index,o=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv2,c=r.groups,u=r.drawRange;if(null!==s)if(Array.isArray(a))for(let r=0,n=c.length;r<n;r++){let n=c[r],o=a[n.materialIndex],d=Math.max(n.start,u.start),p=Math.min(s.count,Math.min(n.start+n.count,u.start+u.count));for(let r=d;r<p;r+=3){let a=s.getX(r);(i=tw(this,o,e,tp,l,h,a,s.getX(r+1),s.getX(r+2)))&&(i.faceIndex=Math.floor(r/3),i.face.materialIndex=n.materialIndex,t.push(i))}}else{let r=Math.max(0,u.start),n=Math.min(s.count,u.start+u.count);for(let o=r;o<n;o+=3){let r=s.getX(o);(i=tw(this,a,e,tp,l,h,r,s.getX(o+1),s.getX(o+2)))&&(i.faceIndex=Math.floor(o/3),t.push(i))}}else if(void 0!==o)if(Array.isArray(a))for(let r=0,n=c.length;r<n;r++){let n=c[r],s=a[n.materialIndex],d=Math.max(n.start,u.start),p=Math.min(o.count,Math.min(n.start+n.count,u.start+u.count));for(let r=d;r<p;r+=3)(i=tw(this,s,e,tp,l,h,r,r+1,r+2))&&(i.faceIndex=Math.floor(r/3),i.face.materialIndex=n.materialIndex,t.push(i))}else{let r=Math.max(0,u.start),n=Math.min(o.count,u.start+u.count);for(let s=r;s<n;s+=3)(i=tw(this,a,e,tp,l,h,s,s+1,s+2))&&(i.faceIndex=Math.floor(s/3),t.push(i))}}};function tw(e,t,i,r,a,n,o,l,h){e.getVertexPosition(o,tm),e.getVertexPosition(l,tg),e.getVertexPosition(h,tv);let c=function(e,t,i,r,a,n,o,l){if(null===(1===t.side?r.intersectTriangle(o,n,a,!0,l):r.intersectTriangle(a,n,o,t.side===s,l)))return null;tT.copy(l),tT.applyMatrix4(e.matrixWorld);let h=i.ray.origin.distanceTo(tT);return h<i.near||h>i.far?null:{distance:h,point:tT.clone(),object:e}}(e,t,i,r,tm,tg,tv,tS);if(c){a&&(ty.fromBufferAttribute(a,o),tM.fromBufferAttribute(a,l),tb.fromBufferAttribute(a,h),c.uv=Triangle.getUV(tS,tm,tg,tv,ty,tM,tb,new Vector2)),n&&(ty.fromBufferAttribute(n,o),tM.fromBufferAttribute(n,l),tb.fromBufferAttribute(n,h),c.uv2=Triangle.getUV(tS,tm,tg,tv,ty,tM,tb,new Vector2));let e={a:o,b:l,c:h,normal:new Vector3,materialIndex:0};Triangle.getNormal(tm,tg,tv,e.normal),c.face=e}return c}let BoxGeometry=class BoxGeometry extends BufferGeometry{constructor(e=1,t=1,i=1,r=1,a=1,n=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:a,depthSegments:n};let s=this;r=Math.floor(r),a=Math.floor(a);let o=[],l=[],h=[],c=[],u=0,d=0;function p(e,t,i,r,a,n,p,f,m,g,v){let _=n/m,x=p/g,y=n/2,M=p/2,b=f/2,S=m+1,T=g+1,w=0,E=0,A=new Vector3;for(let n=0;n<T;n++){let s=n*x-M;for(let o=0;o<S;o++){let u=o*_-y;A[e]=u*r,A[t]=s*a,A[i]=b,l.push(A.x,A.y,A.z),A[e]=0,A[t]=0,A[i]=f>0?1:-1,h.push(A.x,A.y,A.z),c.push(o/m),c.push(1-n/g),w+=1}}for(let e=0;e<g;e++)for(let t=0;t<m;t++){let i=u+t+S*e,r=u+t+S*(e+1),a=u+(t+1)+S*(e+1),n=u+(t+1)+S*e;o.push(i,r,n),o.push(r,a,n),E+=6}s.addGroup(d,E,v),d+=E,u+=w}p("z","y","x",-1,-1,i,t,e,n=Math.floor(n),a,0),p("z","y","x",1,-1,i,t,-e,n,a,1),p("x","z","y",1,1,e,i,t,r,n,2),p("x","z","y",1,-1,e,i,-t,r,n,3),p("x","y","z",1,-1,e,t,i,r,a,4),p("x","y","z",-1,-1,e,t,-i,r,a,5),this.setIndex(o),this.setAttribute("position",new Float32BufferAttribute(l,3)),this.setAttribute("normal",new Float32BufferAttribute(h,3)),this.setAttribute("uv",new Float32BufferAttribute(c,2))}static fromJSON(e){return new BoxGeometry(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function tE(e){let t={};for(let i in e)for(let r in t[i]={},e[i]){let a=e[i][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?t[i][r]=a.clone():Array.isArray(a)?t[i][r]=a.slice():t[i][r]=a}return t}function tA(e){let t={};for(let i=0;i<e.length;i++){let r=tE(e[i]);for(let e in r)t[e]=r[e]}return t}function tC(e){return null===e.getRenderTarget()&&e.outputEncoding===L?R:P}let tL={clone:tE};var tR=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tP=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;let ShaderMaterial=class ShaderMaterial extends Material{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tR,this.fragmentShader=tP,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,void 0!==e&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=tE(e.uniforms),this.uniformsGroups=function(e){let t=[];for(let i=0;i<e.length;i++)t.push(e[i].clone());return t}(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);for(let i in t.glslVersion=this.glslVersion,t.uniforms={},this.uniforms){let r=this.uniforms[i].value;r&&r.isTexture?t.uniforms[i]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[i]={type:"m4",value:r.toArray()}:t.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;let i={};for(let e in this.extensions)!0===this.extensions[e]&&(i[e]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}};let Camera=class Camera extends Object3D{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Matrix4,this.projectionMatrix=new Matrix4,this.projectionMatrixInverse=new Matrix4}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};let PerspectiveCamera=class PerspectiveCamera extends Camera{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=null===e.view?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=2*U*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(.5*O*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return 2*U*Math.atan(Math.tan(.5*O*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,a,n){this.aspect=e/t,null===this.view&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=n,this.updateProjectionMatrix()}clearViewOffset(){null!==this.view&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(.5*O*this.fov)/this.zoom,i=2*t,r=this.aspect*i,a=-.5*r,n=this.view;if(null!==this.view&&this.view.enabled){let e=n.fullWidth,s=n.fullHeight;a+=n.offsetX*r/e,t-=n.offsetY*i/s,r*=n.width/e,i*=n.height/s}let s=this.filmOffset;0!==s&&(a+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,null!==this.view&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};let CubeCamera=class CubeCamera extends Object3D{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i;let r=new PerspectiveCamera(-90,1,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(1,0,0),this.add(r);let a=new PerspectiveCamera(-90,1,e,t);a.layers=this.layers,a.up.set(0,1,0),a.lookAt(-1,0,0),this.add(a);let n=new PerspectiveCamera(-90,1,e,t);n.layers=this.layers,n.up.set(0,0,-1),n.lookAt(0,1,0),this.add(n);let s=new PerspectiveCamera(-90,1,e,t);s.layers=this.layers,s.up.set(0,0,1),s.lookAt(0,-1,0),this.add(s);let o=new PerspectiveCamera(-90,1,e,t);o.layers=this.layers,o.up.set(0,1,0),o.lookAt(0,0,1),this.add(o);let l=new PerspectiveCamera(-90,1,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,-1),this.add(l)}update(e,t){null===this.parent&&this.updateMatrixWorld();let i=this.renderTarget,[r,a,n,s,o,l]=this.children,h=e.getRenderTarget(),c=e.toneMapping,u=e.xr.enabled;e.toneMapping=0,e.xr.enabled=!1;let d=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,a),e.setRenderTarget(i,2),e.render(t,n),e.setRenderTarget(i,3),e.render(t,s),e.setRenderTarget(i,4),e.render(t,o),i.texture.generateMipmaps=d,e.setRenderTarget(i,5),e.render(t,l),e.setRenderTarget(h),e.toneMapping=c,e.xr.enabled=u,i.texture.needsPMREMUpdate=!0}};let CubeTexture=class CubeTexture extends Texture{constructor(e,t,i,r,a,n,s,o,l,h){super(e=void 0!==e?e:[],t=void 0!==t?t:301,i,r,a,n,s,o,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};let WebGLCubeRenderTarget=class WebGLCubeRenderTarget extends WebGLRenderTarget{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1};this.texture=new CubeTexture([i,i,i,i,i,i],t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=void 0!==t.generateMipmaps&&t.generateMipmaps,this.texture.minFilter=void 0!==t.minFilter?t.minFilter:M}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new BoxGeometry(5,5,5),a=new ShaderMaterial({name:"CubemapFromEquirect",uniforms:tE(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:1,blending:0});a.uniforms.tEquirect.value=t;let n=new Mesh(r,a),s=t.minFilter;return t.minFilter===S&&(t.minFilter=M),new CubeCamera(1,10,this).update(e,n),t.minFilter=s,n.geometry.dispose(),n.material.dispose(),this}clear(e,t,i,r){let a=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(a)}};let tD=new Vector3,tI=new Vector3,tN=new Matrix3;let Plane=class Plane{constructor(e=new Vector3(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=tD.subVectors(i,t).cross(tI.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){let i=e.delta(tD),r=this.normal.dot(i);if(0===r)return 0===this.distanceToPoint(e.start)?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:t.copy(i).multiplyScalar(a).add(e.start)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||tN.getNormalMatrix(e),r=this.coplanarPoint(tD).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}};let tO=new Sphere,tU=new Vector3;let Frustum=class Frustum{constructor(e=new Plane,t=new Plane,i=new Plane,r=new Plane,a=new Plane,n=new Plane){this.planes=[e,t,i,r,a,n]}set(e,t,i,r,a,n){let s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(i),s[3].copy(r),s[4].copy(a),s[5].copy(n),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){let t=this.planes,i=e.elements,r=i[0],a=i[1],n=i[2],s=i[3],o=i[4],l=i[5],h=i[6],c=i[7],u=i[8],d=i[9],p=i[10],f=i[11],m=i[12],g=i[13],v=i[14],_=i[15];return t[0].setComponents(s-r,c-o,f-u,_-m).normalize(),t[1].setComponents(s+r,c+o,f+u,_+m).normalize(),t[2].setComponents(s+a,c+l,f+d,_+g).normalize(),t[3].setComponents(s-a,c-l,f-d,_-g).normalize(),t[4].setComponents(s-n,c-h,f-p,_-v).normalize(),t[5].setComponents(s+n,c+h,f+p,_+v).normalize(),this}intersectsObject(e){let t=e.geometry;return null===t.boundingSphere&&t.computeBoundingSphere(),tO.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(tO)}intersectsSprite(e){return tO.center.set(0,0,0),tO.radius=.7071067811865476,tO.applyMatrix4(e.matrixWorld),this.intersectsSphere(tO)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(tU.x=r.normal.x>0?e.max.x:e.min.x,tU.y=r.normal.y>0?e.max.y:e.min.y,tU.z=r.normal.z>0?e.max.z:e.min.z,0>r.distanceToPoint(tU))return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(0>t[i].distanceToPoint(e))return!1;return!0}clone(){return new this.constructor().copy(this)}};function tV(){let e=null,t=!1,i=null,r=null;function a(t,n){i(t,n),r=e.requestAnimationFrame(a)}return{start:function(){!0!==t&&null!==i&&(r=e.requestAnimationFrame(a),t=!0)},stop:function(){e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){i=e},setContext:function(t){e=t}}}function tz(e,t){let i=t.isWebGL2,r=new WeakMap;return{get:function(e){return e.isInterleavedBufferAttribute&&(e=e.data),r.get(e)},remove:function(t){t.isInterleavedBufferAttribute&&(t=t.data);let i=r.get(t);i&&(e.deleteBuffer(i.buffer),r.delete(t))},update:function(t,a){if(t.isGLBufferAttribute){let e=r.get(t);(!e||e.version<t.version)&&r.set(t,{buffer:t.buffer,type:t.type,bytesPerElement:t.elementSize,version:t.version});return}t.isInterleavedBufferAttribute&&(t=t.data);let n=r.get(t);if(void 0===n)r.set(t,function(t,r){let a,n=t.array,s=t.usage,o=e.createBuffer();if(e.bindBuffer(r,o),e.bufferData(r,n,s),t.onUploadCallback(),n instanceof Float32Array)a=5126;else if(n instanceof Uint16Array)if(t.isFloat16BufferAttribute)if(i)a=5131;else throw Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else a=5123;else if(n instanceof Int16Array)a=5122;else if(n instanceof Uint32Array)a=5125;else if(n instanceof Int32Array)a=5124;else if(n instanceof Int8Array)a=5120;else if(n instanceof Uint8Array)a=5121;else if(n instanceof Uint8ClampedArray)a=5121;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+n);return{buffer:o,type:a,bytesPerElement:n.BYTES_PER_ELEMENT,version:t.version}}(t,a));else if(n.version<t.version){var s=n.buffer,o=t;let r=o.array,l=o.updateRange;e.bindBuffer(a,s),-1===l.count?e.bufferSubData(a,0,r):(i?e.bufferSubData(a,l.offset*r.BYTES_PER_ELEMENT,r,l.offset,l.count):e.bufferSubData(a,l.offset*r.BYTES_PER_ELEMENT,r.subarray(l.offset,l.offset+l.count)),l.count=-1),o.onUploadCallback(),n.version=t.version}}}}let PlaneGeometry=class PlaneGeometry extends BufferGeometry{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let a=e/2,n=t/2,s=Math.floor(i),o=Math.floor(r),l=s+1,h=o+1,c=e/s,u=t/o,d=[],p=[],f=[],m=[];for(let e=0;e<h;e++){let t=e*u-n;for(let i=0;i<l;i++){let r=i*c-a;p.push(r,-t,0),f.push(0,0,1),m.push(i/s),m.push(1-e/o)}}for(let e=0;e<o;e++)for(let t=0;t<s;t++){let i=t+l*e,r=t+l*(e+1),a=t+1+l*(e+1),n=t+1+l*e;d.push(i,r,n),d.push(r,a,n)}this.setIndex(d),this.setAttribute("position",new Float32BufferAttribute(p,3)),this.setAttribute("normal",new Float32BufferAttribute(f,3)),this.setAttribute("uv",new Float32BufferAttribute(m,2))}static fromJSON(e){return new PlaneGeometry(e.width,e.height,e.widthSegments,e.heightSegments)}};let tB={alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,begin_vertex:"vec3 transformed = vec3( position );",beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,encodings_fragment:"gl_FragColor = linearToOutputTexel( gl_FragColor );",encodings_pars_fragment:`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_fragment:`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,lights_physical_pars_fragment:`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,normal_fragment_maps:`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,output_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,uv_pars_fragment:`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,uv_pars_vertex:`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,uv_vertex:`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,uv2_pars_fragment:`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,uv2_pars_vertex:`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,uv2_vertex:`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,depth_vert:`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,distanceRGBA_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distanceRGBA_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`},tF={common:{diffuse:{value:new Color(0xffffff)},opacity:{value:1},map:{value:null},uvTransform:{value:new Matrix3},uv2Transform:{value:new Matrix3},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Vector2(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Color(0xffffff)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Color(0xffffff)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Matrix3}},sprite:{diffuse:{value:new Color(0xffffff)},opacity:{value:1},center:{value:new Vector2(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Matrix3}}},tk={basic:{uniforms:tA([tF.common,tF.specularmap,tF.envmap,tF.aomap,tF.lightmap,tF.fog]),vertexShader:tB.meshbasic_vert,fragmentShader:tB.meshbasic_frag},lambert:{uniforms:tA([tF.common,tF.specularmap,tF.envmap,tF.aomap,tF.lightmap,tF.emissivemap,tF.bumpmap,tF.normalmap,tF.displacementmap,tF.fog,tF.lights,{emissive:{value:new Color(0)}}]),vertexShader:tB.meshlambert_vert,fragmentShader:tB.meshlambert_frag},phong:{uniforms:tA([tF.common,tF.specularmap,tF.envmap,tF.aomap,tF.lightmap,tF.emissivemap,tF.bumpmap,tF.normalmap,tF.displacementmap,tF.fog,tF.lights,{emissive:{value:new Color(0)},specular:{value:new Color(1118481)},shininess:{value:30}}]),vertexShader:tB.meshphong_vert,fragmentShader:tB.meshphong_frag},standard:{uniforms:tA([tF.common,tF.envmap,tF.aomap,tF.lightmap,tF.emissivemap,tF.bumpmap,tF.normalmap,tF.displacementmap,tF.roughnessmap,tF.metalnessmap,tF.fog,tF.lights,{emissive:{value:new Color(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:tB.meshphysical_vert,fragmentShader:tB.meshphysical_frag},toon:{uniforms:tA([tF.common,tF.aomap,tF.lightmap,tF.emissivemap,tF.bumpmap,tF.normalmap,tF.displacementmap,tF.gradientmap,tF.fog,tF.lights,{emissive:{value:new Color(0)}}]),vertexShader:tB.meshtoon_vert,fragmentShader:tB.meshtoon_frag},matcap:{uniforms:tA([tF.common,tF.bumpmap,tF.normalmap,tF.displacementmap,tF.fog,{matcap:{value:null}}]),vertexShader:tB.meshmatcap_vert,fragmentShader:tB.meshmatcap_frag},points:{uniforms:tA([tF.points,tF.fog]),vertexShader:tB.points_vert,fragmentShader:tB.points_frag},dashed:{uniforms:tA([tF.common,tF.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:tB.linedashed_vert,fragmentShader:tB.linedashed_frag},depth:{uniforms:tA([tF.common,tF.displacementmap]),vertexShader:tB.depth_vert,fragmentShader:tB.depth_frag},normal:{uniforms:tA([tF.common,tF.bumpmap,tF.normalmap,tF.displacementmap,{opacity:{value:1}}]),vertexShader:tB.meshnormal_vert,fragmentShader:tB.meshnormal_frag},sprite:{uniforms:tA([tF.sprite,tF.fog]),vertexShader:tB.sprite_vert,fragmentShader:tB.sprite_frag},background:{uniforms:{uvTransform:{value:new Matrix3},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:tB.background_vert,fragmentShader:tB.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:tB.backgroundCube_vert,fragmentShader:tB.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:tB.cube_vert,fragmentShader:tB.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:tB.equirect_vert,fragmentShader:tB.equirect_frag},distanceRGBA:{uniforms:tA([tF.common,tF.displacementmap,{referencePosition:{value:new Vector3},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:tB.distanceRGBA_vert,fragmentShader:tB.distanceRGBA_frag},shadow:{uniforms:tA([tF.lights,tF.fog,{color:{value:new Color(0)},opacity:{value:1}}]),vertexShader:tB.shadow_vert,fragmentShader:tB.shadow_frag}};tk.physical={uniforms:tA([tk.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Vector2(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Color(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Vector2},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Color(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Color(1,1,1)},specularColorMap:{value:null}}]),vertexShader:tB.meshphysical_vert,fragmentShader:tB.meshphysical_frag};let tG={r:0,b:0,g:0};function tH(e,t,i,r,a,n,o){let l,h,c=new Color(0),u=+(!0!==n),d=null,p=0,f=null;function m(t,i){t.getRGB(tG,tC(e)),r.buffers.color.setClear(tG.r,tG.g,tG.b,i,o)}return{getClearColor:function(){return c},setClearColor:function(e,t=1){c.set(e),m(c,u=t)},getClearAlpha:function(){return u},setClearAlpha:function(e){m(c,u=e)},render:function(r,n){let o=!1,g=!0===n.isScene?n.background:null;g&&g.isTexture&&(g=(n.backgroundBlurriness>0?i:t).get(g));let v=e.xr,_=v.getSession&&v.getSession();_&&"additive"===_.environmentBlendMode&&(g=null),null===g?m(c,u):g&&g.isColor&&(m(g,1),o=!0),(e.autoClear||o)&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),g&&(g.isCubeTexture||306===g.mapping)?(void 0===h&&((h=new Mesh(new BoxGeometry(1,1,1),new ShaderMaterial({name:"BackgroundCubeMaterial",uniforms:tE(tk.backgroundCube.uniforms),vertexShader:tk.backgroundCube.vertexShader,fragmentShader:tk.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1}))).geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(e,t,i){this.matrixWorld.copyPosition(i.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(h)),h.material.uniforms.envMap.value=g,h.material.uniforms.flipEnvMap.value=g.isCubeTexture&&!1===g.isRenderTargetTexture?-1:1,h.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,h.material.toneMapped=g.encoding!==L,(d!==g||p!==g.version||f!==e.toneMapping)&&(h.material.needsUpdate=!0,d=g,p=g.version,f=e.toneMapping),h.layers.enableAll(),r.unshift(h,h.geometry,h.material,0,0,null)):g&&g.isTexture&&(void 0===l&&((l=new Mesh(new PlaneGeometry(2,2),new ShaderMaterial({name:"BackgroundMaterial",uniforms:tE(tk.background.uniforms),vertexShader:tk.background.vertexShader,fragmentShader:tk.background.fragmentShader,side:s,depthTest:!1,depthWrite:!1,fog:!1}))).geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(l)),l.material.uniforms.t2D.value=g,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.toneMapped=g.encoding!==L,!0===g.matrixAutoUpdate&&g.updateMatrix(),l.material.uniforms.uvTransform.value.copy(g.matrix),(d!==g||p!==g.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,d=g,p=g.version,f=e.toneMapping),l.layers.enableAll(),r.unshift(l,l.geometry,l.material,0,0,null))}}}function tW(e,t,i,r){let a=e.getParameter(34921),n=r.isWebGL2?null:t.get("OES_vertex_array_object"),s=r.isWebGL2||null!==n,o={},l=p(null),h=l,c=!1;function u(t){return r.isWebGL2?e.bindVertexArray(t):n.bindVertexArrayOES(t)}function d(t){return r.isWebGL2?e.deleteVertexArray(t):n.deleteVertexArrayOES(t)}function p(e){let t=[],i=[],r=[];for(let e=0;e<a;e++)t[e]=0,i[e]=0,r[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:i,attributeDivisors:r,object:e,attributes:{},index:null}}function f(){let e=h.newAttributes;for(let t=0,i=e.length;t<i;t++)e[t]=0}function m(e){g(e,0)}function g(i,a){let n=h.newAttributes,s=h.enabledAttributes,o=h.attributeDivisors;n[i]=1,0===s[i]&&(e.enableVertexAttribArray(i),s[i]=1),o[i]!==a&&((r.isWebGL2?e:t.get("ANGLE_instanced_arrays"))[r.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](i,a),o[i]=a)}function v(){let t=h.newAttributes,i=h.enabledAttributes;for(let r=0,a=i.length;r<a;r++)i[r]!==t[r]&&(e.disableVertexAttribArray(r),i[r]=0)}function _(t,i,a,n,s,o){!0===r.isWebGL2&&(5124===a||5125===a)?e.vertexAttribIPointer(t,i,a,s,o):e.vertexAttribPointer(t,i,a,n,s,o)}function x(){y(),c=!0,h!==l&&u((h=l).object)}function y(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:function(a,l,d,x,y){let M=!1;if(s){let t=function(t,i,a){let s=!0===a.wireframe,l=o[t.id];void 0===l&&(l={},o[t.id]=l);let h=l[i.id];void 0===h&&(h={},l[i.id]=h);let c=h[s];return void 0===c&&(c=p(r.isWebGL2?e.createVertexArray():n.createVertexArrayOES()),h[s]=c),c}(x,d,l);h!==t&&u((h=t).object),(M=function(e,t,i,r){let a=h.attributes,n=t.attributes,s=0,o=i.getAttributes();for(let t in o)if(o[t].location>=0){let i=a[t],r=n[t];if(void 0===r&&("instanceMatrix"===t&&e.instanceMatrix&&(r=e.instanceMatrix),"instanceColor"===t&&e.instanceColor&&(r=e.instanceColor)),void 0===i||i.attribute!==r||r&&i.data!==r.data)return!0;s++}return h.attributesNum!==s||h.index!==r}(a,x,d,y))&&function(e,t,i,r){let a={},n=t.attributes,s=0,o=i.getAttributes();for(let t in o)if(o[t].location>=0){let i=n[t];void 0===i&&("instanceMatrix"===t&&e.instanceMatrix&&(i=e.instanceMatrix),"instanceColor"===t&&e.instanceColor&&(i=e.instanceColor));let r={};r.attribute=i,i&&i.data&&(r.data=i.data),a[t]=r,s++}h.attributes=a,h.attributesNum=s,h.index=r}(a,x,d,y)}else{let e=!0===l.wireframe;(h.geometry!==x.id||h.program!==d.id||h.wireframe!==e)&&(h.geometry=x.id,h.program=d.id,h.wireframe=e,M=!0)}null!==y&&i.update(y,34963),(M||c)&&(c=!1,function(a,n,s,o){if(!1===r.isWebGL2&&(a.isInstancedMesh||o.isInstancedBufferGeometry)&&null===t.get("ANGLE_instanced_arrays"))return;f();let l=o.attributes,h=s.getAttributes(),c=n.defaultAttributeValues;for(let t in h){let r=h[t];if(r.location>=0){let n=l[t];if(void 0===n&&("instanceMatrix"===t&&a.instanceMatrix&&(n=a.instanceMatrix),"instanceColor"===t&&a.instanceColor&&(n=a.instanceColor)),void 0!==n){let t=n.normalized,s=n.itemSize,l=i.get(n);if(void 0===l)continue;let h=l.buffer,c=l.type,u=l.bytesPerElement;if(n.isInterleavedBufferAttribute){let i=n.data,l=i.stride,d=n.offset;if(i.isInstancedInterleavedBuffer){for(let e=0;e<r.locationSize;e++)g(r.location+e,i.meshPerAttribute);!0!==a.isInstancedMesh&&void 0===o._maxInstanceCount&&(o._maxInstanceCount=i.meshPerAttribute*i.count)}else for(let e=0;e<r.locationSize;e++)m(r.location+e);e.bindBuffer(34962,h);for(let e=0;e<r.locationSize;e++)_(r.location+e,s/r.locationSize,c,t,l*u,(d+s/r.locationSize*e)*u)}else{if(n.isInstancedBufferAttribute){for(let e=0;e<r.locationSize;e++)g(r.location+e,n.meshPerAttribute);!0!==a.isInstancedMesh&&void 0===o._maxInstanceCount&&(o._maxInstanceCount=n.meshPerAttribute*n.count)}else for(let e=0;e<r.locationSize;e++)m(r.location+e);e.bindBuffer(34962,h);for(let e=0;e<r.locationSize;e++)_(r.location+e,s/r.locationSize,c,t,s*u,s/r.locationSize*e*u)}}else if(void 0!==c){let i=c[t];if(void 0!==i)switch(i.length){case 2:e.vertexAttrib2fv(r.location,i);break;case 3:e.vertexAttrib3fv(r.location,i);break;case 4:e.vertexAttrib4fv(r.location,i);break;default:e.vertexAttrib1fv(r.location,i)}}}}v()}(a,l,d,x),null!==y&&e.bindBuffer(34963,i.get(y).buffer))},reset:x,resetDefaultState:y,dispose:function(){for(let e in x(),o){let t=o[e];for(let e in t){let i=t[e];for(let e in i)d(i[e].object),delete i[e];delete t[e]}delete o[e]}},releaseStatesOfGeometry:function(e){if(void 0===o[e.id])return;let t=o[e.id];for(let e in t){let i=t[e];for(let e in i)d(i[e].object),delete i[e];delete t[e]}delete o[e.id]},releaseStatesOfProgram:function(e){for(let t in o){let i=o[t];if(void 0===i[e.id])continue;let r=i[e.id];for(let e in r)d(r[e].object),delete r[e];delete i[e.id]}},initAttributes:f,enableAttribute:m,disableUnusedAttributes:v}}function tj(e,t,i,r){let a,n=r.isWebGL2;this.setMode=function(e){a=e},this.render=function(t,r){e.drawArrays(a,t,r),i.update(r,a,1)},this.renderInstances=function(r,s,o){let l,h;if(0!==o){if(n)l=e,h="drawArraysInstanced";else if(l=t.get("ANGLE_instanced_arrays"),h="drawArraysInstancedANGLE",null===l)return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");l[h](a,r,s,o),i.update(s,a,o)}}}function tX(e,t,i){let r;function a(t){if("highp"===t){if(e.getShaderPrecisionFormat(35633,36338).precision>0&&e.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";t="mediump"}return"mediump"===t&&e.getShaderPrecisionFormat(35633,36337).precision>0&&e.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}let n="undefined"!=typeof WebGL2RenderingContext&&e instanceof WebGL2RenderingContext||"undefined"!=typeof WebGL2ComputeRenderingContext&&e instanceof WebGL2ComputeRenderingContext,s=void 0!==i.precision?i.precision:"highp",o=a(s);o!==s&&(console.warn("THREE.WebGLRenderer:",s,"not supported, using",o,"instead."),s=o);let l=n||t.has("WEBGL_draw_buffers"),h=!0===i.logarithmicDepthBuffer,c=e.getParameter(34930),u=e.getParameter(35660),d=e.getParameter(3379),p=e.getParameter(34076),f=e.getParameter(34921),m=e.getParameter(36347),g=e.getParameter(36348),v=e.getParameter(36349),_=u>0,x=n||t.has("OES_texture_float"),y=n?e.getParameter(36183):0;return{isWebGL2:n,drawBuffers:l,getMaxAnisotropy:function(){if(void 0!==r)return r;if(!0===t.has("EXT_texture_filter_anisotropic")){let i=t.get("EXT_texture_filter_anisotropic");r=e.getParameter(i.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r},getMaxPrecision:a,precision:s,logarithmicDepthBuffer:h,maxTextures:c,maxVertexTextures:u,maxTextureSize:d,maxCubemapSize:p,maxAttributes:f,maxVertexUniforms:m,maxVaryings:g,maxFragmentUniforms:v,vertexTextures:_,floatFragmentTextures:x,floatVertexTextures:_&&x,maxSamples:y}}function tq(e){let t=this,i=null,r=0,a=!1,n=!1,s=new Plane,o=new Matrix3,l={value:null,needsUpdate:!1};function h(){l.value!==i&&(l.value=i,l.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function c(e,i,r,a){let n=null!==e?e.length:0,h=null;if(0!==n){if(h=l.value,!0!==a||null===h){let t=r+4*n,a=i.matrixWorldInverse;o.getNormalMatrix(a),(null===h||h.length<t)&&(h=new Float32Array(t));for(let t=0,i=r;t!==n;++t,i+=4)s.copy(e[t]).applyMatrix4(a,o),s.normal.toArray(h,i),h[i+3]=s.constant}l.value=h,l.needsUpdate=!0}return t.numPlanes=n,t.numIntersection=0,h}this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t,n){let s=0!==e.length||t||0!==r||a;return a=t,i=c(e,n,0),r=e.length,s},this.beginShadows=function(){n=!0,c(null)},this.endShadows=function(){n=!1,h()},this.setState=function(t,s,o){let u=t.clippingPlanes,d=t.clipIntersection,p=t.clipShadows,f=e.get(t);if(a&&null!==u&&0!==u.length&&(!n||p)){let e=n?0:r,t=4*e,a=f.clippingState||null;l.value=a,a=c(u,s,t,o);for(let e=0;e!==t;++e)a[e]=i[e];f.clippingState=a,this.numIntersection=d?this.numPlanes:0,this.numPlanes+=e}else n?c(null):h()}}function tY(e){let t=new WeakMap;function i(e,t){return 303===t?e.mapping=301:304===t&&(e.mapping=302),e}function r(e){let i=e.target;i.removeEventListener("dispose",r);let a=t.get(i);void 0!==a&&(t.delete(i),a.dispose())}return{get:function(a){if(a&&a.isTexture&&!1===a.isRenderTargetTexture){let n=a.mapping;if(303===n||304===n)if(t.has(a))return i(t.get(a).texture,a.mapping);else{let n=a.image;if(!n||!(n.height>0))return null;{let s=new WebGLCubeRenderTarget(n.height/2);return s.fromEquirectangularTexture(e,a),t.set(a,s),a.addEventListener("dispose",r),i(s.texture,a.mapping)}}}return a},dispose:function(){t=new WeakMap}}}let OrthographicCamera=class OrthographicCamera extends Camera{constructor(e=-1,t=1,i=1,r=-1,a=.1,n=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=a,this.far=n,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=null===e.view?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,a,n){null===this.view&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=n,this.updateProjectionMatrix()}clearViewOffset(){null!==this.view&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,a=i-e,n=i+e,s=r+t,o=r-t;if(null!==this.view&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=e*this.view.offsetX,n=a+e*this.view.width,s-=t*this.view.offsetY,o=s-t*this.view.height}this.projectionMatrix.makeOrthographic(a,n,s,o,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,null!==this.view&&(t.object.view=Object.assign({},this.view)),t}};let tK=[.125,.215,.35,.446,.526,.582],tJ=new OrthographicCamera,tZ=new Color,tQ=null,t$=(1+Math.sqrt(5))/2,t0=1/t$,t1=[new Vector3(1,1,1),new Vector3(-1,1,1),new Vector3(1,1,-1),new Vector3(-1,1,-1),new Vector3(0,t$,t0),new Vector3(0,t$,-t0),new Vector3(t0,0,t$),new Vector3(-t0,0,t$),new Vector3(t$,t0,0),new Vector3(-t$,t0,0)];let PMREMGenerator=class PMREMGenerator{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){tQ=this._renderer.getRenderTarget(),this._setSize(256);let a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,i,r,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){null===this._cubemapMaterial&&(this._cubemapMaterial=t5(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){null===this._equirectMaterial&&(this._equirectMaterial=t4(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),null!==this._cubemapMaterial&&this._cubemapMaterial.dispose(),null!==this._equirectMaterial&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){null!==this._blurMaterial&&this._blurMaterial.dispose(),null!==this._pingPongRenderTarget&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(tQ),e.scissorTest=!1,t2(e,0,0,e.width,e.height)}_fromTexture(e,t){301===e.mapping||302===e.mapping?this._setSize(0===e.image.length?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),tQ=this._renderer.getRenderTarget();let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:M,minFilter:M,generateMipmaps:!1,type:1016,format:1023,encoding:C,depthBuffer:!1},r=t3(e,t,i);if(null===this._pingPongRenderTarget||this._pingPongRenderTarget.width!==e){var a;null!==this._pingPongRenderTarget&&this._dispose(),this._pingPongRenderTarget=t3(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=function(e){let t=[],i=[],r=[],a=e,n=e-4+1+tK.length;for(let s=0;s<n;s++){let n=Math.pow(2,a);i.push(n);let o=1/n;s>e-4?o=tK[s-e+4-1]:0===s&&(o=0),r.push(o);let l=1/(n-2),h=-l,c=1+l,u=[h,h,c,h,c,c,h,h,c,c,h,c],d=new Float32Array(108),p=new Float32Array(72),f=new Float32Array(36);for(let e=0;e<6;e++){let t=e%3*2/3-1,i=e>2?0:-1,r=[t,i,0,t+2/3,i,0,t+2/3,i+1,0,t,i,0,t+2/3,i+1,0,t,i+1,0];d.set(r,18*e),p.set(u,12*e);let a=[e,e,e,e,e,e];f.set(a,6*e)}let m=new BufferGeometry;m.setAttribute("position",new BufferAttribute(d,3)),m.setAttribute("uv",new BufferAttribute(p,2)),m.setAttribute("faceIndex",new BufferAttribute(f,1)),t.push(m),a>4&&a--}return{lodPlanes:t,sizeLods:i,sigmas:r}}(r)),this._blurMaterial=(a=r,new ShaderMaterial({name:"SphericalGaussianBlur",defines:{n:20,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:new Float32Array(20)},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:new Vector3(0,1,0)}},vertexShader:t6(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:0,depthTest:!1,depthWrite:!1}))}return r}_compileMaterial(e){let t=new Mesh(this._lodPlanes[0],e);this._renderer.compile(t,tJ)}_sceneToCubeUV(e,t,i,r){let a=new PerspectiveCamera(90,1,t,i),n=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],o=this._renderer,l=o.autoClear,h=o.toneMapping;o.getClearColor(tZ),o.toneMapping=0,o.autoClear=!1;let c=new MeshBasicMaterial({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1}),u=new Mesh(new BoxGeometry,c),d=!1,p=e.background;p?p.isColor&&(c.color.copy(p),e.background=null,d=!0):(c.color.copy(tZ),d=!0);for(let t=0;t<6;t++){let i=t%3;0===i?(a.up.set(0,n[t],0),a.lookAt(s[t],0,0)):1===i?(a.up.set(0,0,n[t]),a.lookAt(0,s[t],0)):(a.up.set(0,n[t],0),a.lookAt(0,0,s[t]));let l=this._cubeSize;t2(r,i*l,t>2?l:0,l,l),o.setRenderTarget(r),d&&o.render(u,a),o.render(e,a)}u.geometry.dispose(),u.material.dispose(),o.toneMapping=h,o.autoClear=l,e.background=p}_textureToCubeUV(e,t){let i=this._renderer,r=301===e.mapping||302===e.mapping;r?(null===this._cubemapMaterial&&(this._cubemapMaterial=t5()),this._cubemapMaterial.uniforms.flipEnvMap.value=!1===e.isRenderTargetTexture?-1:1):null===this._equirectMaterial&&(this._equirectMaterial=t4());let a=r?this._cubemapMaterial:this._equirectMaterial,n=new Mesh(this._lodPlanes[0],a);a.uniforms.envMap.value=e;let s=this._cubeSize;t2(t,0,0,3*s,2*s),i.setRenderTarget(t),i.render(n,tJ)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let t=1;t<this._lodPlanes.length;t++){let i=Math.sqrt(this._sigmas[t]*this._sigmas[t]-this._sigmas[t-1]*this._sigmas[t-1]),r=t1[(t-1)%t1.length];this._blur(e,t-1,t,i,r)}t.autoClear=i}_blur(e,t,i,r,a){let n=this._pingPongRenderTarget;this._halfBlur(e,n,t,i,r,"latitudinal",a),this._halfBlur(n,e,i,i,r,"longitudinal",a)}_halfBlur(e,t,i,r,a,n,s){let o=this._renderer,l=this._blurMaterial;"latitudinal"!==n&&"longitudinal"!==n&&console.error("blur direction must be either latitudinal or longitudinal!");let h=new Mesh(this._lodPlanes[r],l),c=l.uniforms,u=this._sizeLods[i]-1,d=isFinite(a)?Math.PI/(2*u):2*Math.PI/39,p=a/d,f=isFinite(a)?1+Math.floor(3*p):20;f>20&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${f} samples when the maximum is set to 20`);let m=[],g=0;for(let e=0;e<20;++e){let t=e/p,i=Math.exp(-t*t/2);m.push(i),0===e?g+=i:e<f&&(g+=2*i)}for(let e=0;e<m.length;e++)m[e]=m[e]/g;c.envMap.value=e.texture,c.samples.value=f,c.weights.value=m,c.latitudinal.value="latitudinal"===n,s&&(c.poleAxis.value=s);let{_lodMax:v}=this;c.dTheta.value=d,c.mipInt.value=v-i;let _=this._sizeLods[r],x=4*(this._cubeSize-_);t2(t,3*_*(r>v-4?r-v+4:0),x,3*_,2*_),o.setRenderTarget(t),o.render(h,tJ)}};function t3(e,t,i){let r=new WebGLRenderTarget(e,t,i);return r.texture.mapping=306,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function t2(e,t,i,r,a){e.viewport.set(t,i,r,a),e.scissor.set(t,i,r,a)}function t4(){return new ShaderMaterial({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:t6(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function t5(){return new ShaderMaterial({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:t6(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function t6(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function t8(e){let t=new WeakMap,i=null;function r(e){let i=e.target;i.removeEventListener("dispose",r);let a=t.get(i);void 0!==a&&(t.delete(i),a.dispose())}return{get:function(a){if(a&&a.isTexture){let n=a.mapping,s=303===n||304===n,o=301===n||302===n;if(s||o)if(a.isRenderTargetTexture&&!0===a.needsPMREMUpdate){a.needsPMREMUpdate=!1;let r=t.get(a);return null===i&&(i=new PMREMGenerator(e)),r=s?i.fromEquirectangular(a,r):i.fromCubemap(a,r),t.set(a,r),r.texture}else{if(t.has(a))return t.get(a).texture;let n=a.image;if(!(s&&n&&n.height>0||o&&n&&function(e){let t=0;for(let i=0;i<6;i++)void 0!==e[i]&&t++;return 6===t}(n)))return null;{null===i&&(i=new PMREMGenerator(e));let n=s?i.fromEquirectangular(a):i.fromCubemap(a);return t.set(a,n),a.addEventListener("dispose",r),n.texture}}}return a},dispose:function(){t=new WeakMap,null!==i&&(i.dispose(),i=null)}}}function t9(e){let t={};function i(i){let r;if(void 0!==t[i])return t[i];switch(i){case"WEBGL_depth_texture":r=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=e.getExtension(i)}return t[i]=r,r}return{has:function(e){return null!==i(e)},init:function(e){e.isWebGL2?i("EXT_color_buffer_float"):(i("WEBGL_depth_texture"),i("OES_texture_float"),i("OES_texture_half_float"),i("OES_texture_half_float_linear"),i("OES_standard_derivatives"),i("OES_element_index_uint"),i("OES_vertex_array_object"),i("ANGLE_instanced_arrays")),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture")},get:function(e){let t=i(e);return null===t&&console.warn("THREE.WebGLRenderer: "+e+" extension not supported."),t}}}function t7(e,t,i,r){let a={},n=new WeakMap;function s(e){let o=e.target;for(let e in null!==o.index&&t.remove(o.index),o.attributes)t.remove(o.attributes[e]);o.removeEventListener("dispose",s),delete a[o.id];let l=n.get(o);l&&(t.remove(l),n.delete(o)),r.releaseStatesOfGeometry(o),!0===o.isInstancedBufferGeometry&&delete o._maxInstanceCount,i.memory.geometries--}function o(e){let i=[],r=e.index,a=e.attributes.position,s=0;if(null!==r){let e=r.array;s=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],a=e[t+1],n=e[t+2];i.push(r,a,a,n,n,r)}}else{let e=a.array;s=a.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,a=t+2;i.push(e,r,r,a,a,e)}}let o=new(Y(i)?Uint32BufferAttribute:Uint16BufferAttribute)(i,1);o.version=s;let l=n.get(e);l&&t.remove(l),n.set(e,o)}return{get:function(e,t){return!0===a[t.id]||(t.addEventListener("dispose",s),a[t.id]=!0,i.memory.geometries++),t},update:function(e){let i=e.attributes;for(let e in i)t.update(i[e],34962);let r=e.morphAttributes;for(let e in r){let i=r[e];for(let e=0,r=i.length;e<r;e++)t.update(i[e],34962)}},getWireframeAttribute:function(e){let t=n.get(e);if(t){let i=e.index;null!==i&&t.version<i.version&&o(e)}else o(e);return n.get(e)}}}function ie(e,t,i,r){let a,n,s,o=r.isWebGL2;this.setMode=function(e){a=e},this.setIndex=function(e){n=e.type,s=e.bytesPerElement},this.render=function(t,r){e.drawElements(a,r,n,t*s),i.update(r,a,1)},this.renderInstances=function(r,l,h){let c,u;if(0!==h){if(o)c=e,u="drawElementsInstanced";else if(c=t.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",null===c)return void console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");c[u](a,l,n,r*s,h),i.update(l,a,h)}}}function it(e){let t={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:t,programs:null,autoReset:!0,reset:function(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0},update:function(e,i,r){switch(t.calls++,i){case 4:t.triangles+=e/3*r;break;case 1:t.lines+=e/2*r;break;case 3:t.lines+=r*(e-1);break;case 2:t.lines+=r*e;break;case 0:t.points+=r*e;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",i)}}}}function ii(e,t){return e[0]-t[0]}function ir(e,t){return Math.abs(t[1])-Math.abs(e[1])}function ia(e,t,i){let r={},a=new Float32Array(8),n=new WeakMap,s=new Vector4,o=[];for(let e=0;e<8;e++)o[e]=[e,0];return{update:function(l,h,c,u){let d=l.morphTargetInfluences;if(!0===t.isWebGL2){let r=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,a=void 0!==r?r.length:0,o=n.get(h);if(void 0===o||o.count!==a){void 0!==o&&o.texture.dispose();let e=void 0!==h.morphAttributes.position,i=void 0!==h.morphAttributes.normal,r=void 0!==h.morphAttributes.color,l=h.morphAttributes.position||[],c=h.morphAttributes.normal||[],u=h.morphAttributes.color||[],d=0;!0===e&&(d=1),!0===i&&(d=2),!0===r&&(d=3);let p=h.attributes.position.count*d,f=1;p>t.maxTextureSize&&(f=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let m=new Float32Array(p*f*4*a),g=new DataArrayTexture(m,p,f,a);g.type=1015,g.needsUpdate=!0;let v=4*d;for(let t=0;t<a;t++){let a=l[t],n=c[t],o=u[t],h=p*f*4*t;for(let t=0;t<a.count;t++){let l=t*v;!0===e&&(s.fromBufferAttribute(a,t),m[h+l+0]=s.x,m[h+l+1]=s.y,m[h+l+2]=s.z,m[h+l+3]=0),!0===i&&(s.fromBufferAttribute(n,t),m[h+l+4]=s.x,m[h+l+5]=s.y,m[h+l+6]=s.z,m[h+l+7]=0),!0===r&&(s.fromBufferAttribute(o,t),m[h+l+8]=s.x,m[h+l+9]=s.y,m[h+l+10]=s.z,m[h+l+11]=4===o.itemSize?s.w:1)}}o={count:a,texture:g,size:new Vector2(p,f)},n.set(h,o),h.addEventListener("dispose",function e(){g.dispose(),n.delete(h),h.removeEventListener("dispose",e)})}let l=0;for(let e=0;e<d.length;e++)l+=d[e];let c=h.morphTargetsRelative?1:1-l;u.getUniforms().setValue(e,"morphTargetBaseInfluence",c),u.getUniforms().setValue(e,"morphTargetInfluences",d),u.getUniforms().setValue(e,"morphTargetsTexture",o.texture,i),u.getUniforms().setValue(e,"morphTargetsTextureSize",o.size)}else{let t=void 0===d?0:d.length,i=r[h.id];if(void 0===i||i.length!==t){i=[];for(let e=0;e<t;e++)i[e]=[e,0];r[h.id]=i}for(let e=0;e<t;e++){let t=i[e];t[0]=e,t[1]=d[e]}i.sort(ir);for(let e=0;e<8;e++)e<t&&i[e][1]?(o[e][0]=i[e][0],o[e][1]=i[e][1]):(o[e][0]=Number.MAX_SAFE_INTEGER,o[e][1]=0);o.sort(ii);let n=h.morphAttributes.position,s=h.morphAttributes.normal,l=0;for(let e=0;e<8;e++){let t=o[e],i=t[0],r=t[1];i!==Number.MAX_SAFE_INTEGER&&r?(n&&h.getAttribute("morphTarget"+e)!==n[i]&&h.setAttribute("morphTarget"+e,n[i]),s&&h.getAttribute("morphNormal"+e)!==s[i]&&h.setAttribute("morphNormal"+e,s[i]),a[e]=r,l+=r):(n&&!0===h.hasAttribute("morphTarget"+e)&&h.deleteAttribute("morphTarget"+e),s&&!0===h.hasAttribute("morphNormal"+e)&&h.deleteAttribute("morphNormal"+e),a[e]=0)}let c=h.morphTargetsRelative?1:1-l;u.getUniforms().setValue(e,"morphTargetBaseInfluence",c),u.getUniforms().setValue(e,"morphTargetInfluences",a)}}}}function is(e,t,i,r){let a=new WeakMap;function n(e){let t=e.target;t.removeEventListener("dispose",n),i.remove(t.instanceMatrix),null!==t.instanceColor&&i.remove(t.instanceColor)}return{update:function(e){let s=r.render.frame,o=e.geometry,l=t.get(e,o);return a.get(l)!==s&&(t.update(l),a.set(l,s)),e.isInstancedMesh&&(!1===e.hasEventListener("dispose",n)&&e.addEventListener("dispose",n),i.update(e.instanceMatrix,34962),null!==e.instanceColor&&i.update(e.instanceColor,34962)),l},dispose:function(){a=new WeakMap}}}let io=new Texture,il=new DataArrayTexture,ih=new Data3DTexture,ic=new CubeTexture,iu=[],id=[],ip=new Float32Array(16),im=new Float32Array(9),ig=new Float32Array(4);function iv(e,t,i){let r=e[0];if(r<=0||r>0)return e;let a=t*i,n=iu[a];if(void 0===n&&(n=new Float32Array(a),iu[a]=n),0!==t){r.toArray(n,0);for(let r=1,a=0;r!==t;++r)a+=i,e[r].toArray(n,a)}return n}function i_(e,t){if(e.length!==t.length)return!1;for(let i=0,r=e.length;i<r;i++)if(e[i]!==t[i])return!1;return!0}function ix(e,t){for(let i=0,r=t.length;i<r;i++)e[i]=t[i]}function iy(e,t){let i=id[t];void 0===i&&(i=new Int32Array(t),id[t]=i);for(let r=0;r!==t;++r)i[r]=e.allocateTextureUnit();return i}function iM(e,t){let i=this.cache;i[0]!==t&&(e.uniform1f(this.addr,t),i[0]=t)}function ib(e,t){let i=this.cache;if(void 0!==t.x)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(i_(i,t))return;e.uniform2fv(this.addr,t),ix(i,t)}}function iS(e,t){let i=this.cache;if(void 0!==t.x)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(void 0!==t.r)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(i_(i,t))return;e.uniform3fv(this.addr,t),ix(i,t)}}function iT(e,t){let i=this.cache;if(void 0!==t.x)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(i_(i,t))return;e.uniform4fv(this.addr,t),ix(i,t)}}function iw(e,t){let i=this.cache,r=t.elements;if(void 0===r){if(i_(i,t))return;e.uniformMatrix2fv(this.addr,!1,t),ix(i,t)}else{if(i_(i,r))return;ig.set(r),e.uniformMatrix2fv(this.addr,!1,ig),ix(i,r)}}function iE(e,t){let i=this.cache,r=t.elements;if(void 0===r){if(i_(i,t))return;e.uniformMatrix3fv(this.addr,!1,t),ix(i,t)}else{if(i_(i,r))return;im.set(r),e.uniformMatrix3fv(this.addr,!1,im),ix(i,r)}}function iA(e,t){let i=this.cache,r=t.elements;if(void 0===r){if(i_(i,t))return;e.uniformMatrix4fv(this.addr,!1,t),ix(i,t)}else{if(i_(i,r))return;ip.set(r),e.uniformMatrix4fv(this.addr,!1,ip),ix(i,r)}}function iC(e,t){let i=this.cache;i[0]!==t&&(e.uniform1i(this.addr,t),i[0]=t)}function iL(e,t){let i=this.cache;if(void 0!==t.x)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(i_(i,t))return;e.uniform2iv(this.addr,t),ix(i,t)}}function iR(e,t){let i=this.cache;if(void 0!==t.x)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(i_(i,t))return;e.uniform3iv(this.addr,t),ix(i,t)}}function iP(e,t){let i=this.cache;if(void 0!==t.x)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(i_(i,t))return;e.uniform4iv(this.addr,t),ix(i,t)}}function iD(e,t){let i=this.cache;i[0]!==t&&(e.uniform1ui(this.addr,t),i[0]=t)}function iI(e,t){let i=this.cache;if(void 0!==t.x)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(i_(i,t))return;e.uniform2uiv(this.addr,t),ix(i,t)}}function iN(e,t){let i=this.cache;if(void 0!==t.x)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(i_(i,t))return;e.uniform3uiv(this.addr,t),ix(i,t)}}function iO(e,t){let i=this.cache;if(void 0!==t.x)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(i_(i,t))return;e.uniform4uiv(this.addr,t),ix(i,t)}}function iU(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a),i.setTexture2D(t||io,a)}function iV(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a),i.setTexture3D(t||ih,a)}function iz(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a),i.setTextureCube(t||ic,a)}function iB(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a),i.setTexture2DArray(t||il,a)}function iF(e,t){e.uniform1fv(this.addr,t)}function ik(e,t){let i=iv(t,this.size,2);e.uniform2fv(this.addr,i)}function iG(e,t){let i=iv(t,this.size,3);e.uniform3fv(this.addr,i)}function iH(e,t){let i=iv(t,this.size,4);e.uniform4fv(this.addr,i)}function iW(e,t){let i=iv(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,i)}function ij(e,t){let i=iv(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,i)}function iX(e,t){let i=iv(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,i)}function iq(e,t){e.uniform1iv(this.addr,t)}function iY(e,t){e.uniform2iv(this.addr,t)}function iK(e,t){e.uniform3iv(this.addr,t)}function iJ(e,t){e.uniform4iv(this.addr,t)}function iZ(e,t){e.uniform1uiv(this.addr,t)}function iQ(e,t){e.uniform2uiv(this.addr,t)}function i$(e,t){e.uniform3uiv(this.addr,t)}function i0(e,t){e.uniform4uiv(this.addr,t)}function i1(e,t,i){let r=this.cache,a=t.length,n=iy(i,a);i_(r,n)||(e.uniform1iv(this.addr,n),ix(r,n));for(let e=0;e!==a;++e)i.setTexture2D(t[e]||io,n[e])}function i3(e,t,i){let r=this.cache,a=t.length,n=iy(i,a);i_(r,n)||(e.uniform1iv(this.addr,n),ix(r,n));for(let e=0;e!==a;++e)i.setTexture3D(t[e]||ih,n[e])}function i2(e,t,i){let r=this.cache,a=t.length,n=iy(i,a);i_(r,n)||(e.uniform1iv(this.addr,n),ix(r,n));for(let e=0;e!==a;++e)i.setTextureCube(t[e]||ic,n[e])}function i4(e,t,i){let r=this.cache,a=t.length,n=iy(i,a);i_(r,n)||(e.uniform1iv(this.addr,n),ix(r,n));for(let e=0;e!==a;++e)i.setTexture2DArray(t[e]||il,n[e])}let SingleUniform=class SingleUniform{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=function(e){switch(e){case 5126:return iM;case 35664:return ib;case 35665:return iS;case 35666:return iT;case 35674:return iw;case 35675:return iE;case 35676:return iA;case 5124:case 35670:return iC;case 35667:case 35671:return iL;case 35668:case 35672:return iR;case 35669:case 35673:return iP;case 5125:return iD;case 36294:return iI;case 36295:return iN;case 36296:return iO;case 35678:case 36198:case 36298:case 36306:case 35682:return iU;case 35679:case 36299:case 36307:return iV;case 35680:case 36300:case 36308:case 36293:return iz;case 36289:case 36303:case 36311:case 36292:return iB}}(t.type)}};let PureArrayUniform=class PureArrayUniform{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=function(e){switch(e){case 5126:return iF;case 35664:return ik;case 35665:return iG;case 35666:return iH;case 35674:return iW;case 35675:return ij;case 35676:return iX;case 5124:case 35670:return iq;case 35667:case 35671:return iY;case 35668:case 35672:return iK;case 35669:case 35673:return iJ;case 5125:return iZ;case 36294:return iQ;case 36295:return i$;case 36296:return i0;case 35678:case 36198:case 36298:case 36306:case 35682:return i1;case 35679:case 36299:case 36307:return i3;case 35680:case 36300:case 36308:case 36293:return i2;case 36289:case 36303:case 36311:case 36292:return i4}}(t.type)}};let StructuredUniform=class StructuredUniform{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let a=0,n=r.length;a!==n;++a){let n=r[a];n.setValue(e,t[n.id],i)}}};let i5=/(\w+)(\])?(\[|\.)?/g;function i6(e,t){e.seq.push(t),e.map[t.id]=t}let WebGLUniforms=class WebGLUniforms{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,35718);for(let r=0;r<i;++r){let i=e.getActiveUniform(t,r),a=e.getUniformLocation(t,i.name);!function(e,t,i){let r=e.name,a=r.length;for(i5.lastIndex=0;;){let n=i5.exec(r),s=i5.lastIndex,o=n[1],l="]"===n[2],h=n[3];if(l&&(o|=0),void 0===h||"["===h&&s+2===a){i6(i,void 0===h?new SingleUniform(o,e,t):new PureArrayUniform(o,e,t));break}{let e=i.map[o];void 0===e&&i6(i,e=new StructuredUniform(o)),i=e}}}(i,a,this)}}setValue(e,t,i,r){let a=this.map[t];void 0!==a&&a.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];void 0!==r&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let a=0,n=t.length;a!==n;++a){let n=t[a],s=i[n.id];!1!==s.needsUpdate&&n.setValue(e,s.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,a=e.length;r!==a;++r){let a=e[r];a.id in t&&i.push(a)}return i}};function i8(e,t,i){let r=e.createShader(t);return e.shaderSource(r,i),e.compileShader(r),r}let i9=0;function i7(e,t,i){let r=e.getShaderParameter(t,35713),a=e.getShaderInfoLog(t).trim();if(r&&""===a)return"";let n=/ERROR: 0:(\d+)/.exec(a);if(!n)return a;{let r=parseInt(n[1]);return i.toUpperCase()+`

`+a+`

`+function(e,t){let i=e.split(`
`),r=[],a=Math.max(t-6,0),n=Math.min(t+6,i.length);for(let e=a;e<n;e++){let a=e+1;r.push(`${a===t?">":" "} ${a}: ${i[e]}`)}return r.join(`
`)}(e.getShaderSource(t),r)}}function re(e){return""!==e}function rt(e,t){let i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ri(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}let rr=/^[ \t]*#include +<([\w\d./]+)>/gm;function ra(e){return e.replace(rr,rn)}function rn(e,t){let i=tB[t];if(void 0===i)throw Error("Can not resolve #include <"+t+">");return ra(i)}let rs=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ro(e){return e.replace(rs,rl)}function rl(e,t,i,r){let a="";for(let e=parseInt(t);e<parseInt(i);e++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+e+" ]").replace(/UNROLLED_LOOP_INDEX/g,e);return a}function rh(e){let t="precision "+e.precision+` float;
precision `+e.precision+" int;";return"highp"===e.precision?t+=`
#define HIGH_PRECISION`:"mediump"===e.precision?t+=`
#define MEDIUM_PRECISION`:"lowp"===e.precision&&(t+=`
#define LOW_PRECISION`),t}function rc(e,t,i,r){let a,n,s,o,l,h,c=e.getContext(),u=i.defines,d=i.vertexShader,p=i.fragmentShader,m=(l="SHADOWMAP_TYPE_BASIC",1===i.shadowMapType?l="SHADOWMAP_TYPE_PCF":2===i.shadowMapType?l="SHADOWMAP_TYPE_PCF_SOFT":3===i.shadowMapType&&(l="SHADOWMAP_TYPE_VSM"),l),g=function(e){let t="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case 301:case 302:t="ENVMAP_TYPE_CUBE";break;case 306:t="ENVMAP_TYPE_CUBE_UV"}return t}(i),v=(h="ENVMAP_MODE_REFLECTION",i.envMap&&302===i.envMapMode&&(h="ENVMAP_MODE_REFRACTION"),h),_=function(e){let t="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case 0:t="ENVMAP_BLENDING_MULTIPLY";break;case 1:t="ENVMAP_BLENDING_MIX";break;case 2:t="ENVMAP_BLENDING_ADD"}return t}(i),x=function(e){let t=e.envMapCubeUVHeight;if(null===t)return null;let i=Math.log2(t)-2;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:1/t,maxMip:i}}(i),y=i.isWebGL2?"":[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.tangentSpaceNormalMap||i.clearcoatNormalMap||i.flatShading||"physical"===i.shaderID?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(re).join(`
`),M=function(e){let t=[];for(let i in e){let r=e[i];!1!==r&&t.push("#define "+i+" "+r)}return t.join(`
`)}(u),b=c.createProgram(),S=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?((a=[M].filter(re).join(`
`)).length>0&&(a+=`
`),(n=[y,M].filter(re).join(`
`)).length>0&&(n+=`
`)):(a=[rh(i),"#define SHADER_NAME "+i.shaderName,M,i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.supportsVertexTextures?"#define VERTEX_TEXTURES":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMap&&i.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",i.normalMap&&i.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.displacementMap&&i.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",i.specularColorMap?"#define USE_SPECULARCOLORMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEENCOLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",i.vertexTangents?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUvs?"#define USE_UV":"",i.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&!1===i.flatShading?"#define USE_MORPHNORMALS":"",i.morphColors&&i.isWebGL2?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0&&i.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",i.morphTargetsCount>0&&i.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0&&i.isWebGL2?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.logarithmicDepthBuffer&&i.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(re).join(`
`),n=[y,rh(i),"#define SHADER_NAME "+i.shaderName,M,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.envMap?"#define "+v:"",i.envMap?"#define "+_:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMap&&i.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",i.normalMap&&i.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",i.specularColorMap?"#define USE_SPECULARCOLORMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEENCOLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.vertexTangents?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUvs?"#define USE_UV":"",i.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.logarithmicDepthBuffer&&i.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",0!==i.toneMapping?"#define TONE_MAPPING":"",0!==i.toneMapping?tB.tonemapping_pars_fragment:"",0!==i.toneMapping?function(e,t){let i;switch(t){case 1:i="Linear";break;case 2:i="Reinhard";break;case 3:i="OptimizedCineon";break;case f:i="ACESFilmic";break;case 5:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+e+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",tB.encodings_pars_fragment,function(e,t){let i=function(e){switch(e){case C:return["Linear","( value )"];case L:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",e),["Linear","( value )"]}}(t);return"vec4 "+e+"( vec4 value ) { return LinearTo"+i[0]+i[1]+"; }"}("linearToOutputTexel",i.outputEncoding),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(re).join(`
`)),d=ri(d=rt(d=ra(d),i),i),p=ri(p=rt(p=ra(p),i),i),d=ro(d),p=ro(p),i.isWebGL2&&!0!==i.isRawShaderMaterial&&(S=`#version 300 es
`,a=`precision mediump sampler2DArray;
#define attribute in
#define varying out
#define texture2D texture
`+a,n=["#define varying in",i.glslVersion===D?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===D?"":"#define gl_FragColor pc_fragColor",`#define gl_FragDepthEXT gl_FragDepth
#define texture2D texture
#define textureCube texture
#define texture2DProj textureProj
#define texture2DLodEXT textureLod
#define texture2DProjLodEXT textureProjLod
#define textureCubeLodEXT textureLod
#define texture2DGradEXT textureGrad
#define texture2DProjGradEXT textureProjGrad
#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+n);let T=S+a+d,w=S+n+p,E=i8(c,35633,T),A=i8(c,35632,w);if(c.attachShader(b,E),c.attachShader(b,A),void 0!==i.index0AttributeName?c.bindAttribLocation(b,0,i.index0AttributeName):!0===i.morphTargets&&c.bindAttribLocation(b,0,"position"),c.linkProgram(b),e.debug.checkShaderErrors){let e=c.getProgramInfoLog(b).trim(),t=c.getShaderInfoLog(E).trim(),i=c.getShaderInfoLog(A).trim(),r=!0,s=!0;if(!1===c.getProgramParameter(b,35714)){r=!1;let t=i7(c,E,"vertex"),i=i7(c,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+c.getError()+" - VALIDATE_STATUS "+c.getProgramParameter(b,35715)+`

Program Info Log: `+e+`
`+t+`
`+i)}else""!==e?console.warn("THREE.WebGLProgram: Program Info Log:",e):(""===t||""===i)&&(s=!1);s&&(this.diagnostics={runnable:r,programLog:e,vertexShader:{log:t,prefix:a},fragmentShader:{log:i,prefix:n}})}return c.deleteShader(E),c.deleteShader(A),this.getUniforms=function(){return void 0===s&&(s=new WebGLUniforms(c,b)),s},this.getAttributes=function(){return void 0===o&&(o=function(e,t){let i={},r=e.getProgramParameter(t,35721);for(let a=0;a<r;a++){let r=e.getActiveAttrib(t,a),n=r.name,s=1;35674===r.type&&(s=2),35675===r.type&&(s=3),35676===r.type&&(s=4),i[n]={type:r.type,location:e.getAttribLocation(t,n),locationSize:s}}return i}(c,b)),o},this.destroy=function(){r.releaseStatesOfProgram(this),c.deleteProgram(b),this.program=void 0},this.name=i.shaderName,this.id=i9++,this.cacheKey=t,this.usedTimes=1,this.program=b,this.vertexShader=E,this.fragmentShader=A,this}let ru=0;let WebGLShaderCache=class WebGLShaderCache{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(i),n=this._getShaderCacheForMaterial(e);return!1===n.has(r)&&(n.add(r),r.usedTimes++),!1===n.has(a)&&(n.add(a),a.usedTimes++),this}remove(e){for(let t of this.materialCache.get(e))t.usedTimes--,0===t.usedTimes&&this.shaderCache.delete(t.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return void 0===i&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return void 0===i&&(i=new WebGLShaderStage(e),t.set(e,i)),i}};let WebGLShaderStage=class WebGLShaderStage{constructor(e){this.id=ru++,this.code=e,this.usedTimes=0}};function rd(e,t,i,r,a,n,s){let l=new Layers,h=new WebGLShaderCache,c=[],u=a.isWebGL2,d=a.logarithmicDepthBuffer,p=a.vertexTextures,f=a.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};return{getParameters:function(n,l,c,g,v){let _,x,y,M,b=g.fog,S=v.geometry,T=n.isMeshStandardMaterial?g.environment:null,w=(n.isMeshStandardMaterial?i:t).get(n.envMap||T),E=w&&306===w.mapping?w.image.height:null,A=m[n.type];null!==n.precision&&(f=a.getMaxPrecision(n.precision))!==n.precision&&console.warn("THREE.WebGLProgram.getParameters:",n.precision,"not supported, using",f,"instead.");let R=S.morphAttributes.position||S.morphAttributes.normal||S.morphAttributes.color,P=void 0!==R?R.length:0,D=0;if(void 0!==S.morphAttributes.position&&(D=1),void 0!==S.morphAttributes.normal&&(D=2),void 0!==S.morphAttributes.color&&(D=3),A){let e=tk[A];_=e.vertexShader,x=e.fragmentShader}else _=n.vertexShader,x=n.fragmentShader,h.update(n),y=h.getVertexShaderID(n),M=h.getFragmentShaderID(n);let I=e.getRenderTarget(),N=n.alphaTest>0,O=n.clearcoat>0,U=n.iridescence>0;return{isWebGL2:u,shaderID:A,shaderName:n.type,vertexShader:_,fragmentShader:x,defines:n.defines,customVertexShaderID:y,customFragmentShaderID:M,isRawShaderMaterial:!0===n.isRawShaderMaterial,glslVersion:n.glslVersion,precision:f,instancing:!0===v.isInstancedMesh,instancingColor:!0===v.isInstancedMesh&&null!==v.instanceColor,supportsVertexTextures:p,outputEncoding:null===I?e.outputEncoding:!0===I.isXRRenderTarget?I.texture.encoding:C,map:!!n.map,matcap:!!n.matcap,envMap:!!w,envMapMode:w&&w.mapping,envMapCubeUVHeight:E,lightMap:!!n.lightMap,aoMap:!!n.aoMap,emissiveMap:!!n.emissiveMap,bumpMap:!!n.bumpMap,normalMap:!!n.normalMap,objectSpaceNormalMap:1===n.normalMapType,tangentSpaceNormalMap:0===n.normalMapType,decodeVideoTexture:!!n.map&&!0===n.map.isVideoTexture&&n.map.encoding===L,clearcoat:O,clearcoatMap:O&&!!n.clearcoatMap,clearcoatRoughnessMap:O&&!!n.clearcoatRoughnessMap,clearcoatNormalMap:O&&!!n.clearcoatNormalMap,iridescence:U,iridescenceMap:U&&!!n.iridescenceMap,iridescenceThicknessMap:U&&!!n.iridescenceThicknessMap,displacementMap:!!n.displacementMap,roughnessMap:!!n.roughnessMap,metalnessMap:!!n.metalnessMap,specularMap:!!n.specularMap,specularIntensityMap:!!n.specularIntensityMap,specularColorMap:!!n.specularColorMap,opaque:!1===n.transparent&&1===n.blending,alphaMap:!!n.alphaMap,alphaTest:N,gradientMap:!!n.gradientMap,sheen:n.sheen>0,sheenColorMap:!!n.sheenColorMap,sheenRoughnessMap:!!n.sheenRoughnessMap,transmission:n.transmission>0,transmissionMap:!!n.transmissionMap,thicknessMap:!!n.thicknessMap,combine:n.combine,vertexTangents:!!n.normalMap&&!!S.attributes.tangent,vertexColors:n.vertexColors,vertexAlphas:!0===n.vertexColors&&!!S.attributes.color&&4===S.attributes.color.itemSize,vertexUvs:!!n.map||!!n.bumpMap||!!n.normalMap||!!n.specularMap||!!n.alphaMap||!!n.emissiveMap||!!n.roughnessMap||!!n.metalnessMap||!!n.clearcoatMap||!!n.clearcoatRoughnessMap||!!n.clearcoatNormalMap||!!n.iridescenceMap||!!n.iridescenceThicknessMap||!!n.displacementMap||!!n.transmissionMap||!!n.thicknessMap||!!n.specularIntensityMap||!!n.specularColorMap||!!n.sheenColorMap||!!n.sheenRoughnessMap,uvsVertexOnly:!(n.map||n.bumpMap||n.normalMap||n.specularMap||n.alphaMap||n.emissiveMap||n.roughnessMap||n.metalnessMap||n.clearcoatNormalMap||n.iridescenceMap||n.iridescenceThicknessMap||n.transmission>0||n.transmissionMap||n.thicknessMap||n.specularIntensityMap||n.specularColorMap||n.sheen>0||n.sheenColorMap||n.sheenRoughnessMap)&&!!n.displacementMap,fog:!!b,useFog:!0===n.fog,fogExp2:b&&b.isFogExp2,flatShading:!!n.flatShading,sizeAttenuation:n.sizeAttenuation,logarithmicDepthBuffer:d,skinning:!0===v.isSkinnedMesh,morphTargets:void 0!==S.morphAttributes.position,morphNormals:void 0!==S.morphAttributes.normal,morphColors:void 0!==S.morphAttributes.color,morphTargetsCount:P,morphTextureStride:D,numDirLights:l.directional.length,numPointLights:l.point.length,numSpotLights:l.spot.length,numSpotLightMaps:l.spotLightMap.length,numRectAreaLights:l.rectArea.length,numHemiLights:l.hemi.length,numDirLightShadows:l.directionalShadowMap.length,numPointLightShadows:l.pointShadowMap.length,numSpotLightShadows:l.spotShadowMap.length,numSpotLightShadowsWithMaps:l.numSpotLightShadowsWithMaps,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:n.dithering,shadowMapEnabled:e.shadowMap.enabled&&c.length>0,shadowMapType:e.shadowMap.type,toneMapping:n.toneMapped?e.toneMapping:0,physicallyCorrectLights:e.physicallyCorrectLights,premultipliedAlpha:n.premultipliedAlpha,doubleSided:n.side===o,flipSided:1===n.side,useDepthPacking:!!n.depthPacking,depthPacking:n.depthPacking||0,index0AttributeName:n.index0AttributeName,extensionDerivatives:n.extensions&&n.extensions.derivatives,extensionFragDepth:n.extensions&&n.extensions.fragDepth,extensionDrawBuffers:n.extensions&&n.extensions.drawBuffers,extensionShaderTextureLOD:n.extensions&&n.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||r.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||r.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||r.has("EXT_shader_texture_lod"),customProgramCacheKey:n.customProgramCacheKey()}},getProgramCacheKey:function(t){var i,r,a,n;let s=[];if(t.shaderID?s.push(t.shaderID):(s.push(t.customVertexShaderID),s.push(t.customFragmentShaderID)),void 0!==t.defines)for(let e in t.defines)s.push(e),s.push(t.defines[e]);return!1===t.isRawShaderMaterial&&(i=s,r=t,i.push(r.precision),i.push(r.outputEncoding),i.push(r.envMapMode),i.push(r.envMapCubeUVHeight),i.push(r.combine),i.push(r.vertexUvs),i.push(r.fogExp2),i.push(r.sizeAttenuation),i.push(r.morphTargetsCount),i.push(r.morphAttributeCount),i.push(r.numDirLights),i.push(r.numPointLights),i.push(r.numSpotLights),i.push(r.numSpotLightMaps),i.push(r.numHemiLights),i.push(r.numRectAreaLights),i.push(r.numDirLightShadows),i.push(r.numPointLightShadows),i.push(r.numSpotLightShadows),i.push(r.numSpotLightShadowsWithMaps),i.push(r.shadowMapType),i.push(r.toneMapping),i.push(r.numClippingPlanes),i.push(r.numClipIntersection),i.push(r.depthPacking),a=s,n=t,l.disableAll(),n.isWebGL2&&l.enable(0),n.supportsVertexTextures&&l.enable(1),n.instancing&&l.enable(2),n.instancingColor&&l.enable(3),n.map&&l.enable(4),n.matcap&&l.enable(5),n.envMap&&l.enable(6),n.lightMap&&l.enable(7),n.aoMap&&l.enable(8),n.emissiveMap&&l.enable(9),n.bumpMap&&l.enable(10),n.normalMap&&l.enable(11),n.objectSpaceNormalMap&&l.enable(12),n.tangentSpaceNormalMap&&l.enable(13),n.clearcoat&&l.enable(14),n.clearcoatMap&&l.enable(15),n.clearcoatRoughnessMap&&l.enable(16),n.clearcoatNormalMap&&l.enable(17),n.iridescence&&l.enable(18),n.iridescenceMap&&l.enable(19),n.iridescenceThicknessMap&&l.enable(20),n.displacementMap&&l.enable(21),n.specularMap&&l.enable(22),n.roughnessMap&&l.enable(23),n.metalnessMap&&l.enable(24),n.gradientMap&&l.enable(25),n.alphaMap&&l.enable(26),n.alphaTest&&l.enable(27),n.vertexColors&&l.enable(28),n.vertexAlphas&&l.enable(29),n.vertexUvs&&l.enable(30),n.vertexTangents&&l.enable(31),n.uvsVertexOnly&&l.enable(32),a.push(l.mask),l.disableAll(),n.fog&&l.enable(0),n.useFog&&l.enable(1),n.flatShading&&l.enable(2),n.logarithmicDepthBuffer&&l.enable(3),n.skinning&&l.enable(4),n.morphTargets&&l.enable(5),n.morphNormals&&l.enable(6),n.morphColors&&l.enable(7),n.premultipliedAlpha&&l.enable(8),n.shadowMapEnabled&&l.enable(9),n.physicallyCorrectLights&&l.enable(10),n.doubleSided&&l.enable(11),n.flipSided&&l.enable(12),n.useDepthPacking&&l.enable(13),n.dithering&&l.enable(14),n.specularIntensityMap&&l.enable(15),n.specularColorMap&&l.enable(16),n.transmission&&l.enable(17),n.transmissionMap&&l.enable(18),n.thicknessMap&&l.enable(19),n.sheen&&l.enable(20),n.sheenColorMap&&l.enable(21),n.sheenRoughnessMap&&l.enable(22),n.decodeVideoTexture&&l.enable(23),n.opaque&&l.enable(24),a.push(l.mask),s.push(e.outputEncoding)),s.push(t.customProgramCacheKey),s.join()},getUniforms:function(e){let t,i=m[e.type];if(i){let e=tk[i];t=tL.clone(e.uniforms)}else t=e.uniforms;return t},acquireProgram:function(t,i){let r;for(let e=0,t=c.length;e<t;e++){let t=c[e];if(t.cacheKey===i){r=t,++r.usedTimes;break}}return void 0===r&&(r=new rc(e,i,t,n),c.push(r)),r},releaseProgram:function(e){if(0==--e.usedTimes){let t=c.indexOf(e);c[t]=c[c.length-1],c.pop(),e.destroy()}},releaseShaderCache:function(e){h.remove(e)},programs:c,dispose:function(){h.dispose()}}}function rp(){let e=new WeakMap;return{get:function(t){let i=e.get(t);return void 0===i&&(i={},e.set(t,i)),i},remove:function(t){e.delete(t)},update:function(t,i,r){e.get(t)[i]=r},dispose:function(){e=new WeakMap}}}function rf(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.z!==t.z?e.z-t.z:e.id-t.id}function rm(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function rg(){let e=[],t=0,i=[],r=[],a=[];function n(i,r,a,n,s,o){let l=e[t];return void 0===l?(l={id:i.id,object:i,geometry:r,material:a,groupOrder:n,renderOrder:i.renderOrder,z:s,group:o},e[t]=l):(l.id=i.id,l.object=i,l.geometry=r,l.material=a,l.groupOrder=n,l.renderOrder=i.renderOrder,l.z=s,l.group=o),t++,l}return{opaque:i,transmissive:r,transparent:a,init:function(){t=0,i.length=0,r.length=0,a.length=0},push:function(e,t,s,o,l,h){let c=n(e,t,s,o,l,h);s.transmission>0?r.push(c):!0===s.transparent?a.push(c):i.push(c)},unshift:function(e,t,s,o,l,h){let c=n(e,t,s,o,l,h);s.transmission>0?r.unshift(c):!0===s.transparent?a.unshift(c):i.unshift(c)},finish:function(){for(let i=t,r=e.length;i<r;i++){let t=e[i];if(null===t.id)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}},sort:function(e,t){i.length>1&&i.sort(e||rf),r.length>1&&r.sort(t||rm),a.length>1&&a.sort(t||rm)}}}function rv(){let e=new WeakMap;return{get:function(t,i){let r,a=e.get(t);return void 0===a?(r=new rg,e.set(t,[r])):i>=a.length?(r=new rg,a.push(r)):r=a[i],r},dispose:function(){e=new WeakMap}}}function r_(){let e={};return{get:function(t){let i;if(void 0!==e[t.id])return e[t.id];switch(t.type){case"DirectionalLight":i={direction:new Vector3,color:new Color};break;case"SpotLight":i={position:new Vector3,direction:new Vector3,color:new Color,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new Vector3,color:new Color,distance:0,decay:0};break;case"HemisphereLight":i={direction:new Vector3,skyColor:new Color,groundColor:new Color};break;case"RectAreaLight":i={color:new Color,position:new Vector3,halfWidth:new Vector3,halfHeight:new Vector3}}return e[t.id]=i,i}}}let rx=0;function ry(e,t){return 2*!!t.castShadow-2*!!e.castShadow+ +!!t.map-!!e.map}function rM(e,t){let i=new r_,r=function(){let e={};return{get:function(t){let i;if(void 0!==e[t.id])return e[t.id];switch(t.type){case"DirectionalLight":case"SpotLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vector2};break;case"PointLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vector2,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=i,i}}}(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let e=0;e<9;e++)a.probe.push(new Vector3);let n=new Vector3,s=new Matrix4,o=new Matrix4;return{setup:function(n,s){let o=0,l=0,h=0;for(let e=0;e<9;e++)a.probe[e].set(0,0,0);let c=0,u=0,d=0,p=0,f=0,m=0,g=0,v=0,_=0,x=0;n.sort(ry);let y=!0!==s?Math.PI:1;for(let e=0,t=n.length;e<t;e++){let t=n[e],s=t.color,M=t.intensity,b=t.distance,S=t.shadow&&t.shadow.map?t.shadow.map.texture:null;if(t.isAmbientLight)o+=s.r*M*y,l+=s.g*M*y,h+=s.b*M*y;else if(t.isLightProbe)for(let e=0;e<9;e++)a.probe[e].addScaledVector(t.sh.coefficients[e],M);else if(t.isDirectionalLight){let e=i.get(t);if(e.color.copy(t.color).multiplyScalar(t.intensity*y),t.castShadow){let e=t.shadow,i=r.get(t);i.shadowBias=e.bias,i.shadowNormalBias=e.normalBias,i.shadowRadius=e.radius,i.shadowMapSize=e.mapSize,a.directionalShadow[c]=i,a.directionalShadowMap[c]=S,a.directionalShadowMatrix[c]=t.shadow.matrix,m++}a.directional[c]=e,c++}else if(t.isSpotLight){let e=i.get(t);e.position.setFromMatrixPosition(t.matrixWorld),e.color.copy(s).multiplyScalar(M*y),e.distance=b,e.coneCos=Math.cos(t.angle),e.penumbraCos=Math.cos(t.angle*(1-t.penumbra)),e.decay=t.decay,a.spot[d]=e;let n=t.shadow;if(t.map&&(a.spotLightMap[_]=t.map,_++,n.updateMatrices(t),t.castShadow&&x++),a.spotLightMatrix[d]=n.matrix,t.castShadow){let e=r.get(t);e.shadowBias=n.bias,e.shadowNormalBias=n.normalBias,e.shadowRadius=n.radius,e.shadowMapSize=n.mapSize,a.spotShadow[d]=e,a.spotShadowMap[d]=S,v++}d++}else if(t.isRectAreaLight){let e=i.get(t);e.color.copy(s).multiplyScalar(M),e.halfWidth.set(.5*t.width,0,0),e.halfHeight.set(0,.5*t.height,0),a.rectArea[p]=e,p++}else if(t.isPointLight){let e=i.get(t);if(e.color.copy(t.color).multiplyScalar(t.intensity*y),e.distance=t.distance,e.decay=t.decay,t.castShadow){let e=t.shadow,i=r.get(t);i.shadowBias=e.bias,i.shadowNormalBias=e.normalBias,i.shadowRadius=e.radius,i.shadowMapSize=e.mapSize,i.shadowCameraNear=e.camera.near,i.shadowCameraFar=e.camera.far,a.pointShadow[u]=i,a.pointShadowMap[u]=S,a.pointShadowMatrix[u]=t.shadow.matrix,g++}a.point[u]=e,u++}else if(t.isHemisphereLight){let e=i.get(t);e.skyColor.copy(t.color).multiplyScalar(M*y),e.groundColor.copy(t.groundColor).multiplyScalar(M*y),a.hemi[f]=e,f++}}p>0&&(t.isWebGL2||!0===e.has("OES_texture_float_linear")?(a.rectAreaLTC1=tF.LTC_FLOAT_1,a.rectAreaLTC2=tF.LTC_FLOAT_2):!0===e.has("OES_texture_half_float_linear")?(a.rectAreaLTC1=tF.LTC_HALF_1,a.rectAreaLTC2=tF.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),a.ambient[0]=o,a.ambient[1]=l,a.ambient[2]=h;let M=a.hash;(M.directionalLength!==c||M.pointLength!==u||M.spotLength!==d||M.rectAreaLength!==p||M.hemiLength!==f||M.numDirectionalShadows!==m||M.numPointShadows!==g||M.numSpotShadows!==v||M.numSpotMaps!==_)&&(a.directional.length=c,a.spot.length=d,a.rectArea.length=p,a.point.length=u,a.hemi.length=f,a.directionalShadow.length=m,a.directionalShadowMap.length=m,a.pointShadow.length=g,a.pointShadowMap.length=g,a.spotShadow.length=v,a.spotShadowMap.length=v,a.directionalShadowMatrix.length=m,a.pointShadowMatrix.length=g,a.spotLightMatrix.length=v+_-x,a.spotLightMap.length=_,a.numSpotLightShadowsWithMaps=x,M.directionalLength=c,M.pointLength=u,M.spotLength=d,M.rectAreaLength=p,M.hemiLength=f,M.numDirectionalShadows=m,M.numPointShadows=g,M.numSpotShadows=v,M.numSpotMaps=_,a.version=rx++)},setupView:function(e,t){let i=0,r=0,l=0,h=0,c=0,u=t.matrixWorldInverse;for(let t=0,d=e.length;t<d;t++){let d=e[t];if(d.isDirectionalLight){let e=a.directional[i];e.direction.setFromMatrixPosition(d.matrixWorld),n.setFromMatrixPosition(d.target.matrixWorld),e.direction.sub(n),e.direction.transformDirection(u),i++}else if(d.isSpotLight){let e=a.spot[l];e.position.setFromMatrixPosition(d.matrixWorld),e.position.applyMatrix4(u),e.direction.setFromMatrixPosition(d.matrixWorld),n.setFromMatrixPosition(d.target.matrixWorld),e.direction.sub(n),e.direction.transformDirection(u),l++}else if(d.isRectAreaLight){let e=a.rectArea[h];e.position.setFromMatrixPosition(d.matrixWorld),e.position.applyMatrix4(u),o.identity(),s.copy(d.matrixWorld),s.premultiply(u),o.extractRotation(s),e.halfWidth.set(.5*d.width,0,0),e.halfHeight.set(0,.5*d.height,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),h++}else if(d.isPointLight){let e=a.point[r];e.position.setFromMatrixPosition(d.matrixWorld),e.position.applyMatrix4(u),r++}else if(d.isHemisphereLight){let e=a.hemi[c];e.direction.setFromMatrixPosition(d.matrixWorld),e.direction.transformDirection(u),c++}}},state:a}}function rb(e,t){let i=new rM(e,t),r=[],a=[];return{init:function(){r.length=0,a.length=0},state:{lightsArray:r,shadowsArray:a,lights:i},setupLights:function(e){i.setup(r,e)},setupLightsView:function(e){i.setupView(r,e)},pushLight:function(e){r.push(e)},pushShadow:function(e){a.push(e)}}}function rS(e,t){let i=new WeakMap;return{get:function(r,a=0){let n,s=i.get(r);return void 0===s?(n=new rb(e,t),i.set(r,[n])):a>=s.length?(n=new rb(e,t),s.push(n)):n=s[a],n},dispose:function(){i=new WeakMap}}}let MeshDepthMaterial=class MeshDepthMaterial extends Material{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}};let MeshDistanceMaterial=class MeshDistanceMaterial extends Material{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new Vector3,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};let rT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,rw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function rE(e,t,i){let r=new Frustum,a=new Vector2,n=new Vector2,l=new Vector4,h=new MeshDepthMaterial({depthPacking:3201}),c=new MeshDistanceMaterial,u={},d=i.maxTextureSize,p={0:1,1:s,2:o},f=new ShaderMaterial({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Vector2},radius:{value:4}},vertexShader:rT,fragmentShader:rw}),m=f.clone();m.defines.HORIZONTAL_PASS=1;let g=new BufferGeometry;g.setAttribute("position",new BufferAttribute(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Mesh(g,f),x=this;function y(t,i,r,a,n,s){let o=null,l=!0===r.isPointLight?t.customDistanceMaterial:t.customDepthMaterial;if(void 0!==l)o=l;else if(o=!0===r.isPointLight?c:h,e.localClippingEnabled&&!0===i.clipShadows&&Array.isArray(i.clippingPlanes)&&0!==i.clippingPlanes.length||i.displacementMap&&0!==i.displacementScale||i.alphaMap&&i.alphaTest>0||i.map&&i.alphaTest>0){let e=o.uuid,t=i.uuid,r=u[e];void 0===r&&(r={},u[e]=r);let a=r[t];void 0===a&&(a=o.clone(),r[t]=a),o=a}return o.visible=i.visible,o.wireframe=i.wireframe,3===s?o.side=null!==i.shadowSide?i.shadowSide:i.side:o.side=null!==i.shadowSide?i.shadowSide:p[i.side],o.alphaMap=i.alphaMap,o.alphaTest=i.alphaTest,o.map=i.map,o.clipShadows=i.clipShadows,o.clippingPlanes=i.clippingPlanes,o.clipIntersection=i.clipIntersection,o.displacementMap=i.displacementMap,o.displacementScale=i.displacementScale,o.displacementBias=i.displacementBias,o.wireframeLinewidth=i.wireframeLinewidth,o.linewidth=i.linewidth,!0===r.isPointLight&&!0===o.isMeshDistanceMaterial&&(o.referencePosition.setFromMatrixPosition(r.matrixWorld),o.nearDistance=a,o.farDistance=n),o}this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1,this.render=function(i,s,o){if(!1===x.enabled||!1===x.autoUpdate&&!1===x.needsUpdate||0===i.length)return;let h=e.getRenderTarget(),c=e.getActiveCubeFace(),u=e.getActiveMipmapLevel(),p=e.state;p.setBlending(0),p.buffers.color.setClear(1,1,1,1),p.buffers.depth.setTest(!0),p.setScissorTest(!1);for(let h=0,c=i.length;h<c;h++){let c=i[h],u=c.shadow;if(void 0===u){console.warn("THREE.WebGLShadowMap:",c,"has no shadow.");continue}if(!1===u.autoUpdate&&!1===u.needsUpdate)continue;a.copy(u.mapSize);let g=u.getFrameExtents();if(a.multiply(g),n.copy(u.mapSize),(a.x>d||a.y>d)&&(a.x>d&&(n.x=Math.floor(d/g.x),a.x=n.x*g.x,u.mapSize.x=n.x),a.y>d&&(n.y=Math.floor(d/g.y),a.y=n.y*g.y,u.mapSize.y=n.y)),null===u.map){let e=3!==this.type?{minFilter:_,magFilter:_}:{};u.map=new WebGLRenderTarget(a.x,a.y,e),u.map.texture.name=c.name+".shadowMap",u.camera.updateProjectionMatrix()}e.setRenderTarget(u.map),e.clear();let x=u.getViewportCount();for(let i=0;i<x;i++){let a=u.getViewport(i);l.set(n.x*a.x,n.y*a.y,n.x*a.z,n.y*a.w),p.viewport(l),u.updateMatrices(c,i),r=u.getFrustum(),function i(a,n,s,o,l){if(!1===a.visible)return;if(a.layers.test(n.layers)&&(a.isMesh||a.isLine||a.isPoints)&&(a.castShadow||a.receiveShadow&&3===l)&&(!a.frustumCulled||r.intersectsObject(a))){a.modelViewMatrix.multiplyMatrices(s.matrixWorldInverse,a.matrixWorld);let i=t.update(a),r=a.material;if(Array.isArray(r)){let t=i.groups;for(let n=0,h=t.length;n<h;n++){let h=t[n],c=r[h.materialIndex];if(c&&c.visible){let t=y(a,c,o,s.near,s.far,l);e.renderBufferDirect(s,null,i,t,a,h)}}}else if(r.visible){let t=y(a,r,o,s.near,s.far,l);e.renderBufferDirect(s,null,i,t,a,null)}}let h=a.children;for(let e=0,t=h.length;e<t;e++)i(h[e],n,s,o,l)}(s,o,u.camera,c,this.type)}!0!==u.isPointLightShadow&&3===this.type&&function(i,r){let n=t.update(v);f.defines.VSM_SAMPLES!==i.blurSamples&&(f.defines.VSM_SAMPLES=i.blurSamples,m.defines.VSM_SAMPLES=i.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),null===i.mapPass&&(i.mapPass=new WebGLRenderTarget(a.x,a.y)),f.uniforms.shadow_pass.value=i.map.texture,f.uniforms.resolution.value=i.mapSize,f.uniforms.radius.value=i.radius,e.setRenderTarget(i.mapPass),e.clear(),e.renderBufferDirect(r,null,n,f,v,null),m.uniforms.shadow_pass.value=i.mapPass.texture,m.uniforms.resolution.value=i.mapSize,m.uniforms.radius.value=i.radius,e.setRenderTarget(i.map),e.clear(),e.renderBufferDirect(r,null,n,m,v,null)}(u,o),u.needsUpdate=!1}x.needsUpdate=!1,e.setRenderTarget(h,c,u)}}function rA(e,t,i){let r=i.isWebGL2,a=new function(){let t=!1,i=new Vector4,r=null,a=new Vector4(0,0,0,0);return{setMask:function(i){r===i||t||(e.colorMask(i,i,i,i),r=i)},setLocked:function(e){t=e},setClear:function(t,r,n,s,o){!0===o&&(t*=s,r*=s,n*=s),i.set(t,r,n,s),!1===a.equals(i)&&(e.clearColor(t,r,n,s),a.copy(i))},reset:function(){t=!1,r=null,a.set(-1,0,0,0)}}},n=new function(){let t=!1,i=null,r=null,a=null;return{setTest:function(e){e?X(2929):q(2929)},setMask:function(r){i===r||t||(e.depthMask(r),i=r)},setFunc:function(t){if(r!==t){switch(t){case 0:e.depthFunc(512);break;case 1:e.depthFunc(519);break;case 2:e.depthFunc(513);break;case 3:default:e.depthFunc(515);break;case 4:e.depthFunc(514);break;case 5:e.depthFunc(518);break;case 6:e.depthFunc(516);break;case 7:e.depthFunc(517)}r=t}},setLocked:function(e){t=e},setClear:function(t){a!==t&&(e.clearDepth(t),a=t)},reset:function(){t=!1,i=null,r=null,a=null}}},s=new function(){let t=!1,i=null,r=null,a=null,n=null,s=null,o=null,l=null,h=null;return{setTest:function(e){t||(e?X(2960):q(2960))},setMask:function(r){i===r||t||(e.stencilMask(r),i=r)},setFunc:function(t,i,s){(r!==t||a!==i||n!==s)&&(e.stencilFunc(t,i,s),r=t,a=i,n=s)},setOp:function(t,i,r){(s!==t||o!==i||l!==r)&&(e.stencilOp(t,i,r),s=t,o=i,l=r)},setLocked:function(e){t=e},setClear:function(t){h!==t&&(e.clearStencil(t),h=t)},reset:function(){t=!1,i=null,r=null,a=null,n=null,s=null,o=null,l=null,h=null}}},f=new WeakMap,m=new WeakMap,g={},v={},_=new WeakMap,x=[],y=null,M=!1,b=null,S=null,T=null,w=null,E=null,A=null,C=null,L=!1,R=null,P=null,D=null,I=null,N=null,O=e.getParameter(35661),U=!1,V=e.getParameter(7938);-1!==V.indexOf("WebGL")?U=parseFloat(/^WebGL (\d)/.exec(V)[1])>=1:-1!==V.indexOf("OpenGL ES")&&(U=parseFloat(/^OpenGL ES (\d)/.exec(V)[1])>=2);let z=null,B={},F=e.getParameter(3088),k=e.getParameter(2978),G=new Vector4().fromArray(F),H=new Vector4().fromArray(k);function W(t,i,r){let a=new Uint8Array(4),n=e.createTexture();e.bindTexture(t,n),e.texParameteri(t,10241,9728),e.texParameteri(t,10240,9728);for(let t=0;t<r;t++)e.texImage2D(i+t,0,6408,1,1,0,6408,5121,a);return n}let j={};function X(t){!0!==g[t]&&(e.enable(t),g[t]=!0)}function q(t){!1!==g[t]&&(e.disable(t),g[t]=!1)}j[3553]=W(3553,3553,1),j[34067]=W(34067,34069,6),a.setClear(0,0,0,1),n.setClear(1),s.setClear(0),X(2929),n.setFunc(3),Z(!1),Q(1),X(2884),J(0);let Y={[h]:32774,101:32778,102:32779};if(r)Y[103]=32775,Y[104]=32776;else{let e=t.get("EXT_blend_minmax");null!==e&&(Y[103]=e.MIN_EXT,Y[104]=e.MAX_EXT)}let K={[c]:0,[u]:1,202:768,[d]:770,210:776,208:774,206:772,203:769,[p]:771,209:775,207:773};function J(t,i,r,a,n,s,o,c){if(0===t){!0===M&&(q(3042),M=!1);return}if(!1===M&&(X(3042),M=!0),t!==l){if(t!==b||c!==L){if((S!==h||E!==h)&&(e.blendEquation(32774),S=h,E=h),c)switch(t){case 1:e.blendFuncSeparate(1,771,1,771);break;case 2:e.blendFunc(1,1);break;case 3:e.blendFuncSeparate(0,769,0,1);break;case 4:e.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",t)}else switch(t){case 1:e.blendFuncSeparate(770,771,1,771);break;case 2:e.blendFunc(770,1);break;case 3:e.blendFuncSeparate(0,769,0,1);break;case 4:e.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",t)}T=null,w=null,A=null,C=null,b=t,L=c}return}n=n||i,s=s||r,o=o||a,(i!==S||n!==E)&&(e.blendEquationSeparate(Y[i],Y[n]),S=i,E=n),(r!==T||a!==w||s!==A||o!==C)&&(e.blendFuncSeparate(K[r],K[a],K[s],K[o]),T=r,w=a,A=s,C=o),b=t,L=!1}function Z(t){R!==t&&(t?e.frontFace(2304):e.frontFace(2305),R=t)}function Q(t){0!==t?(X(2884),t!==P&&(1===t?e.cullFace(1029):2===t?e.cullFace(1028):e.cullFace(1032))):q(2884),P=t}function $(t,i,r){t?(X(32823),(I!==i||N!==r)&&(e.polygonOffset(i,r),I=i,N=r)):q(32823)}return{buffers:{color:a,depth:n,stencil:s},enable:X,disable:q,bindFramebuffer:function(t,i){return v[t]!==i&&(e.bindFramebuffer(t,i),v[t]=i,r&&(36009===t&&(v[36160]=i),36160===t&&(v[36009]=i)),!0)},drawBuffers:function(r,a){let n=x,s=!1;if(r)if(void 0===(n=_.get(a))&&(n=[],_.set(a,n)),r.isWebGLMultipleRenderTargets){let e=r.texture;if(n.length!==e.length||36064!==n[0]){for(let t=0,i=e.length;t<i;t++)n[t]=36064+t;n.length=e.length,s=!0}}else 36064!==n[0]&&(n[0]=36064,s=!0);else 1029!==n[0]&&(n[0]=1029,s=!0);s&&(i.isWebGL2?e.drawBuffers(n):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(n))},useProgram:function(t){return y!==t&&(e.useProgram(t),y=t,!0)},setBlending:J,setMaterial:function(e,t){e.side===o?q(2884):X(2884);let i=1===e.side;t&&(i=!i),Z(i),1===e.blending&&!1===e.transparent?J(0):J(e.blending,e.blendEquation,e.blendSrc,e.blendDst,e.blendEquationAlpha,e.blendSrcAlpha,e.blendDstAlpha,e.premultipliedAlpha),n.setFunc(e.depthFunc),n.setTest(e.depthTest),n.setMask(e.depthWrite),a.setMask(e.colorWrite);let r=e.stencilWrite;s.setTest(r),r&&(s.setMask(e.stencilWriteMask),s.setFunc(e.stencilFunc,e.stencilRef,e.stencilFuncMask),s.setOp(e.stencilFail,e.stencilZFail,e.stencilZPass)),$(e.polygonOffset,e.polygonOffsetFactor,e.polygonOffsetUnits),!0===e.alphaToCoverage?X(32926):q(32926)},setFlipSided:Z,setCullFace:Q,setLineWidth:function(t){t!==D&&(U&&e.lineWidth(t),D=t)},setPolygonOffset:$,setScissorTest:function(e){e?X(3089):q(3089)},activeTexture:function(t){void 0===t&&(t=33984+O-1),z!==t&&(e.activeTexture(t),z=t)},bindTexture:function(t,i,r){void 0===r&&(r=null===z?33984+O-1:z);let a=B[r];void 0===a&&(a={type:void 0,texture:void 0},B[r]=a),(a.type!==t||a.texture!==i)&&(z!==r&&(e.activeTexture(r),z=r),e.bindTexture(t,i||j[t]),a.type=t,a.texture=i)},unbindTexture:function(){let t=B[z];void 0!==t&&void 0!==t.type&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)},compressedTexImage2D:function(){try{e.compressedTexImage2D.apply(e,arguments)}catch(e){console.error("THREE.WebGLState:",e)}},compressedTexImage3D:function(){try{e.compressedTexImage3D.apply(e,arguments)}catch(e){console.error("THREE.WebGLState:",e)}},texImage2D:function(){try{e.texImage2D.apply(e,arguments)}catch(e){console.error("THREE.WebGLState:",e)}},texImage3D:function(){try{e.texImage3D.apply(e,arguments)}catch(e){console.error("THREE.WebGLState:",e)}},updateUBOMapping:function(t,i){let r=m.get(i);void 0===r&&(r=new WeakMap,m.set(i,r));let a=r.get(t);void 0===a&&(a=e.getUniformBlockIndex(i,t.name),r.set(t,a))},uniformBlockBinding:function(t,i){let r=m.get(i).get(t);f.get(i)!==r&&(e.uniformBlockBinding(i,r,t.__bindingPointIndex),f.set(i,r))},texStorage2D:function(){try{e.texStorage2D.apply(e,arguments)}catch(e){console.error("THREE.WebGLState:",e)}},texStorage3D:function(){try{e.texStorage3D.apply(e,arguments)}catch(e){console.error("THREE.WebGLState:",e)}},texSubImage2D:function(){try{e.texSubImage2D.apply(e,arguments)}catch(e){console.error("THREE.WebGLState:",e)}},texSubImage3D:function(){try{e.texSubImage3D.apply(e,arguments)}catch(e){console.error("THREE.WebGLState:",e)}},compressedTexSubImage2D:function(){try{e.compressedTexSubImage2D.apply(e,arguments)}catch(e){console.error("THREE.WebGLState:",e)}},compressedTexSubImage3D:function(){try{e.compressedTexSubImage3D.apply(e,arguments)}catch(e){console.error("THREE.WebGLState:",e)}},scissor:function(t){!1===G.equals(t)&&(e.scissor(t.x,t.y,t.z,t.w),G.copy(t))},viewport:function(t){!1===H.equals(t)&&(e.viewport(t.x,t.y,t.z,t.w),H.copy(t))},reset:function(){e.disable(3042),e.disable(2884),e.disable(2929),e.disable(32823),e.disable(3089),e.disable(2960),e.disable(32926),e.blendEquation(32774),e.blendFunc(1,0),e.blendFuncSeparate(1,0,1,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(513),e.clearDepth(1),e.stencilMask(0xffffffff),e.stencilFunc(519,0,0xffffffff),e.stencilOp(7680,7680,7680),e.clearStencil(0),e.cullFace(1029),e.frontFace(2305),e.polygonOffset(0,0),e.activeTexture(33984),e.bindFramebuffer(36160,null),!0===r&&(e.bindFramebuffer(36009,null),e.bindFramebuffer(36008,null)),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),g={},z=null,B={},v={},_=new WeakMap,x=[],y=null,M=!1,b=null,S=null,T=null,w=null,E=null,A=null,C=null,L=!1,R=null,P=null,D=null,I=null,N=null,G.set(0,0,e.canvas.width,e.canvas.height),H.set(0,0,e.canvas.width,e.canvas.height),a.reset(),n.reset(),s.reset()}}}function rC(e,t,i,r,a,n,s){let o,l=a.isWebGL2,h=a.maxTextures,c=a.maxCubemapSize,u=a.maxTextureSize,d=a.maxSamples,p=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,f="undefined"!=typeof navigator&&/OculusBrowser/g.test(navigator.userAgent),T=new WeakMap,w=new WeakMap,E=!1;try{E="undefined"!=typeof OffscreenCanvas&&null!==new OffscreenCanvas(1,1).getContext("2d")}catch(e){}function A(e,t){return E?new OffscreenCanvas(e,t):K("canvas")}function R(e,t,i,r){let a=1;if((e.width>r||e.height>r)&&(a=r/Math.max(e.width,e.height)),a<1||!0===t)if("undefined"!=typeof HTMLImageElement&&e instanceof HTMLImageElement||"undefined"!=typeof HTMLCanvasElement&&e instanceof HTMLCanvasElement||"undefined"!=typeof ImageBitmap&&e instanceof ImageBitmap){let r=t?H:Math.floor,n=r(a*e.width),s=r(a*e.height);void 0===o&&(o=A(n,s));let l=i?A(n,s):o;return l.width=n,l.height=s,l.getContext("2d").drawImage(e,0,0,n,s),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+e.width+"x"+e.height+") to ("+n+"x"+s+")."),l}else"data"in e&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+e.width+"x"+e.height+").");return e}function P(e){return k(e.width)&&k(e.height)}function D(e,t){return e.generateMipmaps&&t&&e.minFilter!==_&&e.minFilter!==M}function I(t){e.generateMipmap(t)}function N(i,r,a,n,s=!1){if(!1===l)return r;if(null!==i){if(void 0!==e[i])return e[i];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+i+"'")}let o=r;return 6403===r&&(5126===a&&(o=33326),5131===a&&(o=33325),5121===a&&(o=33321)),33319===r&&(5126===a&&(o=33328),5131===a&&(o=33327),5121===a&&(o=33323)),6408===r&&(5126===a&&(o=34836),5131===a&&(o=34842),5121===a&&(o=n===L&&!1===s?35907:32856),32819===a&&(o=32854),32820===a&&(o=32855)),(33325===o||33326===o||33327===o||33328===o||34842===o||34836===o)&&t.get("EXT_color_buffer_float"),o}function O(e,t,i){return!0===D(e,i)||e.isFramebufferTexture&&e.minFilter!==_&&e.minFilter!==M?Math.log2(Math.max(t.width,t.height))+1:void 0!==e.mipmaps&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function U(e){return e===_||e===x||e===y?9728:9729}function V(e){let t=e.target;t.removeEventListener("dispose",V),function(e){let t=r.get(e);if(void 0===t.__webglInit)return;let i=e.source,a=w.get(i);if(a){let r=a[t.__cacheKey];r.usedTimes--,0===r.usedTimes&&B(e),0===Object.keys(a).length&&w.delete(i)}r.remove(e)}(t),t.isVideoTexture&&T.delete(t)}function z(t){let i=t.target;i.removeEventListener("dispose",z),function(t){let i=t.texture,a=r.get(t),n=r.get(i);if(void 0!==n.__webglTexture&&(e.deleteTexture(n.__webglTexture),s.memory.textures--),t.depthTexture&&t.depthTexture.dispose(),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++)e.deleteFramebuffer(a.__webglFramebuffer[t]),a.__webglDepthbuffer&&e.deleteRenderbuffer(a.__webglDepthbuffer[t]);else{if(e.deleteFramebuffer(a.__webglFramebuffer),a.__webglDepthbuffer&&e.deleteRenderbuffer(a.__webglDepthbuffer),a.__webglMultisampledFramebuffer&&e.deleteFramebuffer(a.__webglMultisampledFramebuffer),a.__webglColorRenderbuffer)for(let t=0;t<a.__webglColorRenderbuffer.length;t++)a.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(a.__webglColorRenderbuffer[t]);a.__webglDepthRenderbuffer&&e.deleteRenderbuffer(a.__webglDepthRenderbuffer)}if(t.isWebGLMultipleRenderTargets)for(let t=0,a=i.length;t<a;t++){let a=r.get(i[t]);a.__webglTexture&&(e.deleteTexture(a.__webglTexture),s.memory.textures--),r.remove(i[t])}r.remove(i),r.remove(t)}(i)}function B(t){let i=r.get(t);e.deleteTexture(i.__webglTexture);let a=t.source,n=w.get(a);delete n[i.__cacheKey],s.memory.textures--}let F=0;function G(e,t){let a=r.get(e);if(e.isVideoTexture&&function(e){let t=s.render.frame;T.get(e)!==t&&(T.set(e,t),e.update())}(e),!1===e.isRenderTargetTexture&&e.version>0&&a.__version!==e.version){let i=e.image;if(null===i)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else{if(!1!==i.complete)return void Y(a,e,t);console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")}}i.bindTexture(3553,a.__webglTexture,33984+t)}let W={[m]:10497,[g]:33071,[v]:33648},j={[_]:9728,[x]:9984,[y]:9986,[M]:9729,[b]:9985,[S]:9987};function X(i,n,s){if(s?(e.texParameteri(i,10242,W[n.wrapS]),e.texParameteri(i,10243,W[n.wrapT]),(32879===i||35866===i)&&e.texParameteri(i,32882,W[n.wrapR]),e.texParameteri(i,10240,j[n.magFilter]),e.texParameteri(i,10241,j[n.minFilter])):(e.texParameteri(i,10242,33071),e.texParameteri(i,10243,33071),(32879===i||35866===i)&&e.texParameteri(i,32882,33071),(n.wrapS!==g||n.wrapT!==g)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),e.texParameteri(i,10240,U(n.magFilter)),e.texParameteri(i,10241,U(n.minFilter)),n.minFilter!==_&&n.minFilter!==M&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),!0===t.has("EXT_texture_filter_anisotropic")){let s=t.get("EXT_texture_filter_anisotropic");n.magFilter!==_&&(n.minFilter===y||n.minFilter===S)&&(1015!==n.type||!1!==t.has("OES_texture_float_linear"))&&(!1!==l||1016!==n.type||!1!==t.has("OES_texture_half_float_linear"))&&(n.anisotropy>1||r.get(n).__currentAnisotropy)&&(e.texParameterf(i,s.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(n.anisotropy,a.getMaxAnisotropy())),r.get(n).__currentAnisotropy=n.anisotropy)}}function q(t,i){let r=!1;void 0===t.__webglInit&&(t.__webglInit=!0,i.addEventListener("dispose",V));let a=i.source,n=w.get(a);void 0===n&&(n={},w.set(a,n));let o=function(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.encoding),t.join()}(i);if(o!==t.__cacheKey){void 0===n[o]&&(n[o]={texture:e.createTexture(),usedTimes:0},s.memory.textures++,r=!0),n[o].usedTimes++;let a=n[t.__cacheKey];void 0!==a&&(n[t.__cacheKey].usedTimes--,0===a.usedTimes&&B(i)),t.__cacheKey=o,t.__webglTexture=n[o].texture}return r}function Y(t,a,s){let o=3553;(a.isDataArrayTexture||a.isCompressedArrayTexture)&&(o=35866),a.isData3DTexture&&(o=32879);let h=q(t,a),c=a.source;i.bindTexture(o,t.__webglTexture,33984+s);let d=r.get(c);if(c.version!==d.__version||!0===h){let t;i.activeTexture(33984+s),e.pixelStorei(37440,a.flipY),e.pixelStorei(37441,a.premultiplyAlpha),e.pixelStorei(3317,a.unpackAlignment),e.pixelStorei(37443,0);let r=!l&&(a.wrapS!==g||a.wrapT!==g||a.minFilter!==_&&a.minFilter!==M)&&!1===P(a.image),p=R(a.image,r,!1,u),f=P(p=et(a,p))||l,m=n.convert(a.format,a.encoding),v=n.convert(a.type),x=N(a.internalFormat,m,v,a.encoding,a.isVideoTexture);X(o,a,f);let y=a.mipmaps,b=l&&!0!==a.isVideoTexture,S=void 0===d.__version||!0===h,T=O(a,p,f);if(a.isDepthTexture)x=6402,l?x=1015===a.type?36012:1014===a.type?33190:1020===a.type?35056:33189:1015===a.type&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),1026===a.format&&6402===x&&1012!==a.type&&1014!==a.type&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),a.type=1014,v=n.convert(a.type)),1027===a.format&&6402===x&&(x=34041,1020!==a.type&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),a.type=1020,v=n.convert(a.type))),S&&(b?i.texStorage2D(3553,1,x,p.width,p.height):i.texImage2D(3553,0,x,p.width,p.height,0,m,v,null));else if(a.isDataTexture)if(y.length>0&&f){b&&S&&i.texStorage2D(3553,T,x,y[0].width,y[0].height);for(let e=0,r=y.length;e<r;e++)t=y[e],b?i.texSubImage2D(3553,e,0,0,t.width,t.height,m,v,t.data):i.texImage2D(3553,e,x,t.width,t.height,0,m,v,t.data);a.generateMipmaps=!1}else b?(S&&i.texStorage2D(3553,T,x,p.width,p.height),i.texSubImage2D(3553,0,0,0,p.width,p.height,m,v,p.data)):i.texImage2D(3553,0,x,p.width,p.height,0,m,v,p.data);else if(a.isCompressedTexture)if(a.isCompressedArrayTexture){b&&S&&i.texStorage3D(35866,T,x,y[0].width,y[0].height,p.depth);for(let e=0,r=y.length;e<r;e++)t=y[e],1023!==a.format?null!==m?b?i.compressedTexSubImage3D(35866,e,0,0,0,t.width,t.height,p.depth,m,t.data,0,0):i.compressedTexImage3D(35866,e,x,t.width,t.height,p.depth,0,t.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):b?i.texSubImage3D(35866,e,0,0,0,t.width,t.height,p.depth,m,v,t.data):i.texImage3D(35866,e,x,t.width,t.height,p.depth,0,m,v,t.data)}else{b&&S&&i.texStorage2D(3553,T,x,y[0].width,y[0].height);for(let e=0,r=y.length;e<r;e++)t=y[e],1023!==a.format?null!==m?b?i.compressedTexSubImage2D(3553,e,0,0,t.width,t.height,m,t.data):i.compressedTexImage2D(3553,e,x,t.width,t.height,0,t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):b?i.texSubImage2D(3553,e,0,0,t.width,t.height,m,v,t.data):i.texImage2D(3553,e,x,t.width,t.height,0,m,v,t.data)}else if(a.isDataArrayTexture)b?(S&&i.texStorage3D(35866,T,x,p.width,p.height,p.depth),i.texSubImage3D(35866,0,0,0,0,p.width,p.height,p.depth,m,v,p.data)):i.texImage3D(35866,0,x,p.width,p.height,p.depth,0,m,v,p.data);else if(a.isData3DTexture)b?(S&&i.texStorage3D(32879,T,x,p.width,p.height,p.depth),i.texSubImage3D(32879,0,0,0,0,p.width,p.height,p.depth,m,v,p.data)):i.texImage3D(32879,0,x,p.width,p.height,p.depth,0,m,v,p.data);else if(a.isFramebufferTexture){if(S)if(b)i.texStorage2D(3553,T,x,p.width,p.height);else{let e=p.width,t=p.height;for(let r=0;r<T;r++)i.texImage2D(3553,r,x,e,t,0,m,v,null),e>>=1,t>>=1}}else if(y.length>0&&f){b&&S&&i.texStorage2D(3553,T,x,y[0].width,y[0].height);for(let e=0,r=y.length;e<r;e++)t=y[e],b?i.texSubImage2D(3553,e,0,0,m,v,t):i.texImage2D(3553,e,x,m,v,t);a.generateMipmaps=!1}else b?(S&&i.texStorage2D(3553,T,x,p.width,p.height),i.texSubImage2D(3553,0,0,0,m,v,p)):i.texImage2D(3553,0,x,m,v,p);D(a,f)&&I(o),d.__version=c.version,a.onUpdate&&a.onUpdate(a)}t.__version=a.version}function J(t,a,s,o,l){let h=n.convert(s.format,s.encoding),c=n.convert(s.type),u=N(s.internalFormat,h,c,s.encoding);r.get(a).__hasExternalTextures||(32879===l||35866===l?i.texImage3D(l,0,u,a.width,a.height,a.depth,0,h,c,null):i.texImage2D(l,0,u,a.width,a.height,0,h,c,null)),i.bindFramebuffer(36160,t),ee(a)?p.framebufferTexture2DMultisampleEXT(36160,o,l,r.get(s).__webglTexture,0,$(a)):(3553===l||l>=34069&&l<=34074)&&e.framebufferTexture2D(36160,o,l,r.get(s).__webglTexture,0),i.bindFramebuffer(36160,null)}function Z(t,i,r){if(e.bindRenderbuffer(36161,t),i.depthBuffer&&!i.stencilBuffer){let a=33189;if(r||ee(i)){let t=i.depthTexture;t&&t.isDepthTexture&&(1015===t.type?a=36012:1014===t.type&&(a=33190));let r=$(i);ee(i)?p.renderbufferStorageMultisampleEXT(36161,r,a,i.width,i.height):e.renderbufferStorageMultisample(36161,r,a,i.width,i.height)}else e.renderbufferStorage(36161,a,i.width,i.height);e.framebufferRenderbuffer(36160,36096,36161,t)}else if(i.depthBuffer&&i.stencilBuffer){let a=$(i);r&&!1===ee(i)?e.renderbufferStorageMultisample(36161,a,35056,i.width,i.height):ee(i)?p.renderbufferStorageMultisampleEXT(36161,a,35056,i.width,i.height):e.renderbufferStorage(36161,34041,i.width,i.height),e.framebufferRenderbuffer(36160,33306,36161,t)}else{let t=!0===i.isWebGLMultipleRenderTargets?i.texture:[i.texture];for(let a=0;a<t.length;a++){let s=t[a],o=n.convert(s.format,s.encoding),l=n.convert(s.type),h=N(s.internalFormat,o,l,s.encoding),c=$(i);r&&!1===ee(i)?e.renderbufferStorageMultisample(36161,c,h,i.width,i.height):ee(i)?p.renderbufferStorageMultisampleEXT(36161,c,h,i.width,i.height):e.renderbufferStorage(36161,h,i.width,i.height)}}e.bindRenderbuffer(36161,null)}function Q(t){let a=r.get(t),n=!0===t.isWebGLCubeRenderTarget;if(t.depthTexture&&!a.__autoAllocateDepthBuffer){if(n)throw Error("target.depthTexture not supported in Cube render targets");var s=a.__webglFramebuffer;if(t&&t.isWebGLCubeRenderTarget)throw Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(36160,s),!(t.depthTexture&&t.depthTexture.isDepthTexture))throw Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");r.get(t.depthTexture).__webglTexture&&t.depthTexture.image.width===t.width&&t.depthTexture.image.height===t.height||(t.depthTexture.image.width=t.width,t.depthTexture.image.height=t.height,t.depthTexture.needsUpdate=!0),G(t.depthTexture,0);let o=r.get(t.depthTexture).__webglTexture,l=$(t);if(1026===t.depthTexture.format)ee(t)?p.framebufferTexture2DMultisampleEXT(36160,36096,3553,o,0,l):e.framebufferTexture2D(36160,36096,3553,o,0);else if(1027===t.depthTexture.format)ee(t)?p.framebufferTexture2DMultisampleEXT(36160,33306,3553,o,0,l):e.framebufferTexture2D(36160,33306,3553,o,0);else throw Error("Unknown depthTexture format")}else if(n){a.__webglDepthbuffer=[];for(let r=0;r<6;r++)i.bindFramebuffer(36160,a.__webglFramebuffer[r]),a.__webglDepthbuffer[r]=e.createRenderbuffer(),Z(a.__webglDepthbuffer[r],t,!1)}else i.bindFramebuffer(36160,a.__webglFramebuffer),a.__webglDepthbuffer=e.createRenderbuffer(),Z(a.__webglDepthbuffer,t,!1);i.bindFramebuffer(36160,null)}function $(e){return Math.min(d,e.samples)}function ee(e){let i=r.get(e);return l&&e.samples>0&&!0===t.has("WEBGL_multisampled_render_to_texture")&&!1!==i.__useRenderToTexture}function et(e,i){let r=e.encoding,a=e.format,n=e.type;return!0===e.isCompressedTexture||!0===e.isVideoTexture||1035===e.format||r!==C&&(r===L?!1===l?!0===t.has("EXT_sRGB")&&1023===a?(e.format=1035,e.minFilter=M,e.generateMipmaps=!1):i=ImageUtils.sRGBToLinear(i):(1023!==a||1009!==n)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",r)),i}this.allocateTextureUnit=function(){let e=F;return e>=h&&console.warn("THREE.WebGLTextures: Trying to use "+e+" texture units while this GPU supports only "+h),F+=1,e},this.resetTextureUnits=function(){F=0},this.setTexture2D=G,this.setTexture2DArray=function(e,t){let a=r.get(e);if(e.version>0&&a.__version!==e.version)return void Y(a,e,t);i.bindTexture(35866,a.__webglTexture,33984+t)},this.setTexture3D=function(e,t){let a=r.get(e);if(e.version>0&&a.__version!==e.version)return void Y(a,e,t);i.bindTexture(32879,a.__webglTexture,33984+t)},this.setTextureCube=function(t,a){let s=r.get(t);if(t.version>0&&s.__version!==t.version)return void function(t,a,s){if(6!==a.image.length)return;let o=q(t,a),h=a.source;i.bindTexture(34067,t.__webglTexture,33984+s);let u=r.get(h);if(h.version!==u.__version||!0===o){let t;i.activeTexture(33984+s),e.pixelStorei(37440,a.flipY),e.pixelStorei(37441,a.premultiplyAlpha),e.pixelStorei(3317,a.unpackAlignment),e.pixelStorei(37443,0);let r=a.isCompressedTexture||a.image[0].isCompressedTexture,d=a.image[0]&&a.image[0].isDataTexture,p=[];for(let e=0;e<6;e++)r||d?p[e]=d?a.image[e].image:a.image[e]:p[e]=R(a.image[e],!1,!0,c),p[e]=et(a,p[e]);let f=p[0],m=P(f)||l,g=n.convert(a.format,a.encoding),v=n.convert(a.type),_=N(a.internalFormat,g,v,a.encoding),x=l&&!0!==a.isVideoTexture,y=void 0===u.__version||!0===o,M=O(a,f,m);if(X(34067,a,m),r){x&&y&&i.texStorage2D(34067,M,_,f.width,f.height);for(let e=0;e<6;e++){t=p[e].mipmaps;for(let r=0;r<t.length;r++){let n=t[r];1023!==a.format?null!==g?x?i.compressedTexSubImage2D(34069+e,r,0,0,n.width,n.height,g,n.data):i.compressedTexImage2D(34069+e,r,_,n.width,n.height,0,n.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):x?i.texSubImage2D(34069+e,r,0,0,n.width,n.height,g,v,n.data):i.texImage2D(34069+e,r,_,n.width,n.height,0,g,v,n.data)}}}else{t=a.mipmaps,x&&y&&(t.length>0&&M++,i.texStorage2D(34067,M,_,p[0].width,p[0].height));for(let e=0;e<6;e++)if(d){x?i.texSubImage2D(34069+e,0,0,0,p[e].width,p[e].height,g,v,p[e].data):i.texImage2D(34069+e,0,_,p[e].width,p[e].height,0,g,v,p[e].data);for(let r=0;r<t.length;r++){let a=t[r].image[e].image;x?i.texSubImage2D(34069+e,r+1,0,0,a.width,a.height,g,v,a.data):i.texImage2D(34069+e,r+1,_,a.width,a.height,0,g,v,a.data)}}else{x?i.texSubImage2D(34069+e,0,0,0,g,v,p[e]):i.texImage2D(34069+e,0,_,g,v,p[e]);for(let r=0;r<t.length;r++){let a=t[r];x?i.texSubImage2D(34069+e,r+1,0,0,g,v,a.image[e]):i.texImage2D(34069+e,r+1,_,g,v,a.image[e])}}}D(a,m)&&I(34067),u.__version=h.version,a.onUpdate&&a.onUpdate(a)}t.__version=a.version}(s,t,a);i.bindTexture(34067,s.__webglTexture,33984+a)},this.rebindTextures=function(e,t,i){let a=r.get(e);void 0!==t&&J(a.__webglFramebuffer,e,e.texture,36064,3553),void 0!==i&&Q(e)},this.setupRenderTarget=function(t){let o=t.texture,h=r.get(t),c=r.get(o);t.addEventListener("dispose",z),!0!==t.isWebGLMultipleRenderTargets&&(void 0===c.__webglTexture&&(c.__webglTexture=e.createTexture()),c.__version=o.version,s.memory.textures++);let u=!0===t.isWebGLCubeRenderTarget,d=!0===t.isWebGLMultipleRenderTargets,p=P(t)||l;if(u){h.__webglFramebuffer=[];for(let t=0;t<6;t++)h.__webglFramebuffer[t]=e.createFramebuffer()}else{if(h.__webglFramebuffer=e.createFramebuffer(),d)if(a.drawBuffers){let i=t.texture;for(let t=0,a=i.length;t<a;t++){let a=r.get(i[t]);void 0===a.__webglTexture&&(a.__webglTexture=e.createTexture(),s.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(l&&t.samples>0&&!1===ee(t)){let r=d?o:[o];h.__webglMultisampledFramebuffer=e.createFramebuffer(),h.__webglColorRenderbuffer=[],i.bindFramebuffer(36160,h.__webglMultisampledFramebuffer);for(let i=0;i<r.length;i++){let a=r[i];h.__webglColorRenderbuffer[i]=e.createRenderbuffer(),e.bindRenderbuffer(36161,h.__webglColorRenderbuffer[i]);let s=n.convert(a.format,a.encoding),o=n.convert(a.type),l=N(a.internalFormat,s,o,a.encoding,!0===t.isXRRenderTarget),c=$(t);e.renderbufferStorageMultisample(36161,c,l,t.width,t.height),e.framebufferRenderbuffer(36160,36064+i,36161,h.__webglColorRenderbuffer[i])}e.bindRenderbuffer(36161,null),t.depthBuffer&&(h.__webglDepthRenderbuffer=e.createRenderbuffer(),Z(h.__webglDepthRenderbuffer,t,!0)),i.bindFramebuffer(36160,null)}}if(u){i.bindTexture(34067,c.__webglTexture),X(34067,o,p);for(let e=0;e<6;e++)J(h.__webglFramebuffer[e],t,o,36064,34069+e);D(o,p)&&I(34067),i.unbindTexture()}else if(d){let e=t.texture;for(let a=0,n=e.length;a<n;a++){let n=e[a],s=r.get(n);i.bindTexture(3553,s.__webglTexture),X(3553,n,p),J(h.__webglFramebuffer,t,n,36064+a,3553),D(n,p)&&I(3553)}i.unbindTexture()}else{let e=3553;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(l?e=t.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),i.bindTexture(e,c.__webglTexture),X(e,o,p),J(h.__webglFramebuffer,t,o,36064,e),D(o,p)&&I(e),i.unbindTexture()}t.depthBuffer&&Q(t)},this.updateRenderTargetMipmap=function(e){let t=P(e)||l,a=!0===e.isWebGLMultipleRenderTargets?e.texture:[e.texture];for(let n=0,s=a.length;n<s;n++){let s=a[n];if(D(s,t)){let t=e.isWebGLCubeRenderTarget?34067:3553,a=r.get(s).__webglTexture;i.bindTexture(t,a),I(t),i.unbindTexture()}}},this.updateMultisampleRenderTarget=function(t){if(l&&t.samples>0&&!1===ee(t)){let a=t.isWebGLMultipleRenderTargets?t.texture:[t.texture],n=t.width,s=t.height,o=16384,l=[],h=t.stencilBuffer?33306:36096,c=r.get(t),u=!0===t.isWebGLMultipleRenderTargets;if(u)for(let t=0;t<a.length;t++)i.bindFramebuffer(36160,c.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(36160,36064+t,36161,null),i.bindFramebuffer(36160,c.__webglFramebuffer),e.framebufferTexture2D(36009,36064+t,3553,null,0);i.bindFramebuffer(36008,c.__webglMultisampledFramebuffer),i.bindFramebuffer(36009,c.__webglFramebuffer);for(let i=0;i<a.length;i++){l.push(36064+i),t.depthBuffer&&l.push(h);let d=void 0!==c.__ignoreDepthValues&&c.__ignoreDepthValues;if(!1===d&&(t.depthBuffer&&(o|=256),t.stencilBuffer&&(o|=1024)),u&&e.framebufferRenderbuffer(36008,36064,36161,c.__webglColorRenderbuffer[i]),!0===d&&(e.invalidateFramebuffer(36008,[h]),e.invalidateFramebuffer(36009,[h])),u){let t=r.get(a[i]).__webglTexture;e.framebufferTexture2D(36009,36064,3553,t,0)}e.blitFramebuffer(0,0,n,s,0,0,n,s,o,9728),f&&e.invalidateFramebuffer(36008,l)}if(i.bindFramebuffer(36008,null),i.bindFramebuffer(36009,null),u)for(let t=0;t<a.length;t++){i.bindFramebuffer(36160,c.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(36160,36064+t,36161,c.__webglColorRenderbuffer[t]);let n=r.get(a[t]).__webglTexture;i.bindFramebuffer(36160,c.__webglFramebuffer),e.framebufferTexture2D(36009,36064+t,3553,n,0)}i.bindFramebuffer(36009,c.__webglMultisampledFramebuffer)}},this.setupDepthRenderbuffer=Q,this.setupFrameBufferTexture=J,this.useMultisampledRTT=ee}function rL(e,t,i){let r=i.isWebGL2;return{convert:function(i,a=null){let n;if(1009===i)return 5121;if(1017===i)return 32819;if(1018===i)return 32820;if(1010===i)return 5120;if(1011===i)return 5122;if(1012===i)return 5123;if(1013===i)return 5124;if(1014===i)return 5125;if(1015===i)return 5126;if(1016===i)return r?5131:null!==(n=t.get("OES_texture_half_float"))?n.HALF_FLOAT_OES:null;if(1021===i)return 6406;if(1023===i)return 6408;if(1024===i)return 6409;if(1025===i)return 6410;if(1026===i)return 6402;if(1027===i)return 34041;if(1022===i)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(1035===i)return null!==(n=t.get("EXT_sRGB"))?n.SRGB_ALPHA_EXT:null;if(1028===i)return 6403;if(1029===i)return 36244;if(1030===i)return 33319;if(1031===i)return 33320;if(1033===i)return 36249;if(33776===i||33777===i||33778===i||33779===i)if(a===L){if(null===(n=t.get("WEBGL_compressed_texture_s3tc_srgb")))return null;if(33776===i)return n.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(33777===i)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(33778===i)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(33779===i)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{if(null===(n=t.get("WEBGL_compressed_texture_s3tc")))return null;if(33776===i)return n.COMPRESSED_RGB_S3TC_DXT1_EXT;if(33777===i)return n.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(33778===i)return n.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(33779===i)return n.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(35840===i||35841===i||35842===i||35843===i){if(null===(n=t.get("WEBGL_compressed_texture_pvrtc")))return null;if(35840===i)return n.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(35841===i)return n.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(35842===i)return n.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(35843===i)return n.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(36196===i)return null!==(n=t.get("WEBGL_compressed_texture_etc1"))?n.COMPRESSED_RGB_ETC1_WEBGL:null;if(37492===i||37496===i){if(null===(n=t.get("WEBGL_compressed_texture_etc")))return null;if(37492===i)return a===L?n.COMPRESSED_SRGB8_ETC2:n.COMPRESSED_RGB8_ETC2;if(37496===i)return a===L?n.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:n.COMPRESSED_RGBA8_ETC2_EAC}if(37808===i||37809===i||37810===i||37811===i||37812===i||37813===i||37814===i||37815===i||37816===i||37817===i||37818===i||37819===i||37820===i||37821===i){if(null===(n=t.get("WEBGL_compressed_texture_astc")))return null;if(37808===i)return a===L?n.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:n.COMPRESSED_RGBA_ASTC_4x4_KHR;if(37809===i)return a===L?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:n.COMPRESSED_RGBA_ASTC_5x4_KHR;if(37810===i)return a===L?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:n.COMPRESSED_RGBA_ASTC_5x5_KHR;if(37811===i)return a===L?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:n.COMPRESSED_RGBA_ASTC_6x5_KHR;if(37812===i)return a===L?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:n.COMPRESSED_RGBA_ASTC_6x6_KHR;if(37813===i)return a===L?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:n.COMPRESSED_RGBA_ASTC_8x5_KHR;if(37814===i)return a===L?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:n.COMPRESSED_RGBA_ASTC_8x6_KHR;if(37815===i)return a===L?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:n.COMPRESSED_RGBA_ASTC_8x8_KHR;if(37816===i)return a===L?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:n.COMPRESSED_RGBA_ASTC_10x5_KHR;if(37817===i)return a===L?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:n.COMPRESSED_RGBA_ASTC_10x6_KHR;if(37818===i)return a===L?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:n.COMPRESSED_RGBA_ASTC_10x8_KHR;if(37819===i)return a===L?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:n.COMPRESSED_RGBA_ASTC_10x10_KHR;if(37820===i)return a===L?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:n.COMPRESSED_RGBA_ASTC_12x10_KHR;if(37821===i)return a===L?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:n.COMPRESSED_RGBA_ASTC_12x12_KHR}if(36492===i){if(null===(n=t.get("EXT_texture_compression_bptc")))return null;if(36492===i)return a===L?n.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:n.COMPRESSED_RGBA_BPTC_UNORM_EXT}return 1020===i?r?34042:null!==(n=t.get("WEBGL_depth_texture"))?n.UNSIGNED_INT_24_8_WEBGL:null:void 0!==e[i]?e[i]:null}}}let ArrayCamera=class ArrayCamera extends PerspectiveCamera{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}};let Group=class Group extends Object3D{constructor(){super(),this.isGroup=!0,this.type="Group"}};let rR={type:"move"};let WebXRController=class WebXRController{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return null===this._hand&&(this._hand=new Group,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return null===this._targetRay&&(this._targetRay=new Group,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Vector3,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Vector3),this._targetRay}getGripSpace(){return null===this._grip&&(this._grip=new Group,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Vector3,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Vector3),this._grip}dispatchEvent(e){return null!==this._targetRay&&this._targetRay.dispatchEvent(e),null!==this._grip&&this._grip.dispatchEvent(e),null!==this._hand&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),null!==this._targetRay&&(this._targetRay.visible=!1),null!==this._grip&&(this._grip.visible=!1),null!==this._hand&&(this._hand.visible=!1),this}update(e,t,i){let r=null,a=null,n=null,s=this._targetRay,o=this._grip,l=this._hand;if(e&&"visible-blurred"!==t.session.visibilityState){if(l&&e.hand){for(let r of(n=!0,e.hand.values())){let e=t.getJointPose(r,i),a=this._getHandJoint(l,r);null!==e&&(a.matrix.fromArray(e.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.jointRadius=e.radius),a.visible=null!==e}let r=l.joints["index-finger-tip"],a=l.joints["thumb-tip"],s=r.position.distanceTo(a.position);l.inputState.pinching&&s>.025?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&s<=.015&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else null!==o&&e.gripSpace&&null!==(a=t.getPose(e.gripSpace,i))&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1);null!==s&&(null===(r=t.getPose(e.targetRaySpace,i))&&null!==a&&(r=a),null!==r&&(s.matrix.fromArray(r.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),r.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(r.linearVelocity)):s.hasLinearVelocity=!1,r.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(r.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(rR)))}return null!==s&&(s.visible=null!==r),null!==o&&(o.visible=null!==a),null!==l&&(l.visible=null!==n),this}_getHandJoint(e,t){if(void 0===e.joints[t.jointName]){let i=new Group;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}};let DepthTexture=class DepthTexture extends Texture{constructor(e,t,i,r,a,n,s,o,l,h){if(1026!==(h=void 0!==h?h:1026)&&1027!==h)throw Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");void 0===i&&1026===h&&(i=1014),void 0===i&&1027===h&&(i=1020),super(null,r,a,n,s,o,h,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=void 0!==s?s:_,this.minFilter=void 0!==o?o:_,this.flipY=!1,this.generateMipmaps=!1}};let WebXRManager=class WebXRManager extends EventDispatcher{constructor(e,t){super();let i=this,r=null,a=1,n=null,s="local-floor",o=null,l=null,h=null,c=null,u=null,d=null,p=t.getContextAttributes(),f=null,m=null,g=[],v=[],_=new Set,x=new Map,y=new PerspectiveCamera;y.layers.enable(1),y.viewport=new Vector4;let M=new PerspectiveCamera;M.layers.enable(2),M.viewport=new Vector4;let b=[y,M],S=new ArrayCamera;S.layers.enable(1),S.layers.enable(2);let T=null,w=null;function E(e){let t=v.indexOf(e.inputSource);if(-1===t)return;let i=g[t];void 0!==i&&i.dispatchEvent({type:e.type,data:e.inputSource})}function A(){r.removeEventListener("select",E),r.removeEventListener("selectstart",E),r.removeEventListener("selectend",E),r.removeEventListener("squeeze",E),r.removeEventListener("squeezestart",E),r.removeEventListener("squeezeend",E),r.removeEventListener("end",A),r.removeEventListener("inputsourceschange",C);for(let e=0;e<g.length;e++){let t=v[e];null!==t&&(v[e]=null,g[e].disconnect(t))}T=null,w=null,e.setRenderTarget(f),u=null,c=null,h=null,r=null,m=null,I.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}function C(e){for(let t=0;t<e.removed.length;t++){let i=e.removed[t],r=v.indexOf(i);r>=0&&(v[r]=null,g[r].disconnect(i))}for(let t=0;t<e.added.length;t++){let i=e.added[t],r=v.indexOf(i);if(-1===r){for(let e=0;e<g.length;e++)if(e>=v.length){v.push(i),r=e;break}else if(null===v[e]){v[e]=i,r=e;break}if(-1===r)break}let a=g[r];a&&a.connect(i)}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=g[e];return void 0===t&&(t=new WebXRController,g[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=g[e];return void 0===t&&(t=new WebXRController,g[e]=t),t.getGripSpace()},this.getHand=function(e){let t=g[e];return void 0===t&&(t=new WebXRController,g[e]=t),t.getHandSpace()},this.setFramebufferScaleFactor=function(e){a=e,!0===i.isPresenting&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(e){s=e,!0===i.isPresenting&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return o||n},this.setReferenceSpace=function(e){o=e},this.getBaseLayer=function(){return null!==c?c:u},this.getBinding=function(){return h},this.getFrame=function(){return d},this.getSession=function(){return r},this.setSession=async function(l){if(null!==(r=l)){if(f=e.getRenderTarget(),r.addEventListener("select",E),r.addEventListener("selectstart",E),r.addEventListener("selectend",E),r.addEventListener("squeeze",E),r.addEventListener("squeezestart",E),r.addEventListener("squeezeend",E),r.addEventListener("end",A),r.addEventListener("inputsourceschange",C),!0!==p.xrCompatible&&await t.makeXRCompatible(),void 0===r.renderState.layers||!1===e.capabilities.isWebGL2){let i={antialias:void 0!==r.renderState.layers||p.antialias,alpha:p.alpha,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:a};u=new XRWebGLLayer(r,t,i),r.updateRenderState({baseLayer:u}),m=new WebGLRenderTarget(u.framebufferWidth,u.framebufferHeight,{format:1023,type:1009,encoding:e.outputEncoding,stencilBuffer:p.stencil})}else{let i=null,n=null,s=null;p.depth&&(s=p.stencil?35056:33190,i=p.stencil?1027:1026,n=p.stencil?1020:1014);let o={colorFormat:32856,depthFormat:s,scaleFactor:a};c=(h=new XRWebGLBinding(r,t)).createProjectionLayer(o),r.updateRenderState({layers:[c]}),m=new WebGLRenderTarget(c.textureWidth,c.textureHeight,{format:1023,type:1009,depthTexture:new DepthTexture(c.textureWidth,c.textureHeight,n,void 0,void 0,void 0,void 0,void 0,void 0,i),stencilBuffer:p.stencil,encoding:e.outputEncoding,samples:4*!!p.antialias}),e.properties.get(m).__ignoreDepthValues=c.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(1),o=null,n=await r.requestReferenceSpace(s),I.setContext(r),I.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};let L=new Vector3,R=new Vector3;function P(e,t){null===t?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(null===r)return;S.near=M.near=y.near=e.near,S.far=M.far=y.far=e.far,(T!==S.near||w!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),T=S.near,w=S.far);let t=e.parent,i=S.cameras;P(S,t);for(let e=0;e<i.length;e++)P(i[e],t);S.matrixWorld.decompose(S.position,S.quaternion,S.scale),e.matrix.copy(S.matrix),e.matrix.decompose(e.position,e.quaternion,e.scale);let a=e.children;for(let e=0,t=a.length;e<t;e++)a[e].updateMatrixWorld(!0);2===i.length?function(e,t,i){L.setFromMatrixPosition(t.matrixWorld),R.setFromMatrixPosition(i.matrixWorld);let r=L.distanceTo(R),a=t.projectionMatrix.elements,n=i.projectionMatrix.elements,s=a[14]/(a[10]-1),o=a[14]/(a[10]+1),l=(a[9]+1)/a[5],h=(a[9]-1)/a[5],c=(a[8]-1)/a[0],u=(n[8]+1)/n[0],d=r/(-c+u),p=-(d*c);t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(p),e.translateZ(d),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert();let f=s+d,m=o+d;e.projectionMatrix.makePerspective(s*c-p,s*u+(r-p),l*o/m*f,h*o/m*f,f,m)}(S,y,M):S.projectionMatrix.copy(y.projectionMatrix)},this.getCamera=function(){return S},this.getFoveation=function(){return null!==c?c.fixedFoveation:null!==u?u.fixedFoveation:void 0},this.setFoveation=function(e){null!==c&&(c.fixedFoveation=e),null!==u&&void 0!==u.fixedFoveation&&(u.fixedFoveation=e)},this.getPlanes=function(){return _};let D=null,I=new tV;I.setAnimationLoop(function(t,r){if(l=r.getViewerPose(o||n),d=r,null!==l){let t=l.views;null!==u&&(e.setRenderTargetFramebuffer(m,u.framebuffer),e.setRenderTarget(m));let i=!1;t.length!==S.cameras.length&&(S.cameras.length=0,i=!0);for(let r=0;r<t.length;r++){let a=t[r],n=null;if(null!==u)n=u.getViewport(a);else{let t=h.getViewSubImage(c,a);n=t.viewport,0===r&&(e.setRenderTargetTextures(m,t.colorTexture,c.ignoreDepthValues?void 0:t.depthStencilTexture),e.setRenderTarget(m))}let s=b[r];void 0===s&&((s=new PerspectiveCamera).layers.enable(r),s.viewport=new Vector4,b[r]=s),s.matrix.fromArray(a.transform.matrix),s.projectionMatrix.fromArray(a.projectionMatrix),s.viewport.set(n.x,n.y,n.width,n.height),0===r&&S.matrix.copy(s.matrix),!0===i&&S.cameras.push(s)}}for(let e=0;e<g.length;e++){let t=v[e],i=g[e];null!==t&&void 0!==i&&i.update(t,r,o||n)}if(D&&D(t,r),r.detectedPlanes){i.dispatchEvent({type:"planesdetected",data:r.detectedPlanes});let e=null;for(let t of _)r.detectedPlanes.has(t)||(null===e&&(e=[]),e.push(t));if(null!==e)for(let t of e)_.delete(t),x.delete(t),i.dispatchEvent({type:"planeremoved",data:t});for(let e of r.detectedPlanes)if(_.has(e)){let t=x.get(e);e.lastChangedTime>t&&(x.set(e,e.lastChangedTime),i.dispatchEvent({type:"planechanged",data:e}))}else _.add(e),x.set(e,r.lastChangedTime),i.dispatchEvent({type:"planeadded",data:e})}d=null}),this.setAnimationLoop=function(e){D=e},this.dispose=function(){}}};function rP(e,t){function i(i,r){let a,n;i.opacity.value=r.opacity,r.color&&i.diffuse.value.copy(r.color),r.emissive&&i.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(i.map.value=r.map),r.alphaMap&&(i.alphaMap.value=r.alphaMap),r.bumpMap&&(i.bumpMap.value=r.bumpMap,i.bumpScale.value=r.bumpScale,1===r.side&&(i.bumpScale.value*=-1)),r.displacementMap&&(i.displacementMap.value=r.displacementMap,i.displacementScale.value=r.displacementScale,i.displacementBias.value=r.displacementBias),r.emissiveMap&&(i.emissiveMap.value=r.emissiveMap),r.normalMap&&(i.normalMap.value=r.normalMap,i.normalScale.value.copy(r.normalScale),1===r.side&&i.normalScale.value.negate()),r.specularMap&&(i.specularMap.value=r.specularMap),r.alphaTest>0&&(i.alphaTest.value=r.alphaTest);let s=t.get(r).envMap;if(s&&(i.envMap.value=s,i.flipEnvMap.value=s.isCubeTexture&&!1===s.isRenderTargetTexture?-1:1,i.reflectivity.value=r.reflectivity,i.ior.value=r.ior,i.refractionRatio.value=r.refractionRatio),r.lightMap){i.lightMap.value=r.lightMap;let t=!0!==e.physicallyCorrectLights?Math.PI:1;i.lightMapIntensity.value=r.lightMapIntensity*t}r.aoMap&&(i.aoMap.value=r.aoMap,i.aoMapIntensity.value=r.aoMapIntensity),r.map?a=r.map:r.specularMap?a=r.specularMap:r.displacementMap?a=r.displacementMap:r.normalMap?a=r.normalMap:r.bumpMap?a=r.bumpMap:r.roughnessMap?a=r.roughnessMap:r.metalnessMap?a=r.metalnessMap:r.alphaMap?a=r.alphaMap:r.emissiveMap?a=r.emissiveMap:r.clearcoatMap?a=r.clearcoatMap:r.clearcoatNormalMap?a=r.clearcoatNormalMap:r.clearcoatRoughnessMap?a=r.clearcoatRoughnessMap:r.iridescenceMap?a=r.iridescenceMap:r.iridescenceThicknessMap?a=r.iridescenceThicknessMap:r.specularIntensityMap?a=r.specularIntensityMap:r.specularColorMap?a=r.specularColorMap:r.transmissionMap?a=r.transmissionMap:r.thicknessMap?a=r.thicknessMap:r.sheenColorMap?a=r.sheenColorMap:r.sheenRoughnessMap&&(a=r.sheenRoughnessMap),void 0!==a&&(a.isWebGLRenderTarget&&(a=a.texture),!0===a.matrixAutoUpdate&&a.updateMatrix(),i.uvTransform.value.copy(a.matrix)),r.aoMap?n=r.aoMap:r.lightMap&&(n=r.lightMap),void 0!==n&&(n.isWebGLRenderTarget&&(n=n.texture),!0===n.matrixAutoUpdate&&n.updateMatrix(),i.uv2Transform.value.copy(n.matrix))}return{refreshFogUniforms:function(t,i){i.color.getRGB(t.fogColor.value,tC(e)),i.isFog?(t.fogNear.value=i.near,t.fogFar.value=i.far):i.isFogExp2&&(t.fogDensity.value=i.density)},refreshMaterialUniforms:function(e,r,a,n,s){var o,l,h,c,u,d,p,f,m,g,v,_,x,y,M,b,S,T,w,E,A,C,L;let R,P;r.isMeshBasicMaterial||r.isMeshLambertMaterial?i(e,r):r.isMeshToonMaterial?(i(e,r),o=e,(l=r).gradientMap&&(o.gradientMap.value=l.gradientMap)):r.isMeshPhongMaterial?(i(e,r),h=e,c=r,h.specular.value.copy(c.specular),h.shininess.value=Math.max(c.shininess,1e-4)):r.isMeshStandardMaterial?(i(e,r),u=e,d=r,u.roughness.value=d.roughness,u.metalness.value=d.metalness,d.roughnessMap&&(u.roughnessMap.value=d.roughnessMap),d.metalnessMap&&(u.metalnessMap.value=d.metalnessMap),t.get(d).envMap&&(u.envMapIntensity.value=d.envMapIntensity),r.isMeshPhysicalMaterial&&(p=e,f=r,m=s,p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap)),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap),f.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),p.clearcoatNormalMap.value=f.clearcoatNormalMap,1===f.side&&p.clearcoatNormalScale.value.negate())),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap)),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=m.texture,p.transmissionSamplerSize.value.set(m.width,m.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap))):r.isMeshMatcapMaterial?(i(e,r),g=e,(v=r).matcap&&(g.matcap.value=v.matcap)):r.isMeshDepthMaterial?i(e,r):r.isMeshDistanceMaterial?(i(e,r),_=e,x=r,_.referencePosition.value.copy(x.referencePosition),_.nearDistance.value=x.nearDistance,_.farDistance.value=x.farDistance):r.isMeshNormalMaterial?i(e,r):r.isLineBasicMaterial?(y=e,M=r,y.diffuse.value.copy(M.color),y.opacity.value=M.opacity,r.isLineDashedMaterial&&(b=e,S=r,b.dashSize.value=S.dashSize,b.totalSize.value=S.dashSize+S.gapSize,b.scale.value=S.scale)):r.isPointsMaterial?(T=e,w=r,E=a,A=n,T.diffuse.value.copy(w.color),T.opacity.value=w.opacity,T.size.value=w.size*E,T.scale.value=.5*A,w.map&&(T.map.value=w.map),w.alphaMap&&(T.alphaMap.value=w.alphaMap),w.alphaTest>0&&(T.alphaTest.value=w.alphaTest),w.map?R=w.map:w.alphaMap&&(R=w.alphaMap),void 0!==R&&(!0===R.matrixAutoUpdate&&R.updateMatrix(),T.uvTransform.value.copy(R.matrix))):r.isSpriteMaterial?(C=e,L=r,C.diffuse.value.copy(L.color),C.opacity.value=L.opacity,C.rotation.value=L.rotation,L.map&&(C.map.value=L.map),L.alphaMap&&(C.alphaMap.value=L.alphaMap),L.alphaTest>0&&(C.alphaTest.value=L.alphaTest),L.map?P=L.map:L.alphaMap&&(P=L.alphaMap),void 0!==P&&(!0===P.matrixAutoUpdate&&P.updateMatrix(),C.uvTransform.value.copy(P.matrix))):r.isShadowMaterial?(e.color.value.copy(r.color),e.opacity.value=r.opacity):r.isShaderMaterial&&(r.uniformsNeedUpdate=!1)}}}function rD(e,t,i,r){let a={},n={},s=[],o=i.isWebGL2?e.getParameter(35375):0;function l(e){let t={boundary:0,storage:0};return"number"==typeof e?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",e),t}function h(t){let i=t.target;i.removeEventListener("dispose",h);let r=s.indexOf(i.__bindingPointIndex);s.splice(r,1),e.deleteBuffer(a[i.id]),delete a[i.id],delete n[i.id]}return{bind:function(e,t){let i=t.program;r.uniformBlockBinding(e,i)},update:function(i,c){let u=a[i.id];void 0===u&&(function(e){let t=e.uniforms,i=0,r=0;for(let e=0,a=t.length;e<a;e++){let a=t[e],n={boundary:0,storage:0},s=Array.isArray(a.value)?a.value:[a.value];for(let e=0,t=s.length;e<t;e++){let t=l(s[e]);n.boundary+=t.boundary,n.storage+=t.storage}if(a.__data=new Float32Array(n.storage/Float32Array.BYTES_PER_ELEMENT),a.__offset=i,e>0){let e=16-(r=i%16);0!==r&&e-n.boundary<0&&(a.__offset=i+=16-r)}i+=n.storage}(r=i%16)>0&&(i+=16-r),e.__size=i,e.__cache={}}(i),u=function(t){let i=function(){for(let e=0;e<o;e++)if(-1===s.indexOf(e))return s.push(e),e;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}();t.__bindingPointIndex=i;let r=e.createBuffer(),a=t.__size,n=t.usage;return e.bindBuffer(35345,r),e.bufferData(35345,a,n),e.bindBuffer(35345,null),e.bindBufferBase(35345,i,r),r}(i),a[i.id]=u,i.addEventListener("dispose",h));let d=c.program;r.updateUBOMapping(i,d);let p=t.render.frame;n[i.id]!==p&&(function(t){let i=a[t.id],r=t.uniforms,n=t.__cache;e.bindBuffer(35345,i);for(let t=0,i=r.length;t<i;t++){let i=r[t];if(!0===function(e,t,i){let r=e.value;if(void 0===i[t]){if("number"==typeof r)i[t]=r;else{let e=Array.isArray(r)?r:[r],a=[];for(let t=0;t<e.length;t++)a.push(e[t].clone());i[t]=a}return!0}if("number"==typeof r){if(i[t]!==r)return i[t]=r,!0}else{let e=Array.isArray(i[t])?i[t]:[i[t]],a=Array.isArray(r)?r:[r];for(let t=0;t<e.length;t++){let i=e[t];if(!1===i.equals(a[t]))return i.copy(a[t]),!0}}return!1}(i,t,n)){let t=i.__offset,r=Array.isArray(i.value)?i.value:[i.value],a=0;for(let n=0;n<r.length;n++){let s=r[n],o=l(s);"number"==typeof s?(i.__data[0]=s,e.bufferSubData(35345,t+a,i.__data)):s.isMatrix3?(i.__data[0]=s.elements[0],i.__data[1]=s.elements[1],i.__data[2]=s.elements[2],i.__data[3]=s.elements[0],i.__data[4]=s.elements[3],i.__data[5]=s.elements[4],i.__data[6]=s.elements[5],i.__data[7]=s.elements[0],i.__data[8]=s.elements[6],i.__data[9]=s.elements[7],i.__data[10]=s.elements[8],i.__data[11]=s.elements[0]):(s.toArray(i.__data,a),a+=o.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(35345,t,i.__data)}}e.bindBuffer(35345,null)}(i),n[i.id]=p)},dispose:function(){for(let t in a)e.deleteBuffer(a[t]);s=[],a={},n={}}}}function rI(e={}){let t,i,r,a,n,o,l,h,c,u,d,p,f,m,g,v,_,x,y,M,b,T,w,E,A;this.isWebGLRenderer=!0;let L=void 0!==e.canvas?e.canvas:function(){let e=K("canvas");return e.style.display="block",e}(),R=void 0!==e.context?e.context:null,P=void 0===e.depth||e.depth,D=void 0===e.stencil||e.stencil,I=void 0!==e.antialias&&e.antialias,N=void 0===e.premultipliedAlpha||e.premultipliedAlpha,O=void 0!==e.preserveDrawingBuffer&&e.preserveDrawingBuffer,U=void 0!==e.powerPreference?e.powerPreference:"default",V=void 0!==e.failIfMajorPerformanceCaveat&&e.failIfMajorPerformanceCaveat;t=null!==R?R.getContextAttributes().alpha:void 0!==e.alpha&&e.alpha;let z=null,B=null,F=[],k=[];this.domElement=L,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=C,this.physicallyCorrectLights=!1,this.toneMapping=0,this.toneMappingExposure=1;let G=this,W=!1,j=0,X=0,q=null,Y=-1,J=null,Z=new Vector4,Q=new Vector4,$=null,ee=L.width,et=L.height,ei=1,er=null,ea=null,en=new Vector4(0,0,ee,et),es=new Vector4(0,0,ee,et),eo=!1,el=new Frustum,eh=!1,ec=!1,eu=null,ed=new Matrix4,ep=new Vector2,ef=new Vector3,em={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function eg(){return null===q?ei:1}let ev=R;function e_(e,t){for(let i=0;i<e.length;i++){let r=e[i],a=L.getContext(r,t);if(null!==a)return a}return null}try{if("setAttribute"in L&&L.setAttribute("data-engine","three.js r148"),L.addEventListener("webglcontextlost",eM,!1),L.addEventListener("webglcontextrestored",eb,!1),L.addEventListener("webglcontextcreationerror",eS,!1),null===ev){let e=["webgl2","webgl","experimental-webgl"];if(!0===G.isWebGL1Renderer&&e.shift(),ev=e_(e,{alpha:!0,depth:P,stencil:D,antialias:I,premultipliedAlpha:N,preserveDrawingBuffer:O,powerPreference:U,failIfMajorPerformanceCaveat:V}),null===ev)if(e_(e))throw Error("Error creating WebGL context with your selected attributes.");else throw Error("Error creating WebGL context.")}void 0===ev.getShaderPrecisionFormat&&(ev.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(e){throw console.error("THREE.WebGLRenderer: "+e.message),e}function ex(){i=new t9(ev),r=new tX(ev,i,e),i.init(r),w=new rL(ev,i,r),a=new rA(ev,i,r),n=new it,o=new rp,l=new rC(ev,i,a,o,r,w,n),h=new tY(G),c=new t8(G),u=new tz(ev,r),E=new tW(ev,i,u,r),d=new t7(ev,u,n,E),p=new is(ev,d,u,n),M=new ia(ev,r,l),_=new tq(o),f=new rd(G,h,c,i,r,E,_),m=new rP(G,o),g=new rv,v=new rS(i,r),y=new tH(G,h,c,a,p,t,N),x=new rE(G,p,r),A=new rD(ev,n,r,a),b=new tj(ev,i,n,r),T=new ie(ev,i,n,r),n.programs=f.programs,G.capabilities=r,G.extensions=i,G.properties=o,G.renderLists=g,G.shadowMap=x,G.state=a,G.info=n}ex();let ey=new WebXRManager(G,ev);function eM(e){e.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),W=!0}function eb(){console.log("THREE.WebGLRenderer: Context Restored."),W=!1;let e=n.autoReset,t=x.enabled,i=x.autoUpdate,r=x.needsUpdate,a=x.type;ex(),n.autoReset=e,x.enabled=t,x.autoUpdate=i,x.needsUpdate=r,x.type=a}function eS(e){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",e.statusMessage)}function eT(e){var t;let i=e.target;i.removeEventListener("dispose",eT),function(e){let t=o.get(e).programs;void 0!==t&&(t.forEach(function(e){f.releaseProgram(e)}),e.isShaderMaterial&&f.releaseShaderCache(e))}(t=i),o.remove(t)}this.xr=ey,this.getContext=function(){return ev},this.getContextAttributes=function(){return ev.getContextAttributes()},this.forceContextLoss=function(){let e=i.get("WEBGL_lose_context");e&&e.loseContext()},this.forceContextRestore=function(){let e=i.get("WEBGL_lose_context");e&&e.restoreContext()},this.getPixelRatio=function(){return ei},this.setPixelRatio=function(e){void 0!==e&&(ei=e,this.setSize(ee,et,!1))},this.getSize=function(e){return e.set(ee,et)},this.setSize=function(e,t,i){if(ey.isPresenting)return void console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");ee=e,et=t,L.width=Math.floor(e*ei),L.height=Math.floor(t*ei),!1!==i&&(L.style.width=e+"px",L.style.height=t+"px"),this.setViewport(0,0,e,t)},this.getDrawingBufferSize=function(e){return e.set(ee*ei,et*ei).floor()},this.setDrawingBufferSize=function(e,t,i){ee=e,et=t,ei=i,L.width=Math.floor(e*i),L.height=Math.floor(t*i),this.setViewport(0,0,e,t)},this.getCurrentViewport=function(e){return e.copy(Z)},this.getViewport=function(e){return e.copy(en)},this.setViewport=function(e,t,i,r){e.isVector4?en.set(e.x,e.y,e.z,e.w):en.set(e,t,i,r),a.viewport(Z.copy(en).multiplyScalar(ei).floor())},this.getScissor=function(e){return e.copy(es)},this.setScissor=function(e,t,i,r){e.isVector4?es.set(e.x,e.y,e.z,e.w):es.set(e,t,i,r),a.scissor(Q.copy(es).multiplyScalar(ei).floor())},this.getScissorTest=function(){return eo},this.setScissorTest=function(e){a.setScissorTest(eo=e)},this.setOpaqueSort=function(e){er=e},this.setTransparentSort=function(e){ea=e},this.getClearColor=function(e){return e.copy(y.getClearColor())},this.setClearColor=function(){y.setClearColor.apply(y,arguments)},this.getClearAlpha=function(){return y.getClearAlpha()},this.setClearAlpha=function(){y.setClearAlpha.apply(y,arguments)},this.clear=function(e=!0,t=!0,i=!0){let r=0;e&&(r|=16384),t&&(r|=256),i&&(r|=1024),ev.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){L.removeEventListener("webglcontextlost",eM,!1),L.removeEventListener("webglcontextrestored",eb,!1),L.removeEventListener("webglcontextcreationerror",eS,!1),g.dispose(),v.dispose(),o.dispose(),h.dispose(),c.dispose(),p.dispose(),E.dispose(),A.dispose(),f.dispose(),ey.dispose(),ey.removeEventListener("sessionstart",eE),ey.removeEventListener("sessionend",eA),eu&&(eu.dispose(),eu=null),eC.stop()},this.renderBufferDirect=function(e,t,i,n,s,p){let f;null===t&&(t=em);let g=s.isMesh&&0>s.matrixWorld.determinant(),v=function(e,t,i,n,s){var u,d;!0!==t.isScene&&(t=em),l.resetTextureUnits();let p=t.fog,f=n.isMeshStandardMaterial?t.environment:null,g=null===q?G.outputEncoding:!0===q.isXRRenderTarget?q.texture.encoding:C,v=(n.isMeshStandardMaterial?c:h).get(n.envMap||f),x=!0===n.vertexColors&&!!i.attributes.color&&4===i.attributes.color.itemSize,y=!!n.normalMap&&!!i.attributes.tangent,b=!!i.morphAttributes.position,S=!!i.morphAttributes.normal,T=!!i.morphAttributes.color,w=n.toneMapped?G.toneMapping:0,E=i.morphAttributes.position||i.morphAttributes.normal||i.morphAttributes.color,L=void 0!==E?E.length:0,R=o.get(n),P=B.state.lights;if(!0===eh&&(!0===ec||e!==J)){let t=e===J&&n.id===Y;_.setState(n,e,t)}let D=!1;n.version===R.__version?R.needsLights&&R.lightsStateVersion!==P.state.version||R.outputEncoding!==g||s.isInstancedMesh&&!1===R.instancing?D=!0:s.isInstancedMesh||!0!==R.instancing?s.isSkinnedMesh&&!1===R.skinning?D=!0:s.isSkinnedMesh||!0!==R.skinning?R.envMap!==v||!0===n.fog&&R.fog!==p||void 0!==R.numClippingPlanes&&(R.numClippingPlanes!==_.numPlanes||R.numIntersection!==_.numIntersection)||R.vertexAlphas!==x||R.vertexTangents!==y||R.morphTargets!==b||R.morphNormals!==S||R.morphColors!==T||R.toneMapping!==w?D=!0:!0===r.isWebGL2&&R.morphTargetsCount!==L&&(D=!0):D=!0:D=!0:(D=!0,R.__version=n.version);let I=R.currentProgram;!0===D&&(I=eP(n,t,s));let N=!1,O=!1,U=!1,V=I.getUniforms(),z=R.uniforms;if(a.useProgram(I.program)&&(N=!0,O=!0,U=!0),n.id!==Y&&(Y=n.id,O=!0),N||J!==e){if(V.setValue(ev,"projectionMatrix",e.projectionMatrix),r.logarithmicDepthBuffer&&V.setValue(ev,"logDepthBufFC",2/(Math.log(e.far+1)/Math.LN2)),J!==e&&(J=e,O=!0,U=!0),n.isShaderMaterial||n.isMeshPhongMaterial||n.isMeshToonMaterial||n.isMeshStandardMaterial||n.envMap){let t=V.map.cameraPosition;void 0!==t&&t.setValue(ev,ef.setFromMatrixPosition(e.matrixWorld))}(n.isMeshPhongMaterial||n.isMeshToonMaterial||n.isMeshLambertMaterial||n.isMeshBasicMaterial||n.isMeshStandardMaterial||n.isShaderMaterial)&&V.setValue(ev,"isOrthographic",!0===e.isOrthographicCamera),(n.isMeshPhongMaterial||n.isMeshToonMaterial||n.isMeshLambertMaterial||n.isMeshBasicMaterial||n.isMeshStandardMaterial||n.isShaderMaterial||n.isShadowMaterial||s.isSkinnedMesh)&&V.setValue(ev,"viewMatrix",e.matrixWorldInverse)}if(s.isSkinnedMesh){V.setOptional(ev,s,"bindMatrix"),V.setOptional(ev,s,"bindMatrixInverse");let e=s.skeleton;e&&(r.floatVertexTextures?(null===e.boneTexture&&e.computeBoneTexture(),V.setValue(ev,"boneTexture",e.boneTexture,l),V.setValue(ev,"boneTextureSize",e.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}let F=i.morphAttributes;if((void 0!==F.position||void 0!==F.normal||void 0!==F.color&&!0===r.isWebGL2)&&M.update(s,i,n,I),(O||R.receiveShadow!==s.receiveShadow)&&(R.receiveShadow=s.receiveShadow,V.setValue(ev,"receiveShadow",s.receiveShadow)),n.isMeshGouraudMaterial&&null!==n.envMap&&(z.envMap.value=v,z.flipEnvMap.value=v.isCubeTexture&&!1===v.isRenderTargetTexture?-1:1),O&&(V.setValue(ev,"toneMappingExposure",G.toneMappingExposure),R.needsLights&&(u=z,d=U,u.ambientLightColor.needsUpdate=d,u.lightProbe.needsUpdate=d,u.directionalLights.needsUpdate=d,u.directionalLightShadows.needsUpdate=d,u.pointLights.needsUpdate=d,u.pointLightShadows.needsUpdate=d,u.spotLights.needsUpdate=d,u.spotLightShadows.needsUpdate=d,u.rectAreaLights.needsUpdate=d,u.hemisphereLights.needsUpdate=d),p&&!0===n.fog&&m.refreshFogUniforms(z,p),m.refreshMaterialUniforms(z,n,ei,et,eu),WebGLUniforms.upload(ev,R.uniformsList,z,l)),n.isShaderMaterial&&!0===n.uniformsNeedUpdate&&(WebGLUniforms.upload(ev,R.uniformsList,z,l),n.uniformsNeedUpdate=!1),n.isSpriteMaterial&&V.setValue(ev,"center",s.center),V.setValue(ev,"modelViewMatrix",s.modelViewMatrix),V.setValue(ev,"normalMatrix",s.normalMatrix),V.setValue(ev,"modelMatrix",s.matrixWorld),n.isShaderMaterial||n.isRawShaderMaterial){let e=n.uniformsGroups;for(let t=0,i=e.length;t<i;t++)if(r.isWebGL2){let i=e[t];A.update(i,I),A.bind(i,I)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return I}(e,t,i,n,s);a.setMaterial(n,g);let x=i.index,y=1;!0===n.wireframe&&(x=d.getWireframeAttribute(i),y=2);let S=i.drawRange,w=i.attributes.position,L=S.start*y,R=(S.start+S.count)*y;null!==p&&(L=Math.max(L,p.start*y),R=Math.min(R,(p.start+p.count)*y)),null!==x?(L=Math.max(L,0),R=Math.min(R,x.count)):null!=w&&(L=Math.max(L,0),R=Math.min(R,w.count));let P=R-L;if(P<0||P===1/0)return;E.setup(s,n,v,i,x);let D=b;if(null!==x&&(f=u.get(x),(D=T).setIndex(f)),s.isMesh)!0===n.wireframe?(a.setLineWidth(n.wireframeLinewidth*eg()),D.setMode(1)):D.setMode(4);else if(s.isLine){let e=n.linewidth;void 0===e&&(e=1),a.setLineWidth(e*eg()),s.isLineSegments?D.setMode(1):s.isLineLoop?D.setMode(2):D.setMode(3)}else s.isPoints?D.setMode(0):s.isSprite&&D.setMode(4);if(s.isInstancedMesh)D.renderInstances(L,P,s.count);else if(i.isInstancedBufferGeometry){let e=void 0!==i._maxInstanceCount?i._maxInstanceCount:1/0,t=Math.min(i.instanceCount,e);D.renderInstances(L,P,t)}else D.render(L,P)},this.compile=function(e,t){function i(e,t,i){!0===e.transparent&&3===e.side?(e.side=1,e.needsUpdate=!0,eP(e,t,i),e.side=s,e.needsUpdate=!0,eP(e,t,i),e.side=3):eP(e,t,i)}(B=v.get(e)).init(),k.push(B),e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(B.pushLight(e),e.castShadow&&B.pushShadow(e))}),B.setupLights(G.physicallyCorrectLights),e.traverse(function(t){let r=t.material;if(r)if(Array.isArray(r))for(let a=0;a<r.length;a++)i(r[a],e,t);else i(r,e,t)}),k.pop(),B=null};let ew=null;function eE(){eC.stop()}function eA(){eC.start()}let eC=new tV;function eL(e,t,n,s){let o=e.opaque,h=e.transmissive,c=e.transparent;B.setupLightsView(n),h.length>0&&function(e,t,a){let n=r.isWebGL2;null===eu&&(eu=new WebGLRenderTarget(1,1,{generateMipmaps:!0,type:i.has("EXT_color_buffer_half_float")?1016:1009,minFilter:S,samples:n&&!0===I?4:0})),G.getDrawingBufferSize(ep),n?eu.setSize(ep.x,ep.y):eu.setSize(H(ep.x),H(ep.y));let s=G.getRenderTarget();G.setRenderTarget(eu),G.clear();let o=G.toneMapping;G.toneMapping=0,eR(e,t,a),G.toneMapping=o,l.updateMultisampleRenderTarget(eu),l.updateRenderTargetMipmap(eu),G.setRenderTarget(s)}(o,t,n),s&&a.viewport(Z.copy(s)),o.length>0&&eR(o,t,n),h.length>0&&eR(h,t,n),c.length>0&&eR(c,t,n),a.buffers.depth.setTest(!0),a.buffers.depth.setMask(!0),a.buffers.color.setMask(!0),a.setPolygonOffset(!1)}function eR(e,t,i){let r=!0===t.isScene?t.overrideMaterial:null;for(let u=0,d=e.length;u<d;u++){var a,n,o,l,h,c;let d=e[u],p=d.object,f=d.geometry,m=null===r?d.material:r,g=d.group;p.layers.test(i.layers)&&(a=p,n=t,o=i,l=f,h=m,c=g,a.onBeforeRender(G,n,o,l,h,c),a.modelViewMatrix.multiplyMatrices(o.matrixWorldInverse,a.matrixWorld),a.normalMatrix.getNormalMatrix(a.modelViewMatrix),h.onBeforeRender(G,n,o,l,a,c),!0===h.transparent&&3===h.side?(h.side=1,h.needsUpdate=!0,G.renderBufferDirect(o,n,l,h,a,c),h.side=s,h.needsUpdate=!0,G.renderBufferDirect(o,n,l,h,a,c),h.side=3):G.renderBufferDirect(o,n,l,h,a,c),a.onAfterRender(G,n,o,l,h,c))}}function eP(e,t,i){var r;!0!==t.isScene&&(t=em);let a=o.get(e),n=B.state.lights,s=B.state.shadowsArray,l=n.state.version,u=f.getParameters(e,n.state,s,t,i),d=f.getProgramCacheKey(u),p=a.programs;a.environment=e.isMeshStandardMaterial?t.environment:null,a.fog=t.fog,a.envMap=(e.isMeshStandardMaterial?c:h).get(e.envMap||a.environment),void 0===p&&(e.addEventListener("dispose",eT),a.programs=p=new Map);let m=p.get(d);if(void 0!==m){if(a.currentProgram===m&&a.lightsStateVersion===l)return eD(e,u),m}else u.uniforms=f.getUniforms(e),e.onBuild(i,u,G),e.onBeforeCompile(u,G),m=f.acquireProgram(u,d),p.set(d,m),a.uniforms=u.uniforms;let g=a.uniforms;(e.isShaderMaterial||e.isRawShaderMaterial)&&!0!==e.clipping||(g.clippingPlanes=_.uniform),eD(e,u),a.needsLights=(r=e).isMeshLambertMaterial||r.isMeshToonMaterial||r.isMeshPhongMaterial||r.isMeshStandardMaterial||r.isShadowMaterial||r.isShaderMaterial&&!0===r.lights,a.lightsStateVersion=l,a.needsLights&&(g.ambientLightColor.value=n.state.ambient,g.lightProbe.value=n.state.probe,g.directionalLights.value=n.state.directional,g.directionalLightShadows.value=n.state.directionalShadow,g.spotLights.value=n.state.spot,g.spotLightShadows.value=n.state.spotShadow,g.rectAreaLights.value=n.state.rectArea,g.ltc_1.value=n.state.rectAreaLTC1,g.ltc_2.value=n.state.rectAreaLTC2,g.pointLights.value=n.state.point,g.pointLightShadows.value=n.state.pointShadow,g.hemisphereLights.value=n.state.hemi,g.directionalShadowMap.value=n.state.directionalShadowMap,g.directionalShadowMatrix.value=n.state.directionalShadowMatrix,g.spotShadowMap.value=n.state.spotShadowMap,g.spotLightMatrix.value=n.state.spotLightMatrix,g.spotLightMap.value=n.state.spotLightMap,g.pointShadowMap.value=n.state.pointShadowMap,g.pointShadowMatrix.value=n.state.pointShadowMatrix);let v=m.getUniforms(),x=WebGLUniforms.seqWithValue(v.seq,g);return a.currentProgram=m,a.uniformsList=x,m}function eD(e,t){let i=o.get(e);i.outputEncoding=t.outputEncoding,i.instancing=t.instancing,i.skinning=t.skinning,i.morphTargets=t.morphTargets,i.morphNormals=t.morphNormals,i.morphColors=t.morphColors,i.morphTargetsCount=t.morphTargetsCount,i.numClippingPlanes=t.numClippingPlanes,i.numIntersection=t.numClipIntersection,i.vertexAlphas=t.vertexAlphas,i.vertexTangents=t.vertexTangents,i.toneMapping=t.toneMapping}eC.setAnimationLoop(function(e){ew&&ew(e)}),"undefined"!=typeof self&&eC.setContext(self),this.setAnimationLoop=function(e){ew=e,ey.setAnimationLoop(e),null===e?eC.stop():eC.start()},ey.addEventListener("sessionstart",eE),ey.addEventListener("sessionend",eA),this.render=function(e,t){if(void 0!==t&&!0!==t.isCamera)return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");if(!0===W)return;!0===e.matrixWorldAutoUpdate&&e.updateMatrixWorld(),null===t.parent&&!0===t.matrixWorldAutoUpdate&&t.updateMatrixWorld(),!0===ey.enabled&&!0===ey.isPresenting&&(!0===ey.cameraAutoUpdate&&ey.updateCamera(t),t=ey.getCamera()),!0===e.isScene&&e.onBeforeRender(G,e,t,q),(B=v.get(e,k.length)).init(),k.push(B),ed.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),el.setFromProjectionMatrix(ed),ec=this.localClippingEnabled,eh=_.init(this.clippingPlanes,ec,t),(z=g.get(e,F.length)).init(),F.push(z),function e(t,i,r,a){if(!1===t.visible)return;if(t.layers.test(i.layers)){if(t.isGroup)r=t.renderOrder;else if(t.isLOD)!0===t.autoUpdate&&t.update(i);else if(t.isLight)B.pushLight(t),t.castShadow&&B.pushShadow(t);else if(t.isSprite){if(!t.frustumCulled||el.intersectsSprite(t)){a&&ef.setFromMatrixPosition(t.matrixWorld).applyMatrix4(ed);let e=p.update(t),i=t.material;i.visible&&z.push(t,e,i,r,ef.z,null)}}else if((t.isMesh||t.isLine||t.isPoints)&&(t.isSkinnedMesh&&t.skeleton.frame!==n.render.frame&&(t.skeleton.update(),t.skeleton.frame=n.render.frame),!t.frustumCulled||el.intersectsObject(t))){a&&ef.setFromMatrixPosition(t.matrixWorld).applyMatrix4(ed);let e=p.update(t),i=t.material;if(Array.isArray(i)){let a=e.groups;for(let n=0,s=a.length;n<s;n++){let s=a[n],o=i[s.materialIndex];o&&o.visible&&z.push(t,e,o,r,ef.z,s)}}else i.visible&&z.push(t,e,i,r,ef.z,null)}}let s=t.children;for(let t=0,n=s.length;t<n;t++)e(s[t],i,r,a)}(e,t,0,G.sortObjects),z.finish(),!0===G.sortObjects&&z.sort(er,ea),!0===eh&&_.beginShadows();let i=B.state.shadowsArray;if(x.render(i,e,t),!0===eh&&_.endShadows(),!0===this.info.autoReset&&this.info.reset(),y.render(z,e),B.setupLights(G.physicallyCorrectLights),t.isArrayCamera){let i=t.cameras;for(let t=0,r=i.length;t<r;t++){let r=i[t];eL(z,e,r,r.viewport)}}else eL(z,e,t);null!==q&&(l.updateMultisampleRenderTarget(q),l.updateRenderTargetMipmap(q)),!0===e.isScene&&e.onAfterRender(G,e,t),E.resetDefaultState(),Y=-1,J=null,k.pop(),B=k.length>0?k[k.length-1]:null,F.pop(),z=F.length>0?F[F.length-1]:null},this.getActiveCubeFace=function(){return j},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return q},this.setRenderTargetTextures=function(e,t,r){o.get(e.texture).__webglTexture=t,o.get(e.depthTexture).__webglTexture=r;let a=o.get(e);a.__hasExternalTextures=!0,a.__hasExternalTextures&&(a.__autoAllocateDepthBuffer=void 0===r,a.__autoAllocateDepthBuffer||!0!==i.has("WEBGL_multisampled_render_to_texture")||(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),a.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(e,t){let i=o.get(e);i.__webglFramebuffer=t,i.__useDefaultFramebuffer=void 0===t},this.setRenderTarget=function(e,t=0,i=0){q=e,j=t,X=i;let n=!0,s=null,h=!1,c=!1;if(e){let i=o.get(e);void 0!==i.__useDefaultFramebuffer?(a.bindFramebuffer(36160,null),n=!1):void 0===i.__webglFramebuffer?l.setupRenderTarget(e):i.__hasExternalTextures&&l.rebindTextures(e,o.get(e.texture).__webglTexture,o.get(e.depthTexture).__webglTexture);let u=e.texture;(u.isData3DTexture||u.isDataArrayTexture||u.isCompressedArrayTexture)&&(c=!0);let d=o.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(s=d[t],h=!0):s=r.isWebGL2&&e.samples>0&&!1===l.useMultisampledRTT(e)?o.get(e).__webglMultisampledFramebuffer:d,Z.copy(e.viewport),Q.copy(e.scissor),$=e.scissorTest}else Z.copy(en).multiplyScalar(ei).floor(),Q.copy(es).multiplyScalar(ei).floor(),$=eo;if(a.bindFramebuffer(36160,s)&&r.drawBuffers&&n&&a.drawBuffers(e,s),a.viewport(Z),a.scissor(Q),a.setScissorTest($),h){let r=o.get(e.texture);ev.framebufferTexture2D(36160,36064,34069+t,r.__webglTexture,i)}else if(c){let r=o.get(e.texture);ev.framebufferTextureLayer(36160,36064,r.__webglTexture,i||0,t||0)}Y=-1},this.readRenderTargetPixels=function(e,t,n,s,l,h,c){if(!(e&&e.isWebGLRenderTarget))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let u=o.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&void 0!==c&&(u=u[c]),u){a.bindFramebuffer(36160,u);try{let a=e.texture,o=a.format,c=a.type;if(1023!==o&&w.convert(o)!==ev.getParameter(35739))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");let u=1016===c&&(i.has("EXT_color_buffer_half_float")||r.isWebGL2&&i.has("EXT_color_buffer_float"));if(1009!==c&&w.convert(c)!==ev.getParameter(35738)&&!(1015===c&&(r.isWebGL2||i.has("OES_texture_float")||i.has("WEBGL_color_buffer_float")))&&!u)return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");t>=0&&t<=e.width-s&&n>=0&&n<=e.height-l&&ev.readPixels(t,n,s,l,w.convert(o),w.convert(c),h)}finally{let e=null!==q?o.get(q).__webglFramebuffer:null;a.bindFramebuffer(36160,e)}}},this.copyFramebufferToTexture=function(e,t,i=0){let r=Math.pow(2,-i),n=Math.floor(t.image.width*r),s=Math.floor(t.image.height*r);l.setTexture2D(t,0),ev.copyTexSubImage2D(3553,i,0,0,e.x,e.y,n,s),a.unbindTexture()},this.copyTextureToTexture=function(e,t,i,r=0){let n=t.image.width,s=t.image.height,o=w.convert(i.format),h=w.convert(i.type);l.setTexture2D(i,0),ev.pixelStorei(37440,i.flipY),ev.pixelStorei(37441,i.premultiplyAlpha),ev.pixelStorei(3317,i.unpackAlignment),t.isDataTexture?ev.texSubImage2D(3553,r,e.x,e.y,n,s,o,h,t.image.data):t.isCompressedTexture?ev.compressedTexSubImage2D(3553,r,e.x,e.y,t.mipmaps[0].width,t.mipmaps[0].height,o,t.mipmaps[0].data):ev.texSubImage2D(3553,r,e.x,e.y,o,h,t.image),0===r&&i.generateMipmaps&&ev.generateMipmap(3553),a.unbindTexture()},this.copyTextureToTexture3D=function(e,t,i,r,n=0){let s;if(G.isWebGL1Renderer)return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");let o=e.max.x-e.min.x+1,h=e.max.y-e.min.y+1,c=e.max.z-e.min.z+1,u=w.convert(r.format),d=w.convert(r.type);if(r.isData3DTexture)l.setTexture3D(r,0),s=32879;else{if(!r.isDataArrayTexture)return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");l.setTexture2DArray(r,0),s=35866}ev.pixelStorei(37440,r.flipY),ev.pixelStorei(37441,r.premultiplyAlpha),ev.pixelStorei(3317,r.unpackAlignment);let p=ev.getParameter(3314),f=ev.getParameter(32878),m=ev.getParameter(3316),g=ev.getParameter(3315),v=ev.getParameter(32877),_=i.isCompressedTexture?i.mipmaps[0]:i.image;ev.pixelStorei(3314,_.width),ev.pixelStorei(32878,_.height),ev.pixelStorei(3316,e.min.x),ev.pixelStorei(3315,e.min.y),ev.pixelStorei(32877,e.min.z),i.isDataTexture||i.isData3DTexture?ev.texSubImage3D(s,n,t.x,t.y,t.z,o,h,c,u,d,_.data):i.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),ev.compressedTexSubImage3D(s,n,t.x,t.y,t.z,o,h,c,u,_.data)):ev.texSubImage3D(s,n,t.x,t.y,t.z,o,h,c,u,d,_),ev.pixelStorei(3314,p),ev.pixelStorei(32878,f),ev.pixelStorei(3316,m),ev.pixelStorei(3315,g),ev.pixelStorei(32877,v),0===n&&r.generateMipmaps&&ev.generateMipmap(s),a.unbindTexture()},this.initTexture=function(e){e.isCubeTexture?l.setTextureCube(e,0):e.isData3DTexture?l.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?l.setTexture2DArray(e,0):l.setTexture2D(e,0),a.unbindTexture()},this.resetState=function(){j=0,X=0,q=null,a.reset(),E.reset()},"undefined"!=typeof __THREE_DEVTOOLS__&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}let WebGL1Renderer=class WebGL1Renderer extends rI{};WebGL1Renderer.prototype.isWebGL1Renderer=!0;let Scene=class Scene extends Object3D{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,"undefined"!=typeof __THREE_DEVTOOLS__&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),null!==e.background&&(this.background=e.background.clone()),null!==e.environment&&(this.environment=e.environment.clone()),null!==e.fog&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,null!==e.overrideMaterial&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return null!==this.fog&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.backgroundBlurriness=this.backgroundBlurriness),1!==this.backgroundIntensity&&(t.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}};let InterleavedBuffer=class InterleavedBuffer{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=void 0!==e?e.length/t:0,this.usage=35044,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=V()}onUploadCallback(){}set needsUpdate(e){!0===e&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,a=this.stride;r<a;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){void 0===e.arrayBuffers&&(e.arrayBuffers={}),void 0===this.array.buffer._uuid&&(this.array.buffer._uuid=V()),void 0===e.arrayBuffers[this.array.buffer._uuid]&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return void 0===e.arrayBuffers&&(e.arrayBuffers={}),void 0===this.array.buffer._uuid&&(this.array.buffer._uuid=V()),void 0===e.arrayBuffers[this.array.buffer._uuid]&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}};let rN=new Vector3;let InterleavedBufferAttribute=class InterleavedBufferAttribute{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)rN.fromBufferAttribute(this,t),rN.applyMatrix4(e),this.setXYZ(t,rN.x,rN.y,rN.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)rN.fromBufferAttribute(this,t),rN.applyNormalMatrix(e),this.setXYZ(t,rN.x,rN.y,rN.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)rN.fromBufferAttribute(this,t),rN.transformDirection(e),this.setXYZ(t,rN.x,rN.y,rN.z);return this}setX(e,t){return this.normalized&&(t=j(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=j(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=j(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=j(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=W(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=W(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=W(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=W(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=j(t,this.array),i=j(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=j(t,this.array),i=j(i,this.array),r=j(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=j(t,this.array),i=j(i,this.array),r=j(r,this.array),a=j(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=a,this}clone(e){if(void 0!==e)return void 0===e.interleavedBuffers&&(e.interleavedBuffers={}),void 0===e.interleavedBuffers[this.data.uuid]&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new InterleavedBufferAttribute(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized);{console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let t=0;t<this.count;t++){let i=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[i+t])}return new BufferAttribute(new this.array.constructor(e),this.itemSize,this.normalized)}}toJSON(e){if(void 0!==e)return void 0===e.interleavedBuffers&&(e.interleavedBuffers={}),void 0===e.interleavedBuffers[this.data.uuid]&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized};{console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let t=0;t<this.count;t++){let i=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[i+t])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}}};let rO=new Vector3,rU=new Vector4,rV=new Vector4,rz=new Vector3,rB=new Matrix4;let SkinnedMesh=class SkinnedMesh extends Mesh{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Matrix4,this.bindMatrixInverse=new Matrix4}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,void 0===t&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Vector4,t=this.geometry.attributes.skinWeight;for(let i=0,r=t.count;i<r;i++){e.fromBufferAttribute(t,i);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),"attached"===this.bindMode?this.bindMatrixInverse.copy(this.matrixWorld).invert():"detached"===this.bindMode?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){let i=this.skeleton,r=this.geometry;rU.fromBufferAttribute(r.attributes.skinIndex,e),rV.fromBufferAttribute(r.attributes.skinWeight,e),rO.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let e=0;e<4;e++){let r=rV.getComponent(e);if(0!==r){let a=rU.getComponent(e);rB.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(rz.copy(rO).applyMatrix4(rB),r)}}return t.applyMatrix4(this.bindMatrixInverse)}};let Bone=class Bone extends Object3D{constructor(){super(),this.isBone=!0,this.type="Bone"}};let DataTexture=class DataTexture extends Texture{constructor(e=null,t=1,i=1,r,a,n,s,o,l=_,h=_,c,u){super(null,n,s,o,l,h,r,a,c,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};let rF=new Matrix4,rk=new Matrix4;let Skeleton=class Skeleton{constructor(e=[],t=[]){this.uuid=V(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(16*e.length),0===t.length)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let e=0,t=this.bones.length;e<t;e++)this.boneInverses.push(new Matrix4)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let t=new Matrix4;this.bones[e]&&t.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(t)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let t=this.bones[e];t&&t.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let t=this.bones[e];t&&(t.parent&&t.parent.isBone?(t.matrix.copy(t.parent.matrixWorld).invert(),t.matrix.multiply(t.matrixWorld)):t.matrix.copy(t.matrixWorld),t.matrix.decompose(t.position,t.quaternion,t.scale))}}update(){let e=this.bones,t=this.boneInverses,i=this.boneMatrices,r=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let a=e[r]?e[r].matrixWorld:rk;rF.multiplyMatrices(a,t[r]),rF.toArray(i,16*r)}null!==r&&(r.needsUpdate=!0)}clone(){return new Skeleton(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(4*this.bones.length),t=new Float32Array((e=Math.max(e=G(e),4))*e*4);t.set(this.boneMatrices);let i=new DataTexture(t,e,e,1023,1015);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){null!==this.boneTexture&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,r=e.bones.length;i<r;i++){let r=e.bones[i],a=t[r];void 0===a&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new Bone),this.bones.push(a),this.boneInverses.push(new Matrix4().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){let e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,i=this.boneInverses;for(let r=0,a=t.length;r<a;r++){let a=t[r];e.bones.push(a.uuid);let n=i[r];e.boneInverses.push(n.toArray())}return e}};let InstancedBufferAttribute=class InstancedBufferAttribute extends BufferAttribute{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}};let rG=new Matrix4,rH=new Matrix4,rW=[],rj=new Matrix4,rX=new Mesh;let InstancedMesh=class InstancedMesh extends Mesh{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new InstancedBufferAttribute(new Float32Array(16*i),16),this.instanceColor=null,this.count=i,this.frustumCulled=!1;for(let e=0;e<i;e++)this.setMatrixAt(e,rj)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),null!==e.instanceColor&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,3*e)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,16*e)}raycast(e,t){let i=this.matrixWorld,r=this.count;if(rX.geometry=this.geometry,rX.material=this.material,void 0!==rX.material)for(let a=0;a<r;a++){this.getMatrixAt(a,rG),rH.multiplyMatrices(i,rG),rX.matrixWorld=rH,rX.raycast(e,rW);for(let e=0,i=rW.length;e<i;e++){let i=rW[e];i.instanceId=a,i.object=this,t.push(i)}rW.length=0}}setColorAt(e,t){null===this.instanceColor&&(this.instanceColor=new InstancedBufferAttribute(new Float32Array(3*this.instanceMatrix.count),3)),t.toArray(this.instanceColor.array,3*e)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,16*e)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};let LineBasicMaterial=class LineBasicMaterial extends Material{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Color(0xffffff),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}};let rq=new Vector3,rY=new Vector3,rK=new Matrix4,rJ=new Ray,rZ=new Sphere;let Line=class Line extends Object3D{constructor(e=new BufferGeometry,t=new LineBasicMaterial){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(null===e.index){let t=e.attributes.position,i=[0];for(let e=1,r=t.count;e<r;e++)rq.fromBufferAttribute(t,e-1),rY.fromBufferAttribute(t,e),i[e]=i[e-1],i[e]+=rq.distanceTo(rY);e.setAttribute("lineDistance",new Float32BufferAttribute(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,r=this.matrixWorld,a=e.params.Line.threshold,n=i.drawRange;if(null===i.boundingSphere&&i.computeBoundingSphere(),rZ.copy(i.boundingSphere),rZ.applyMatrix4(r),rZ.radius+=a,!1===e.ray.intersectsSphere(rZ))return;rK.copy(r).invert(),rJ.copy(e.ray).applyMatrix4(rK);let s=a/((this.scale.x+this.scale.y+this.scale.z)/3),o=s*s,l=new Vector3,h=new Vector3,c=new Vector3,u=new Vector3,d=this.isLineSegments?2:1,p=i.index,f=i.attributes.position;if(null!==p){let i=Math.max(0,n.start),r=Math.min(p.count,n.start+n.count);for(let a=i,n=r-1;a<n;a+=d){let i=p.getX(a),r=p.getX(a+1);if(l.fromBufferAttribute(f,i),h.fromBufferAttribute(f,r),rJ.distanceSqToSegment(l,h,u,c)>o)continue;u.applyMatrix4(this.matrixWorld);let n=e.ray.origin.distanceTo(u);n<e.near||n>e.far||t.push({distance:n,point:c.clone().applyMatrix4(this.matrixWorld),index:a,face:null,faceIndex:null,object:this})}}else{let i=Math.max(0,n.start),r=Math.min(f.count,n.start+n.count);for(let a=i,n=r-1;a<n;a+=d){if(l.fromBufferAttribute(f,a),h.fromBufferAttribute(f,a+1),rJ.distanceSqToSegment(l,h,u,c)>o)continue;u.applyMatrix4(this.matrixWorld);let i=e.ray.origin.distanceTo(u);i<e.near||i>e.far||t.push({distance:i,point:c.clone().applyMatrix4(this.matrixWorld),index:a,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(void 0!==i){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=i.length;e<t;e++){let t=i[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};let rQ=new Vector3,r$=new Vector3;let LineSegments=class LineSegments extends Line{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(null===e.index){let t=e.attributes.position,i=[];for(let e=0,r=t.count;e<r;e+=2)rQ.fromBufferAttribute(t,e),r$.fromBufferAttribute(t,e+1),i[e]=0===e?0:i[e-1],i[e+1]=i[e]+rQ.distanceTo(r$);e.setAttribute("lineDistance",new Float32BufferAttribute(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};let LineLoop=class LineLoop extends Line{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}};let PointsMaterial=class PointsMaterial extends Material{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Color(0xffffff),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}};let r0=new Matrix4,r1=new Ray,r3=new Sphere,r2=new Vector3;let Points=class Points extends Object3D{constructor(e=new BufferGeometry,t=new PointsMaterial){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,r=this.matrixWorld,a=e.params.Points.threshold,n=i.drawRange;if(null===i.boundingSphere&&i.computeBoundingSphere(),r3.copy(i.boundingSphere),r3.applyMatrix4(r),r3.radius+=a,!1===e.ray.intersectsSphere(r3))return;r0.copy(r).invert(),r1.copy(e.ray).applyMatrix4(r0);let s=a/((this.scale.x+this.scale.y+this.scale.z)/3),o=s*s,l=i.index,h=i.attributes.position;if(null!==l){let i=Math.max(0,n.start),a=Math.min(l.count,n.start+n.count);for(let n=i;n<a;n++){let i=l.getX(n);r2.fromBufferAttribute(h,i),r4(r2,i,o,r,e,t,this)}}else{let i=Math.max(0,n.start),a=Math.min(h.count,n.start+n.count);for(let n=i;n<a;n++)r2.fromBufferAttribute(h,n),r4(r2,n,o,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(void 0!==i){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=i.length;e<t;e++){let t=i[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function r4(e,t,i,r,a,n,s){let o=r1.distanceSqToPoint(e);if(o<i){let i=new Vector3;r1.closestPointToPoint(e,i),i.applyMatrix4(r);let l=a.ray.origin.distanceTo(i);if(l<a.near||l>a.far)return;n.push({distance:l,distanceToRay:Math.sqrt(o),point:i,index:t,face:null,object:s})}}let Curve=class Curve{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,r=this.getPoint(0),a=0;t.push(0);for(let n=1;n<=e;n++)t.push(a+=(i=this.getPoint(n/e)).distanceTo(r)),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let i,r=this.getLengths(),a=0,n=r.length;i=t||e*r[n-1];let s=0,o=n-1,l;for(;s<=o;)if((l=r[a=Math.floor(s+(o-s)/2)]-i)<0)s=a+1;else if(l>0)o=a-1;else{o=a;break}if(r[a=o]===i)return a/(n-1);let h=r[a],c=r[a+1];return(a+(i-h)/(c-h))/(n-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let a=this.getPoint(i),n=this.getPoint(r),s=t||(a.isVector2?new Vector2:new Vector3);return s.copy(n).sub(a).normalize(),s}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){let i=new Vector3,r=[],a=[],n=[],s=new Vector3,o=new Matrix4;for(let t=0;t<=e;t++){let i=t/e;r[t]=this.getTangentAt(i,new Vector3)}a[0]=new Vector3,n[0]=new Vector3;let l=Number.MAX_VALUE,h=Math.abs(r[0].x),c=Math.abs(r[0].y),u=Math.abs(r[0].z);h<=l&&(l=h,i.set(1,0,0)),c<=l&&(l=c,i.set(0,1,0)),u<=l&&i.set(0,0,1),s.crossVectors(r[0],i).normalize(),a[0].crossVectors(r[0],s),n[0].crossVectors(r[0],a[0]);for(let t=1;t<=e;t++){if(a[t]=a[t-1].clone(),n[t]=n[t-1].clone(),s.crossVectors(r[t-1],r[t]),s.length()>Number.EPSILON){s.normalize();let e=Math.acos(z(r[t-1].dot(r[t]),-1,1));a[t].applyMatrix4(o.makeRotationAxis(s,e))}n[t].crossVectors(r[t],a[t])}if(!0===t){let t=Math.acos(z(a[0].dot(a[e]),-1,1));t/=e,r[0].dot(s.crossVectors(a[0],a[e]))>0&&(t=-t);for(let i=1;i<=e;i++)a[i].applyMatrix4(o.makeRotationAxis(r[i],t*i)),n[i].crossVectors(r[i],a[i])}return{tangents:r,normals:a,binormals:n}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}};let EllipseCurve=class EllipseCurve extends Curve{constructor(e=0,t=0,i=1,r=1,a=0,n=2*Math.PI,s=!1,o=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=a,this.aEndAngle=n,this.aClockwise=s,this.aRotation=o}getPoint(e,t){let i=t||new Vector2,r=2*Math.PI,a=this.aEndAngle-this.aStartAngle,n=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=r;for(;a>r;)a-=r;a<Number.EPSILON&&(a=n?0:r),!0!==this.aClockwise||n||(a===r?a=-r:a-=r);let s=this.aStartAngle+e*a,o=this.aX+this.xRadius*Math.cos(s),l=this.aY+this.yRadius*Math.sin(s);if(0!==this.aRotation){let e=Math.cos(this.aRotation),t=Math.sin(this.aRotation),i=o-this.aX,r=l-this.aY;o=i*e-r*t+this.aX,l=i*t+r*e+this.aY}return i.set(o,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}};let ArcCurve=class ArcCurve extends EllipseCurve{constructor(e,t,i,r,a,n){super(e,t,i,i,r,a,n),this.isArcCurve=!0,this.type="ArcCurve"}};function r5(){let e=0,t=0,i=0,r=0;function a(a,n,s,o){e=a,t=s,i=-3*a+3*n-2*s-o,r=2*a-2*n+s+o}return{initCatmullRom:function(e,t,i,r,n){a(t,i,n*(i-e),n*(r-t))},initNonuniformCatmullRom:function(e,t,i,r,n,s,o){let l=(t-e)/n-(i-e)/(n+s)+(i-t)/s,h=(i-t)/s-(r-t)/(s+o)+(r-i)/o;a(t,i,l*=s,h*=s)},calc:function(a){let n=a*a;return e+t*a+i*n+n*a*r}}}let r6=new Vector3,r8=new r5,r9=new r5,r7=new r5;let CatmullRomCurve3=class CatmullRomCurve3 extends Curve{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new Vector3){let i,r,a=this.points,n=a.length,s=(n-!this.closed)*e,o=Math.floor(s),l=s-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/n)+1)*n:0===l&&o===n-1&&(o=n-2,l=1),this.closed||o>0?i=a[(o-1)%n]:(r6.subVectors(a[0],a[1]).add(a[0]),i=r6);let h=a[o%n],c=a[(o+1)%n];if(this.closed||o+2<n?r=a[(o+2)%n]:(r6.subVectors(a[n-1],a[n-2]).add(a[n-1]),r=r6),"centripetal"===this.curveType||"chordal"===this.curveType){let e="chordal"===this.curveType?.5:.25,t=Math.pow(i.distanceToSquared(h),e),a=Math.pow(h.distanceToSquared(c),e),n=Math.pow(c.distanceToSquared(r),e);a<1e-4&&(a=1),t<1e-4&&(t=a),n<1e-4&&(n=a),r8.initNonuniformCatmullRom(i.x,h.x,c.x,r.x,t,a,n),r9.initNonuniformCatmullRom(i.y,h.y,c.y,r.y,t,a,n),r7.initNonuniformCatmullRom(i.z,h.z,c.z,r.z,t,a,n)}else"catmullrom"===this.curveType&&(r8.initCatmullRom(i.x,h.x,c.x,r.x,this.tension),r9.initCatmullRom(i.y,h.y,c.y,r.y,this.tension),r7.initCatmullRom(i.z,h.z,c.z,r.z,this.tension));return t.set(r8.calc(l),r9.calc(l),r7.calc(l)),t}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let i=e.points[t];this.points.push(new Vector3().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function ae(e,t,i,r,a){let n=(r-t)*.5,s=(a-i)*.5,o=e*e;return e*o*(2*i-2*r+n+s)+(-3*i+3*r-2*n-s)*o+n*e+i}function at(e,t,i,r){return function(e,t){let i=1-e;return i*i*t}(e,t)+2*(1-e)*e*i+e*e*r}function ai(e,t,i,r,a){return function(e,t){let i=1-e;return i*i*i*t}(e,t)+function(e,t){let i=1-e;return 3*i*i*e*t}(e,i)+3*(1-e)*e*e*r+e*e*e*a}let CubicBezierCurve=class CubicBezierCurve extends Curve{constructor(e=new Vector2,t=new Vector2,i=new Vector2,r=new Vector2){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new Vector2){let i=this.v0,r=this.v1,a=this.v2,n=this.v3;return t.set(ai(e,i.x,r.x,a.x,n.x),ai(e,i.y,r.y,a.y,n.y)),t}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}};let CubicBezierCurve3=class CubicBezierCurve3 extends Curve{constructor(e=new Vector3,t=new Vector3,i=new Vector3,r=new Vector3){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new Vector3){let i=this.v0,r=this.v1,a=this.v2,n=this.v3;return t.set(ai(e,i.x,r.x,a.x,n.x),ai(e,i.y,r.y,a.y,n.y),ai(e,i.z,r.z,a.z,n.z)),t}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}};let LineCurve=class LineCurve extends Curve{constructor(e=new Vector2,t=new Vector2){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Vector2){return 1===e?t.copy(this.v2):(t.copy(this.v2).sub(this.v1),t.multiplyScalar(e).add(this.v1)),t}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t){let i=t||new Vector2;return i.copy(this.v2).sub(this.v1).normalize(),i}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}};let LineCurve3=class LineCurve3 extends Curve{constructor(e=new Vector3,t=new Vector3){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new Vector3){return 1===e?t.copy(this.v2):(t.copy(this.v2).sub(this.v1),t.multiplyScalar(e).add(this.v1)),t}getPointAt(e,t){return this.getPoint(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}};let QuadraticBezierCurve=class QuadraticBezierCurve extends Curve{constructor(e=new Vector2,t=new Vector2,i=new Vector2){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Vector2){let i=this.v0,r=this.v1,a=this.v2;return t.set(at(e,i.x,r.x,a.x),at(e,i.y,r.y,a.y)),t}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}};let QuadraticBezierCurve3=class QuadraticBezierCurve3 extends Curve{constructor(e=new Vector3,t=new Vector3,i=new Vector3){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Vector3){let i=this.v0,r=this.v1,a=this.v2;return t.set(at(e,i.x,r.x,a.x),at(e,i.y,r.y,a.y),at(e,i.z,r.z,a.z)),t}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}};let SplineCurve=class SplineCurve extends Curve{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Vector2){let i=this.points,r=(i.length-1)*e,a=Math.floor(r),n=r-a,s=i[0===a?a:a-1],o=i[a],l=i[a>i.length-2?i.length-1:a+1],h=i[a>i.length-3?i.length-1:a+2];return t.set(ae(n,s.x,o.x,l.x,h.x),ae(n,s.y,o.y,l.y,h.y)),t}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let i=e.points[t];this.points.push(new Vector2().fromArray(i))}return this}};let MeshStandardMaterial=class MeshStandardMaterial extends Material{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Color(0xffffff),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Color(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new Vector2(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};let MeshPhysicalMaterial=class MeshPhysicalMaterial extends MeshStandardMaterial{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Vector2(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return z(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Color(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Color(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Color(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};let MeshMatcapMaterial=class MeshMatcapMaterial extends Material{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new Color(0xffffff),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new Vector2(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this.fog=e.fog,this}};function ar(e,t,i){return an(e)?new e.constructor(e.subarray(t,void 0!==i?i:e.length)):e.slice(t,i)}function aa(e,t,i){return e&&(i||e.constructor!==t)?"number"==typeof t.BYTES_PER_ELEMENT?new t(e):Array.prototype.slice.call(e):e}function an(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function as(e,t,i){let r=e.length,a=new e.constructor(r);for(let n=0,s=0;s!==r;++n){let r=i[n]*t;for(let i=0;i!==t;++i)a[s++]=e[r+i]}return a}function ao(e,t,i,r){let a=1,n=e[0];for(;void 0!==n&&void 0===n[r];)n=e[a++];if(void 0===n)return;let s=n[r];if(void 0!==s)if(Array.isArray(s))do void 0!==(s=n[r])&&(t.push(n.time),i.push.apply(i,s)),n=e[a++];while(void 0!==n)else if(void 0!==s.toArray)do void 0!==(s=n[r])&&(t.push(n.time),s.toArray(i,i.length)),n=e[a++];while(void 0!==n)else do void 0!==(s=n[r])&&(t.push(n.time),i.push(s)),n=e[a++];while(void 0!==n)}let Interpolant=class Interpolant{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=void 0!==r?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],a=t[i-1];e:{t:{let n;i:{r:if(!(e<r)){for(let n=i+2;;){if(void 0===r){if(e<a)break r;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===n)break;if(a=r,e<(r=t[++i]))break t}n=t.length;break i}if(!(e>=a)){let s=t[1];e<s&&(i=2,a=s);for(let n=i-2;;){if(void 0===a)return this._cachedIndex=0,this.copySampleValue_(0);if(i===n)break;if(r=a,e>=(a=t[--i-1]))break t}n=i,i=0;break i}break e}for(;i<n;){let r=i+n>>>1;e<t[r]?n=r:i=r+1}if(r=t[i],void 0===(a=t[i-1]))return this._cachedIndex=0,this.copySampleValue_(0);if(void 0===r)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,r)}return this.interpolate_(i,a,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,a=e*r;for(let e=0;e!==r;++e)t[e]=i[a+e];return t}interpolate_(){throw Error("call to abstract method")}intervalChanged_(){}};let CubicInterpolant=class CubicInterpolant extends Interpolant{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(e,t,i){let r=this.parameterPositions,a=e-2,n=e+1,s=r[a],o=r[n];if(void 0===s)switch(this.getSettings_().endingStart){case 2401:a=e,s=2*t-i;break;case 2402:a=r.length-2,s=t+r[a]-r[a+1];break;default:a=e,s=i}if(void 0===o)switch(this.getSettings_().endingEnd){case 2401:n=e,o=2*i-t;break;case 2402:n=1,o=i+r[1]-r[0];break;default:n=e-1,o=t}let l=(i-t)*.5,h=this.valueSize;this._weightPrev=l/(t-s),this._weightNext=l/(o-i),this._offsetPrev=a*h,this._offsetNext=n*h}interpolate_(e,t,i,r){let a=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=e*s,l=o-s,h=this._offsetPrev,c=this._offsetNext,u=this._weightPrev,d=this._weightNext,p=(i-t)/(r-t),f=p*p,m=f*p,g=-u*m+2*u*f-u*p,v=(1+u)*m+(-1.5-2*u)*f+(-.5+u)*p+1,_=(-1-d)*m+(1.5+d)*f+.5*p,x=d*m-d*f;for(let e=0;e!==s;++e)a[e]=g*n[h+e]+v*n[l+e]+_*n[o+e]+x*n[c+e];return a}};let LinearInterpolant=class LinearInterpolant extends Interpolant{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let a=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=e*s,l=o-s,h=(i-t)/(r-t),c=1-h;for(let e=0;e!==s;++e)a[e]=n[l+e]*c+n[o+e]*h;return a}};let DiscreteInterpolant=class DiscreteInterpolant extends Interpolant{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}};let KeyframeTrack=class KeyframeTrack{constructor(e,t,i,r){if(void 0===e)throw Error("THREE.KeyframeTrack: track name is undefined");if(void 0===t||0===t.length)throw Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=aa(t,this.TimeBufferType),this.values=aa(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t,i=e.constructor;if(i.toJSON!==this.toJSON)t=i.toJSON(e);else{t={name:e.name,times:aa(e.times,Array),values:aa(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(t.interpolation=i)}return t.type=e.ValueTypeName,t}InterpolantFactoryMethodDiscrete(e){return new DiscreteInterpolant(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new LinearInterpolant(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new CubicInterpolant(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case T:t=this.InterpolantFactoryMethodDiscrete;break;case w:t=this.InterpolantFactoryMethodLinear;break;case 2302:t=this.InterpolantFactoryMethodSmooth}if(void 0===t){let t="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(void 0===this.createInterpolant)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t);return console.warn("THREE.KeyframeTrack:",t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return T;case this.InterpolantFactoryMethodLinear:return w;case this.InterpolantFactoryMethodSmooth:return 2302}}getValueSize(){return this.values.length/this.times.length}shift(e){if(0!==e){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(1!==e){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){let i=this.times,r=i.length,a=0,n=r-1;for(;a!==r&&i[a]<e;)++a;for(;-1!==n&&i[n]>t;)--n;if(++n,0!==a||n!==r){a>=n&&(a=(n=Math.max(n,1))-1);let e=this.getValueSize();this.times=ar(i,a,n),this.values=ar(this.values,a*e,n*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!=0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,a=i.length;0===a&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let n=null;for(let t=0;t!==a;t++){let r=i[t];if("number"==typeof r&&isNaN(r)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,t,r),e=!1;break}if(null!==n&&n>r){console.error("THREE.KeyframeTrack: Out of order keys.",this,t,r,n),e=!1;break}n=r}if(void 0!==r&&an(r))for(let t=0,i=r.length;t!==i;++t){let i=r[t];if(isNaN(i)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,t,i),e=!1;break}}return e}optimize(){let e=ar(this.times),t=ar(this.values),i=this.getValueSize(),r=2302===this.getInterpolation(),a=e.length-1,n=1;for(let s=1;s<a;++s){let a=!1,o=e[s];if(o!==e[s+1]&&(1!==s||o!==e[0]))if(r)a=!0;else{let e=s*i,r=e-i,n=e+i;for(let s=0;s!==i;++s){let i=t[e+s];if(i!==t[r+s]||i!==t[n+s]){a=!0;break}}}if(a){if(s!==n){e[n]=e[s];let r=s*i,a=n*i;for(let e=0;e!==i;++e)t[a+e]=t[r+e]}++n}}if(a>0){e[n]=e[a];for(let e=a*i,r=n*i,s=0;s!==i;++s)t[r+s]=t[e+s];++n}return n!==e.length?(this.times=ar(e,0,n),this.values=ar(t,0,n*i)):(this.times=e,this.values=t),this}clone(){let e=ar(this.times,0),t=ar(this.values,0),i=new this.constructor(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};KeyframeTrack.prototype.TimeBufferType=Float32Array,KeyframeTrack.prototype.ValueBufferType=Float32Array,KeyframeTrack.prototype.DefaultInterpolation=w;let BooleanKeyframeTrack=class BooleanKeyframeTrack extends KeyframeTrack{};BooleanKeyframeTrack.prototype.ValueTypeName="bool",BooleanKeyframeTrack.prototype.ValueBufferType=Array,BooleanKeyframeTrack.prototype.DefaultInterpolation=T,BooleanKeyframeTrack.prototype.InterpolantFactoryMethodLinear=void 0,BooleanKeyframeTrack.prototype.InterpolantFactoryMethodSmooth=void 0;let ColorKeyframeTrack=class ColorKeyframeTrack extends KeyframeTrack{};ColorKeyframeTrack.prototype.ValueTypeName="color";let NumberKeyframeTrack=class NumberKeyframeTrack extends KeyframeTrack{};NumberKeyframeTrack.prototype.ValueTypeName="number";let QuaternionLinearInterpolant=class QuaternionLinearInterpolant extends Interpolant{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let a=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=(i-t)/(r-t),l=e*s;for(let e=l+s;l!==e;l+=4)Quaternion.slerpFlat(a,0,n,l-s,n,l,o);return a}};let QuaternionKeyframeTrack=class QuaternionKeyframeTrack extends KeyframeTrack{InterpolantFactoryMethodLinear(e){return new QuaternionLinearInterpolant(this.times,this.values,this.getValueSize(),e)}};QuaternionKeyframeTrack.prototype.ValueTypeName="quaternion",QuaternionKeyframeTrack.prototype.DefaultInterpolation=w,QuaternionKeyframeTrack.prototype.InterpolantFactoryMethodSmooth=void 0;let StringKeyframeTrack=class StringKeyframeTrack extends KeyframeTrack{};StringKeyframeTrack.prototype.ValueTypeName="string",StringKeyframeTrack.prototype.ValueBufferType=Array,StringKeyframeTrack.prototype.DefaultInterpolation=T,StringKeyframeTrack.prototype.InterpolantFactoryMethodLinear=void 0,StringKeyframeTrack.prototype.InterpolantFactoryMethodSmooth=void 0;let VectorKeyframeTrack=class VectorKeyframeTrack extends KeyframeTrack{};VectorKeyframeTrack.prototype.ValueTypeName="vector";let AnimationClip=class AnimationClip{constructor(e,t=-1,i,r=2500){this.name=e,this.tracks=i,this.duration=t,this.blendMode=r,this.uuid=V(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],i=e.tracks,r=1/(e.fps||1);for(let e=0,a=i.length;e!==a;++e)t.push((function(e){if(void 0===e.type)throw Error("THREE.KeyframeTrack: track type undefined, can not parse");let t=function(e){switch(e.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return NumberKeyframeTrack;case"vector":case"vector2":case"vector3":case"vector4":return VectorKeyframeTrack;case"color":return ColorKeyframeTrack;case"quaternion":return QuaternionKeyframeTrack;case"bool":case"boolean":return BooleanKeyframeTrack;case"string":return StringKeyframeTrack}throw Error("THREE.KeyframeTrack: Unsupported typeName: "+e)}(e.type);if(void 0===e.times){let t=[],i=[];ao(e.keys,t,i,"value"),e.times=t,e.values=i}return void 0!==t.parse?t.parse(e):new t(e.name,e.times,e.values,e.interpolation)})(i[e]).scale(r));let a=new this(e.name,e.duration,t,e.blendMode);return a.uuid=e.uuid,a}static toJSON(e){let t=[],i=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let e=0,r=i.length;e!==r;++e)t.push(KeyframeTrack.toJSON(i[e]));return r}static CreateFromMorphTargetSequence(e,t,i,r){let a=t.length,n=[];for(let e=0;e<a;e++){let s=[],o=[];s.push((e+a-1)%a,e,(e+1)%a),o.push(0,1,0);let l=function(e){let t=e.length,i=Array(t);for(let e=0;e!==t;++e)i[e]=e;return i.sort(function(t,i){return e[t]-e[i]}),i}(s);s=as(s,1,l),o=as(o,1,l),r||0!==s[0]||(s.push(a),o.push(o[0])),n.push(new NumberKeyframeTrack(".morphTargetInfluences["+t[e].name+"]",s,o).scale(1/i))}return new this(e,-1,n)}static findByName(e,t){let i=e;Array.isArray(e)||(i=e.geometry&&e.geometry.animations||e.animations);for(let e=0;e<i.length;e++)if(i[e].name===t)return i[e];return null}static CreateClipsFromMorphTargetSequences(e,t,i){let r={},a=/^([\w-]*?)([\d]+)$/;for(let t=0,i=e.length;t<i;t++){let i=e[t],n=i.name.match(a);if(n&&n.length>1){let e=n[1],t=r[e];t||(r[e]=t=[]),t.push(i)}}let n=[];for(let e in r)n.push(this.CreateFromMorphTargetSequence(e,r[e],t,i));return n}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let i=function(e,t,i,r,a){if(0!==i.length){let n=[],s=[];ao(i,n,s,r),0!==n.length&&a.push(new e(t,n,s))}},r=[],a=e.name||"default",n=e.fps||30,s=e.blendMode,o=e.length||-1,l=e.hierarchy||[];for(let e=0;e<l.length;e++){let a=l[e].keys;if(a&&0!==a.length)if(a[0].morphTargets){let e,t={};for(e=0;e<a.length;e++)if(a[e].morphTargets)for(let i=0;i<a[e].morphTargets.length;i++)t[a[e].morphTargets[i]]=-1;for(let i in t){let t=[],n=[];for(let r=0;r!==a[e].morphTargets.length;++r){let r=a[e];t.push(r.time),n.push(+(r.morphTarget===i))}r.push(new NumberKeyframeTrack(".morphTargetInfluence["+i+"]",t,n))}o=t.length*n}else{let n=".bones["+t[e].name+"]";i(VectorKeyframeTrack,n+".position",a,"pos",r),i(QuaternionKeyframeTrack,n+".quaternion",a,"rot",r),i(VectorKeyframeTrack,n+".scale",a,"scl",r)}}return 0===r.length?null:new this(a,o,r,s)}resetDuration(){let e=this.tracks,t=0;for(let i=0,r=e.length;i!==r;++i){let e=this.tracks[i];t=Math.max(t,e.times[e.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};let al={enabled:!1,files:{},add:function(e,t){!1!==this.enabled&&(this.files[e]=t)},get:function(e){if(!1!==this.enabled)return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}};let LoadingManager=class LoadingManager{constructor(e,t,i){let r,a=this,n=!1,s=0,o=0,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(e){o++,!1===n&&void 0!==a.onStart&&a.onStart(e,s,o),n=!0},this.itemEnd=function(e){s++,void 0!==a.onProgress&&a.onProgress(e,s,o),s===o&&(n=!1,void 0!==a.onLoad&&a.onLoad())},this.itemError=function(e){void 0!==a.onError&&a.onError(e)},this.resolveURL=function(e){return r?r(e):e},this.setURLModifier=function(e){return r=e,this},this.addHandler=function(e,t){return l.push(e,t),this},this.removeHandler=function(e){let t=l.indexOf(e);return -1!==t&&l.splice(t,2),this},this.getHandler=function(e){for(let t=0,i=l.length;t<i;t+=2){let i=l[t],r=l[t+1];if(i.global&&(i.lastIndex=0),i.test(e))return r}return null}}};let ah=new LoadingManager;let Loader=class Loader{constructor(e){this.manager=void 0!==e?e:ah,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(r,a){i.load(e,r,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};let ac={};let HttpError=class HttpError extends Error{constructor(e,t){super(e),this.response=t}};let FileLoader=class FileLoader extends Loader{constructor(e){super(e)}load(e,t,i,r){void 0===e&&(e=""),void 0!==this.path&&(e=this.path+e),e=this.manager.resolveURL(e);let a=al.get(e);if(void 0!==a)return this.manager.itemStart(e),setTimeout(()=>{t&&t(a),this.manager.itemEnd(e)},0),a;if(void 0!==ac[e])return void ac[e].push({onLoad:t,onProgress:i,onError:r});ac[e]=[],ac[e].push({onLoad:t,onProgress:i,onError:r});let n=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),s=this.mimeType,o=this.responseType;fetch(n).then(t=>{if(200===t.status||0===t.status){if(0===t.status&&console.warn("THREE.FileLoader: HTTP Status 0 received."),"undefined"==typeof ReadableStream||void 0===t.body||void 0===t.body.getReader)return t;let i=ac[e],r=t.body.getReader(),a=t.headers.get("Content-Length")||t.headers.get("X-File-Size"),n=a?parseInt(a):0,s=0!==n,o=0;return new Response(new ReadableStream({start(e){!function t(){r.read().then(({done:r,value:a})=>{if(r)e.close();else{let r=new ProgressEvent("progress",{lengthComputable:s,loaded:o+=a.byteLength,total:n});for(let e=0,t=i.length;e<t;e++){let t=i[e];t.onProgress&&t.onProgress(r)}e.enqueue(a),t()}})}()}}))}throw new HttpError(`fetch for "${t.url}" responded with ${t.status}: ${t.statusText}`,t)}).then(e=>{switch(o){case"arraybuffer":return e.arrayBuffer();case"blob":return e.blob();case"document":return e.text().then(e=>new DOMParser().parseFromString(e,s));case"json":return e.json();default:if(void 0===s)return e.text();{let t=/charset="?([^;"\s]*)"?/i.exec(s),i=new TextDecoder(t&&t[1]?t[1].toLowerCase():void 0);return e.arrayBuffer().then(e=>i.decode(e))}}}).then(t=>{al.add(e,t);let i=ac[e];delete ac[e];for(let e=0,r=i.length;e<r;e++){let r=i[e];r.onLoad&&r.onLoad(t)}}).catch(t=>{let i=ac[e];if(void 0===i)throw this.manager.itemError(e),t;delete ac[e];for(let e=0,r=i.length;e<r;e++){let r=i[e];r.onError&&r.onError(t)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};let ImageLoader=class ImageLoader extends Loader{constructor(e){super(e)}load(e,t,i,r){void 0!==this.path&&(e=this.path+e),e=this.manager.resolveURL(e);let a=this,n=al.get(e);if(void 0!==n)return a.manager.itemStart(e),setTimeout(function(){t&&t(n),a.manager.itemEnd(e)},0),n;let s=K("img");function o(){h(),al.add(e,this),t&&t(this),a.manager.itemEnd(e)}function l(t){h(),r&&r(t),a.manager.itemError(e),a.manager.itemEnd(e)}function h(){s.removeEventListener("load",o,!1),s.removeEventListener("error",l,!1)}return s.addEventListener("load",o,!1),s.addEventListener("error",l,!1),"data:"!==e.slice(0,5)&&void 0!==this.crossOrigin&&(s.crossOrigin=this.crossOrigin),a.manager.itemStart(e),s.src=e,s}};let TextureLoader=class TextureLoader extends Loader{constructor(e){super(e)}load(e,t,i,r){let a=new Texture,n=new ImageLoader(this.manager);return n.setCrossOrigin(this.crossOrigin),n.setPath(this.path),n.load(e,function(e){a.image=e,a.needsUpdate=!0,void 0!==t&&t(a)},i,r),a}};let Light=class Light extends Object3D{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Color(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,void 0!==this.groundColor&&(t.object.groundColor=this.groundColor.getHex()),void 0!==this.distance&&(t.object.distance=this.distance),void 0!==this.angle&&(t.object.angle=this.angle),void 0!==this.decay&&(t.object.decay=this.decay),void 0!==this.penumbra&&(t.object.penumbra=this.penumbra),void 0!==this.shadow&&(t.object.shadow=this.shadow.toJSON()),t}};let au=new Matrix4,ad=new Vector3,ap=new Vector3;let LightShadow=class LightShadow{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Vector2(512,512),this.map=null,this.mapPass=null,this.matrix=new Matrix4,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Frustum,this._frameExtents=new Vector2(1,1),this._viewportCount=1,this._viewports=[new Vector4(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;ad.setFromMatrixPosition(e.matrixWorld),t.position.copy(ad),ap.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ap),t.updateMatrixWorld(),au.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(au),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(au)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return 0!==this.bias&&(e.bias=this.bias),0!==this.normalBias&&(e.normalBias=this.normalBias),1!==this.radius&&(e.radius=this.radius),(512!==this.mapSize.x||512!==this.mapSize.y)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};let SpotLightShadow=class SpotLightShadow extends LightShadow{constructor(){super(new PerspectiveCamera(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,i=2*U*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,a=e.distance||t.far;(i!==t.fov||r!==t.aspect||a!==t.far)&&(t.fov=i,t.aspect=r,t.far=a,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}};let SpotLight=class SpotLight extends Light{constructor(e,t,i=0,r=Math.PI/3,a=0,n=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Object3D.DefaultUp),this.updateMatrix(),this.target=new Object3D,this.distance=i,this.angle=r,this.penumbra=a,this.decay=n,this.map=null,this.shadow=new SpotLightShadow}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};let af=new Matrix4,am=new Vector3,ag=new Vector3;let PointLightShadow=class PointLightShadow extends LightShadow{constructor(){super(new PerspectiveCamera(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Vector2(4,2),this._viewportCount=6,this._viewports=[new Vector4(2,1,1,1),new Vector4(0,1,1,1),new Vector4(3,1,1,1),new Vector4(1,1,1,1),new Vector4(3,0,1,1),new Vector4(1,0,1,1)],this._cubeDirections=[new Vector3(1,0,0),new Vector3(-1,0,0),new Vector3(0,0,1),new Vector3(0,0,-1),new Vector3(0,1,0),new Vector3(0,-1,0)],this._cubeUps=[new Vector3(0,1,0),new Vector3(0,1,0),new Vector3(0,1,0),new Vector3(0,1,0),new Vector3(0,0,1),new Vector3(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,r=this.matrix,a=e.distance||i.far;a!==i.far&&(i.far=a,i.updateProjectionMatrix()),am.setFromMatrixPosition(e.matrixWorld),i.position.copy(am),ag.copy(i.position),ag.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(ag),i.updateMatrixWorld(),r.makeTranslation(-am.x,-am.y,-am.z),af.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(af)}};let PointLight=class PointLight extends Light{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new PointLightShadow}get power(){return 4*this.intensity*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}};let DirectionalLightShadow=class DirectionalLightShadow extends LightShadow{constructor(){super(new OrthographicCamera(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}};let DirectionalLight=class DirectionalLight extends Light{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Object3D.DefaultUp),this.updateMatrix(),this.target=new Object3D,this.shadow=new DirectionalLightShadow}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};let LoaderUtils=class LoaderUtils{static decodeText(e){if("undefined"!=typeof TextDecoder)return new TextDecoder().decode(e);let t="";for(let i=0,r=e.length;i<r;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch(e){return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return -1===t?"./":e.slice(0,t+1)}static resolveURL(e,t){return"string"!=typeof e||""===e?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e))?e:t+e}};let InstancedBufferGeometry=class InstancedBufferGeometry extends BufferGeometry{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};let ImageBitmapLoader=class ImageBitmapLoader extends Loader{constructor(e){super(e),this.isImageBitmapLoader=!0,"undefined"==typeof createImageBitmap&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),"undefined"==typeof fetch&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,r){void 0===e&&(e=""),void 0!==this.path&&(e=this.path+e),e=this.manager.resolveURL(e);let a=this,n=al.get(e);if(void 0!==n)return a.manager.itemStart(e),setTimeout(function(){t&&t(n),a.manager.itemEnd(e)},0),n;let s={};s.credentials="anonymous"===this.crossOrigin?"same-origin":"include",s.headers=this.requestHeader,fetch(e,s).then(function(e){return e.blob()}).then(function(e){return createImageBitmap(e,Object.assign(a.options,{colorSpaceConversion:"none"}))}).then(function(i){al.add(e,i),t&&t(i),a.manager.itemEnd(e)}).catch(function(t){r&&r(t),a.manager.itemError(e),a.manager.itemEnd(e)}),a.manager.itemStart(e)}};let Clock=class Clock{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=av(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=av();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function av(){return("undefined"==typeof performance?Date:performance).now()}let a_="\\[\\]\\.:\\/",ax=RegExp("["+a_+"]","g"),ay="[^"+a_+"]",aM="[^"+a_.replace("\\.","")+"]",ab=/((?:WC+[\/:])*)/.source.replace("WC",ay),aS=/(WCOD+)?/.source.replace("WCOD",aM),aT=RegExp("^"+ab+aS+/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ay)+/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ay)+"$"),aw=["material","materials","bones","map"];let Composite=class Composite{constructor(e,t,i){let r=i||PropertyBinding.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];void 0!==r&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,a=i.length;r!==a;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}};let PropertyBinding=class PropertyBinding{constructor(e,t,i){this.path=t,this.parsedPath=i||PropertyBinding.parseTrackName(t),this.node=PropertyBinding.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new PropertyBinding.Composite(e,t,i):new PropertyBinding(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(ax,"")}static parseTrackName(e){let t=aT.exec(e);if(null===t)throw Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(void 0!==r&&-1!==r){let e=i.nodeName.substring(r+1);-1!==aw.indexOf(e)&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=e)}if(null===i.propertyName||0===i.propertyName.length)throw Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(void 0===t||""===t||"."===t||-1===t||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(void 0!==i)return i}if(e.children){let i=function(e){for(let r=0;r<e.length;r++){let a=e[r];if(a.name===t||a.uuid===t)return a;let n=i(a.children);if(n)return n}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let r=0,a=i.length;r!==a;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let r=0,a=i.length;r!==a;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,a=i.length;r!==a;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,a=i.length;r!==a;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,r=t.propertyName,a=t.propertyIndex;if(e||(e=PropertyBinding.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e)return void console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");if(i){let r=t.objectIndex;switch(i){case"materials":if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.materials)return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);e=e.material.materials;break;case"bones":if(!e.skeleton)return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);e=e.skeleton.bones;for(let t=0;t<e.length;t++)if(e[t].name===r){r=t;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.map)return void console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);e=e.material.map;break;default:if(void 0===e[i])return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);e=e[i]}if(void 0!==r){if(void 0===e[r])return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);e=e[r]}}let n=e[r];if(void 0===n)return void console.error("THREE.PropertyBinding: Trying to update property for track: "+t.nodeName+"."+r+" but it wasn't found.",e);let s=this.Versioning.None;this.targetObject=e,void 0!==e.needsUpdate?s=this.Versioning.NeedsUpdate:void 0!==e.matrixWorldNeedsUpdate&&(s=this.Versioning.MatrixWorldNeedsUpdate);let o=this.BindingType.Direct;if(void 0!==a){if("morphTargetInfluences"===r){if(!e.geometry)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);if(!e.geometry.morphAttributes)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);void 0!==e.morphTargetDictionary[a]&&(a=e.morphTargetDictionary[a])}o=this.BindingType.ArrayElement,this.resolvedProperty=n,this.propertyIndex=a}else void 0!==n.fromArray&&void 0!==n.toArray?(o=this.BindingType.HasFromToArray,this.resolvedProperty=n):Array.isArray(n)?(o=this.BindingType.EntireArray,this.resolvedProperty=n):this.propertyName=r;this.getValue=this.GetterByBindingType[o],this.setValue=this.SetterByBindingTypeAndVersioning[o][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};PropertyBinding.Composite=Composite,PropertyBinding.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},PropertyBinding.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},PropertyBinding.prototype.GetterByBindingType=[PropertyBinding.prototype._getValue_direct,PropertyBinding.prototype._getValue_array,PropertyBinding.prototype._getValue_arrayElement,PropertyBinding.prototype._getValue_toArray],PropertyBinding.prototype.SetterByBindingTypeAndVersioning=[[PropertyBinding.prototype._setValue_direct,PropertyBinding.prototype._setValue_direct_setNeedsUpdate,PropertyBinding.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[PropertyBinding.prototype._setValue_array,PropertyBinding.prototype._setValue_array_setNeedsUpdate,PropertyBinding.prototype._setValue_array_setMatrixWorldNeedsUpdate],[PropertyBinding.prototype._setValue_arrayElement,PropertyBinding.prototype._setValue_arrayElement_setNeedsUpdate,PropertyBinding.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[PropertyBinding.prototype._setValue_fromArray,PropertyBinding.prototype._setValue_fromArray_setNeedsUpdate,PropertyBinding.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]],new Float32Array(1);let Raycaster=class Raycaster{constructor(e,t,i=0,r=1/0){this.ray=new Ray(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new Layers,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return aA(e,this,i,t),i.sort(aE),i}intersectObjects(e,t=!0,i=[]){for(let r=0,a=e.length;r<a;r++)aA(e[r],this,i,t);return i.sort(aE),i}};function aE(e,t){return e.distance-t.distance}function aA(e,t,i,r){if(e.layers.test(t.layers)&&e.raycast(t,i),!0===r){let r=e.children;for(let e=0,a=r.length;e<a;e++)aA(r[e],t,i,!0)}}let Spherical=class Spherical{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),0===this.radius?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(z(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};"undefined"!=typeof __THREE_DEVTOOLS__&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"148"}})),"undefined"!=typeof window&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="148")}}]);
//# sourceMappingURL=vendors-node_modules_three_examples_jsm_loaders_GLTFLoader_js-7035746ceb46.js.map

