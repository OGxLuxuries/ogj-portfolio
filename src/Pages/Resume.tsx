import "../CSS/Resume.css"

function Resume() {
  return (
    <>
      
      <section className="main-content grid-container rounded">
      <h1>Resume</h1>
      <embed
    src="/Oliver_Gomes_Resume.pdf#toolbar=0&navpanes=0&scrollbar=0"
    type="application/pdf"
    height="100%"
    width="100%"
></embed>
      </section>
    </>
  );
}

export default Resume;
