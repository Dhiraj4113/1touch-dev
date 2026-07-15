import { redirect } from 'next/navigation';

/** Legacy URL — canonical blog lives at /blog */
export default function InsightsRedirect() {
  redirect('/blog');
}
