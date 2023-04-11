import { FaBeer } from 'react-icons/fa';
import Button from '../components/Button';

const ButtonPage = () => {
  const onClick = () => {
    console.log('click')
  }

  return (
    <div>
      <div>
        <Button primary onClick={onClick} className={'mb-20'}>
          <FaBeer />
          Primary
        </Button>
      </div>
      <div>
        <Button secondary>Secondary</Button>
      </div>
      <div>
        <Button success>Success</Button>
      </div>
      <div>
        <Button warning>Warning</Button>
      </div>
      <div>
        <Button danger>Danger</Button>
      </div>
      <div>
        <Button primary rounded>Primary</Button>
      </div>
      <div>
        <Button secondary outline>Secondary</Button>
      </div>
      <div>
        <Button success rounded outline>Success</Button>
      </div>
      <div>
        <Button warning>Warning</Button>
      </div>
      <div>
        <Button danger>Danger</Button>
      </div>
    </div>
  )
}

export default ButtonPage
