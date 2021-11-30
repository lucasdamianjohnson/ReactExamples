import { Component } from "react";
import type { Mesh, Scene } from "@babylonjs/core";

import "./BabylonPage.css";
import {
  ShadowGenerator,
  UniversalCamera,
  Vector3,
  Texture,
  StandardMaterial,
  HemisphericLight,
  DirectionalLight,
  MeshBuilder,
  Color3,
} from "@babylonjs/core";
import { PageTitle } from "../../components/Titles/PageTitle/PageTitle.component";
import SceneComponent from "../../components/BabylonJS/BabylonJSCanvas";
type BabylonPageProperities = {};

type BabylonPAgeStates = {};

let box: Mesh;

const onSceneReady = (scene: Scene) => {
  const hemlight = new HemisphericLight(
    "Point",
    new Vector3(10, 100, 10),
    scene
  );
  hemlight.intensity = 0.5;
  hemlight.groundColor = Color3.Gray();
  const camera = new UniversalCamera(
    "UniversalCamera",
    new Vector3(-5, 3, -2),
    scene
  );
  camera.setTarget(Vector3.Zero());
  const light = new DirectionalLight("light1", new Vector3(-1, -3, 1), scene);
  light.position = new Vector3(3, 9, 3);
  light.intensity = 0.8;
  // Create a builtin shape
  const box = MeshBuilder.CreateBox("mesh", { size: 0.5 }, scene);
  const box2 = MeshBuilder.CreateBox("mesh", { size: 1 }, scene);
  const box3 = MeshBuilder.CreateBox("mesh", { size: 1 }, scene);
  const box4 = MeshBuilder.CreateBox("mesh", { size: 1 }, scene);
  const box5 = MeshBuilder.CreateBox("mesh", { size: 1 }, scene);
  box2.position.x += 1.5;
  box3.position.x -= 1.5;
  box4.position.z += 1.5;
  box5.position.z -= 1.5;
  box.position.y += 1;
  box2.position.y += 1;
  box3.position.y += 1;
  box4.position.y += 1;
  box5.position.y += 1;

  // Define a material
  box.setEnabled(true);
  const url =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAAQCAIAAAAOK2+WAAAErmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iCiAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIKICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgZXhpZjpQaXhlbFhEaW1lbnNpb249IjgwIgogICBleGlmOlBpeGVsWURpbWVuc2lvbj0iMTYiCiAgIGV4aWY6Q29sb3JTcGFjZT0iMSIKICAgdGlmZjpJbWFnZVdpZHRoPSI4MCIKICAgdGlmZjpJbWFnZUxlbmd0aD0iMTYiCiAgIHRpZmY6UmVzb2x1dGlvblVuaXQ9IjIiCiAgIHRpZmY6WFJlc29sdXRpb249IjcyLjAiCiAgIHRpZmY6WVJlc29sdXRpb249IjcyLjAiCiAgIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiCiAgIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIKICAgeG1wOk1vZGlmeURhdGU9IjIwMjAtMTEtMjJUMTc6MDctMDU6MDAiCiAgIHhtcDpNZXRhZGF0YURhdGU9IjIwMjAtMTEtMjJUMTc6MDctMDU6MDAiPgogICA8eG1wTU06SGlzdG9yeT4KICAgIDxyZGY6U2VxPgogICAgIDxyZGY6bGkKICAgICAgc3RFdnQ6YWN0aW9uPSJwcm9kdWNlZCIKICAgICAgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWZmaW5pdHkgUGhvdG8gKE1hciAzMSAyMDIwKSIKICAgICAgc3RFdnQ6d2hlbj0iMjAyMC0xMS0yMlQxNzowNy0wNTowMCIvPgogICAgPC9yZGY6U2VxPgogICA8L3htcE1NOkhpc3Rvcnk+CiAgPC9yZGY6RGVzY3JpcHRpb24+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+iZf6vgAAAYJpQ0NQc1JHQiBJRUM2MTk2Ni0yLjEAACiRdZHfK4NRGMc/GyI/mjJyQS2Nq00zJW6ULY2SNFOGm+21H2qbt/fd0nKr3CpK3Ph1wV/ArXKtFJGSKxeuiRvW63lttSV7Ts95Pud7zvN0znPAGkopab3WA+lMVgsGfI758IKj/oUmOminG3tE0dWxmZkpqtrnPRYz3rrNWtXP/WtNyzFdAUuD8KiialnhCeGptaxq8o6wXUlGloXPhF2aXFD4ztSjRX41OVHkb5O1UNAP1lZhR6KCoxWsJLW0sLwcZzqVU0r3MV/SHMvMzUrsEe9CJ0gAHw4mGcfPEAOMyDyEGy/9sqJKvuc3f5pVyVVkVsmjsUKCJFlcouakekxiXPSYjBR5s/9/+6rHB73F6s0+qHs2jPdeqN+GwpZhfB0ZRuEYap7gMlPOXz2E4Q/Rt8qa8wBsG3B+Vdaiu3CxCZ2PakSL/Eo14tZ4HN5OoSUMbTfQuFjsWWmfkwcIrctXXcPePvTJedvSD1ZRZ94ZAbbdAAAACXBIWXMAAAsTAAALEwEAmpwYAAABKklEQVRIieWXMW6DMBSGny0vORQrQ4YyMFB1zAWyRIYjAMrCBTJG9ZCBDBlYOUqkTMkVoMOrXGQ7BgJqZPEv+D0+G//GxgZgYSJ4oZt9L9ocdrLsLk+Qbg47yoWNziPEXOcZxpSLJo9IVhvpNvYoF3C/yoy7PJNZktVt7BkrkKyGx01Pusgz5d7H17eSOR8/ja28zFdlIkM/SGfn7f1RDb+my2kLAOuw6CWrMvGDVPJdMxa+G07r6RPDOCr6aBl1OW3RqiwM5xlbjejsHKL//Ly3y/yGB75b1Doshk9phZ8+RcdqnjU80CoA+EFalQnOZFyf9o8Q8t3QzvdKNTy2uYl8b/WJvK4/w23sWTZuop1jHOV/DTd5RLnQd3MU4QKPZjLjLr+4n4fF6QcTUTg6/i/BpwAAAABJRU5ErkJggg==";

  const url2 =
    "data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAEt2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iCiAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIKICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgZXhpZjpQaXhlbFhEaW1lbnNpb249IjE2IgogICBleGlmOlBpeGVsWURpbWVuc2lvbj0iMTYiCiAgIGV4aWY6Q29sb3JTcGFjZT0iMSIKICAgdGlmZjpJbWFnZVdpZHRoPSIxNiIKICAgdGlmZjpJbWFnZUxlbmd0aD0iMTYiCiAgIHRpZmY6UmVzb2x1dGlvblVuaXQ9IjIiCiAgIHRpZmY6WFJlc29sdXRpb249IjcyLjAiCiAgIHRpZmY6WVJlc29sdXRpb249IjcyLjAiCiAgIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiCiAgIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIKICAgeG1wOk1vZGlmeURhdGU9IjIwMjAtMTAtMjFUMTY6MzQ6NDYtMDQ6MDAiCiAgIHhtcDpNZXRhZGF0YURhdGU9IjIwMjAtMTAtMjFUMTY6MzQ6NDYtMDQ6MDAiPgogICA8eG1wTU06SGlzdG9yeT4KICAgIDxyZGY6U2VxPgogICAgIDxyZGY6bGkKICAgICAgc3RFdnQ6YWN0aW9uPSJwcm9kdWNlZCIKICAgICAgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWZmaW5pdHkgUGhvdG8gKE1hciAzMSAyMDIwKSIKICAgICAgc3RFdnQ6d2hlbj0iMjAyMC0xMC0yMVQxNjozNDo0Ni0wNDowMCIvPgogICAgPC9yZGY6U2VxPgogICA8L3htcE1NOkhpc3Rvcnk+CiAgPC9yZGY6RGVzY3JpcHRpb24+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+jxTnxwAAAYFpQ0NQc1JHQiBJRUM2MTk2Ni0yLjEAACiRdZHPK0RRFMc/M4jGaJRZWFi8NKyGxiixUUYaatI0RhlsZt78UvPj9d5IslW2U5TY+LXgL2CrrJUiUrKysCY26DnPqJlkzu3c87nfe8/p3nPBHs2peaPRB/lCSY8EA8pcbF5pfsKBGxdDKHHV0MbC4RB17f0WmxWv+6xa9c/9a63JlKGCrUV4VNX0kvCkcGilpFm8JexWs/Gk8ImwV5cLCt9YeqLCzxZnKvxpsR6NjIO9XVjJ1HCihtWsnheWl+PJ55bV3/tYL3GmCrMzErvFuzCIECSAwhQTjEtPBhiReYg+/PTLijr5vp/8aYqSq8qssYrOEhmylPCKuizVUxLToqdk5Fi1+v+3r0Z60F+p7gxA06NpvvZA8yZ8lU3z48A0vw6h4QHOC9X84j4Mv4lermqePXCtw+lFVUtsw9kGdN5rcT3+IzWI29NpeDmGthh0XIFjodKz332O7iC6Jl91CTu70CvnXYvfk7Nn+rY/v9EAAAAJcEhZcwAACxMAAAsTAQCanBgAAAEBSURBVCiRbVK7bsMwDGQoqjIMCQI6dPVWpED//3/8AR0EuwINS04HNoys5ODBFI7H4+Ny/bymdXFkAGAYRmiQ1gXOiD4Y69wzu44T7gmOSoj61eM2vDkSRqdt8tw9MmfRJZUUEnNuM7dSow+SzJzTupDEkOeWJD+OjKi2IHiFf5XzACQZJeicdKjjpKWwbaslMWd9MXneShWrJAbaVQz35K1U4CyzUpPYqWrf2noH1C7t+5fmRB+iD/7j+4U96xwclcjinn6ZCZHIyiQu2w8AEFl5L2UnsidL0Qfdbnsv0Qd1SFq0uw4Jn+8PNVuMitc6TsqQfeseHmN9aN+PT9hd5T8ViI2IsDukYgAAAABJRU5ErkJggg==";

  const tex = new Texture(
    "data:grass",
    scene,
    false,
    false,
    Texture.BILINEAR_SAMPLINGMODE,
    null,
    null,
    url,
    true
  );

  const pmat = new StandardMaterial("pmat", scene);
  pmat.diffuseTexture = tex;

  tex.uScale = 0.2;
  tex.vScale = 1;
  tex.uOffset = 0;


  box.material = pmat;
  box2.material = pmat;
  box3.material = pmat;
  box4.material = pmat;
  box5.material = pmat;
  const generator = new ShadowGenerator(512, light);
  generator.addShadowCaster(box);
  generator.addShadowCaster(box2);
  generator.addShadowCaster(box3);
  generator.addShadowCaster(box4);
  generator.addShadowCaster(box5);
  box.receiveShadows = true;
  box2.receiveShadows = true;
  box3.receiveShadows = true;
  box4.receiveShadows = true;
  box5.receiveShadows = true;

  tex.onLoadObservable.add(() => {
    tex.updateSamplingMode(Texture.NEAREST_NEAREST_MIPLINEAR);
  });

  const mat1 = new StandardMaterial("mat1", scene);
  const tex2 = new Texture(
    "data:floor",
    scene,
    false,
    false,
    Texture.BILINEAR_SAMPLINGMODE,
    null,
    null,
    url2,
    true
  );
  mat1.diffuseTexture = tex2;
  mat1.backFaceCulling = false;

  const ground = MeshBuilder.CreateGround(
    "ground1",
    { width: 200, height: 200 },
    scene
  );
  ground.receiveShadows = true;
  // Apply the material

  tex2.onLoadObservable.add(() => {
    tex2.updateSamplingMode(Texture.NEAREST_NEAREST_MIPLINEAR);
  });

  tex2.uScale = 200;
  tex2.vScale = 200;
  ground.material = mat1;

  let t = 10;
  scene.beforeRender = function () {
    box.rotation.x += 0.01;
    box.rotation.z += 0.01;
    box2.rotation.x += 0.01;
    box2.rotation.z += 0.01;
    box3.rotation.x += 0.01;
    box3.rotation.y += 0.01;
    box4.rotation.x += 0.01;
    box4.rotation.z += 0.01;
    box5.rotation.x += 0.01;
    box5.rotation.y += 0.01;

    if (t == 0) {
      if (tex.uOffset >= 0.8) {
        tex.uOffset = 0;
      } else {
        tex.uOffset += 0.2;
      }
      t = 10;
    } else {
      t--;
    }
  };
};

/**
 * Will run on every frame render.  We are spinning the box on y-axis.
 */
const onRender = (scene: Scene) => {
  if (box !== undefined) {
    var deltaTimeInMillis = scene.getEngine().getDeltaTime();

    const rpm = 10;
    box.rotation.y += (rpm / 60) * Math.PI * 2 * (deltaTimeInMillis / 1000);
  }
};

export class BabylonPage extends Component<
  BabylonPageProperities,
  BabylonPAgeStates
> {
  render() {
    return (
      <div className="app-content">
        <PageTitle title="Babylon" />
        <SceneComponent
          antialias
          onSceneReady={onSceneReady}
          onRender={onRender}
          id="renderCanvas"
        />
      </div>
    );
  }
}

export default BabylonPage;
