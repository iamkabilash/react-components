import Accordion from "../Components/Accordion";

function AccordionPage() {
  const items = [
    {
      id: "001",
      label: "Can I use React?",
      content:
        "Yes, you can use React on any project you want! Yes, you can use React on any project you want! Yes, you can use React on any project you want!",
    },
    {
      id: "002",
      label: "Can I use Javascript?",
      content:
        "Yes, you can use Javascript on any project you want! Yes, you can use Javascript on any project you want! Yes, you can use Javascript on any project you want!",
    },
    {
      id: "003",
      label: "Can I use Angular?",
      content:
        "Yes, you can use Angular on any project you want! Yes, you can use Angular on any project you want! Yes, you can use Angular on any project you want!",
    },
  ];

  return <Accordion items={items} />;
}

export default AccordionPage;
