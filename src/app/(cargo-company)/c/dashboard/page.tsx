import { ProfileReminder } from '@/components/profile-reminder/page'
import { UserTypes } from '@/types/base.d'

export default async function CompanyDashboardPage(): Promise<JSX.Element> {
  return (
    <div className="responsive">
      CompanyDashboardPage
      <ProfileReminder userType={UserTypes.company} />
    </div>
  )
}