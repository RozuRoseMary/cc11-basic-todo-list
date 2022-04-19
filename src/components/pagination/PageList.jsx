import PageItem from "./PageItem";

function PageList() {
  return (
    <ul className="pagination pagination-sm mb-0">
      <PageItem>
        <li className="fa-solid fa-angle-left small"></li>
      </PageItem>
      <PageItem disabled={true}>1</PageItem>
      <PageItem active={true}>2</PageItem>
      <PageItem>3</PageItem>
      <PageItem>
        <li className="fa-solid fa-angle-right small"></li>
      </PageItem>
    </ul>
  );
}

export default PageList;
