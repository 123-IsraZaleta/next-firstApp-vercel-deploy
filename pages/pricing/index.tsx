import Link from 'next/link'
import { MainLayout } from '../../components/layouts/MainLayout'

export default function PricingPage() {
  return (
    
      <MainLayout>
        <h1>Pricing Page</h1>


          <h1 className={'title'}>
            {/* Go to <a href="/">Dashboard!</a> */}
            Go to <Link href="/">Dashboard!</Link>

          </h1>

          <p className={'description'}>
            Get started by editing{' '}
            <code className={'code'}>pages/contact.jsx</code>
          </p>

      </MainLayout>

  )
}

