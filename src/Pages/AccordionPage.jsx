import Accordion from "../Components/Accordion";

function AccordionPage() {
  const items = [
    {
      id: "001",
      label: "Can I use React?",
      content: "Yes, you can use React!",
    },
    {
      id: "002",
      label: "Can I use Javascript?",
      content: "Yes, you can use Javascript!",
    },
    {
      id: "003",
      label: "Can I use Angular?",
      content: "Yes, you can use Angular!",
    },
  ];

  return <Accordion items={items} />;
}

export default AccordionPage;
