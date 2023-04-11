import Accordion from "../components/Accordion"

const AccordionPage = () => {
  const items = [
    {
      id: 'asd',
      label: 'Can I use React on a project?',
      content: 'You can use React'
    },
    {
      id: 'jkl',
      label: 'Can I use JavaScript on a project?',
      content: 'You can use JavaScript too'
    },
    {
      id: 'qwe',
      label: 'Can I use TypeScript on a project?',
      content: 'Yeah, TypeScript is fine'
    }
  ]

  return (
    <Accordion items={items}/>
  )
}

export default AccordionPage