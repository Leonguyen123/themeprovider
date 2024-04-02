import styles from './page.module.css'
import { H1, H2, Paragraph } from '@main/components/typography'
import { Button } from '@components/button'
import { Row, Container, Wrapper } from '@components/layouts'
import { Card } from '@components/card'
import Logo from '@main/assets/images/logo.png'
import original1 from '@main/assets/images/original-1.png'
import original2 from '@main/assets/images/original-2.jpg'
import original3 from '@main/assets/images/original-3.jpg'
import original4 from '@main/assets/images/original-4.png'
import original5 from '@main/assets/images/original-5.png'
import original6 from '@main/assets/images/original-6.jpg'
import original7 from '@main/assets/images/original-7.png'

const posts = [
  {
    id: 1,
    image: original1,
    title: 'View Salesforce CRM - Sales Analytics Platform',
    author: 'RonDesignLab ⭐️',
  },
  {
    id: 2,
    image: original2,
    title: 'View Salesforce CRM - Sales Analytics Platform',
    author: 'RonDesignLab ⭐️',
  },
  {
    id: 3,
    image: original3,
    title: 'View Salesforce CRM - Sales Analytics Platform',
    author: 'RonDesignLab ⭐️',
  },
  {
    id: 4,
    image: original4,
    title: 'View Salesforce CRM - Sales Analytics Platform',
    author: 'RonDesignLab ⭐️',
  },
  {
    id: 1,
    image: original5,
    title: 'View Salesforce CRM - Sales Analytics Platform',
    author: 'RonDesignLab ⭐️',
  },
  {
    id: 2,
    image: original6,
    title: 'View Salesforce CRM - Sales Analytics Platform',
    author: 'RonDesignLab ⭐️',
  },
  {
    id: 3,
    image: original7,
    title: 'View Salesforce CRM - Sales Analytics Platform',
    author: 'RonDesignLab ⭐️',
  },
  {
    id: 4,
    image: original4,
    title: 'View Salesforce CRM - Sales Analytics Platform',
    author: 'RonDesignLab ⭐️',
  },
]

export default async function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <div>
      <div className='wrapper'>
        <Wrapper className='py-16'>
          <Container>
            <div className='py-5 text-center'>
              <Button
                className='rounded-3xl px-5 py-3 border-round bg-black text-white'
                title='Over 3 million ready-to-work creatives!'
              />
              <H1
                className='pt-8 text-center'
                title={'Work with the world’s top creative talent'}
              />
              <Paragraph
                className='text-base font-normal'
                title='Connect with millions of top-rated designers & agencies around the world.'
              />
            </div>
          </Container>
        </Wrapper>
        <Wrapper className='py-16'>
            <H2
              className='text-center'
              title={'Explore inspiring designs'}
            />
          <Row cols={4} gap={4}>
            { posts.map(val => (
              <Card key={val.id} data={val} />
            )) }
          </Row>
        </Wrapper>
        <Wrapper className='text-center py-32 bg-amber-300'>
          <Container>
            <H2
              className='text-center'
              title={'Find your next designer today'}
            />
            <Paragraph
              className='text-base font-normal'
              title='The world’s leading brands use Dribbble to hire creative talent. Browse millions of top-rated portfolios to find your perfect creative match.'
            />
            <Button title="Get Started now" className="rounded-3xl px-5 py-3 bg-black text-white pr-2"/>
            <Button title="Learn about hiring" className="rounded-3xl px-4 py-3 bg-white font-medium"/>
          </Container>
        </Wrapper>
      </div>
    </div>
  )
}
