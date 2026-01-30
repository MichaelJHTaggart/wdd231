import { setTitle, renderSections } from "./output.mjs";
import byuiCourse from './modules.mjs';  
import { setSectionSelection } from './sections.mjs';

console.log(setTitle, renderSections, byuiCourse, setSectionSelection)

document.querySelector("#enrollStudent").addEventListener("click", function () {
  const sectionNum = Number(document.querySelector("#sectionNumber").value);
  byuiCourse.changeEnrollment(sectionNum);
  renderSections(this.sections);
});
document.querySelector("#dropStudent").addEventListener("click", function () {
  const sectionNum = Number(document.querySelector("#sectionNumber").value);
  byuiCourse.changeEnrollment(sectionNum, false);   
  renderSections(this.sections);
});

setTitle(byuiCourse);
setSectionSelection(byuiCourse.sections);
renderSections(byuiCourse.sections);