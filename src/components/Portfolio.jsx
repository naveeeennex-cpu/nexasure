import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  Smartphone,
  Heart,
  Briefcase,
  Lock,
  PhoneCall,
  CalendarDays,
  Sofa,
  Calculator,
} from 'lucide-react'
import ProjectDetail from './ProjectDetail'

const projects = [
  {
    title: 'Stranger Meet',
    logo: '/logos/stranger%20meet.png',
    icon: Smartphone,
    category: 'Mobile App',
    description: 'A full-featured social networking app with real-time chat, video calls, events, stories, and reels.',
    fullDescription: 'Stranger Meet is a cross-platform social networking application built with Flutter and FastAPI. It enables users to connect through real-time messaging, video calls powered by WebRTC, event discovery, stories, reels, and community groups — all in one seamless experience.',
    tech: ['Flutter', 'FastAPI', 'WebRTC', 'PostgreSQL', 'Firebase', 'Razorpay'],
    highlight: '10K+ Downloads · Real-time Chat · Video Calls',
    features: [
      'Real-time chat with encryption',
      'WebRTC video & voice calls',
      'Stories & Reels (short video)',
      'Event booking with payments',
      'Community groups',
      'Push notifications (FCM)',
      'Google Sign-In & Auth',
      'Location-based discovery',
      'Profile with interests & bio',
    ],
    screenshots: [
      { src: '/portfolio/strangermeet/splash_screen.jpg', label: 'Splash Screen' },
      { src: '/portfolio/strangermeet/onboarding page.jpg', label: 'Onboarding' },
      { src: '/portfolio/strangermeet/sign_page.jpg', label: 'Sign In' },
      { src: '/portfolio/strangermeet/home+page.jpg', label: 'Home Feed' },
      { src: '/portfolio/strangermeet/explore_page.jpg', label: 'Explore' },
      { src: '/portfolio/strangermeet/community_page.jpg', label: 'Communities' },
      { src: '/portfolio/strangermeet/my_profile_page.jpg', label: 'My Profile' },
      { src: '/portfolio/strangermeet/trip_detail_page.jpg', label: 'Event Detail' },
      { src: '/portfolio/strangermeet/trip_detail_page_2.jpg', label: 'Event Booking' },
    ],
  },
  {
    title: 'MatchInMinutes',
    logo: "https://matchinminutes.com/assets/icon.png",
    category: 'Matrimony Platform',
    description: 'A modern matrimony platform with smart discovery, secure messaging, gift sending, and subscription packages.',
    fullDescription: 'MatchInMinutes is a feature-rich matrimony web platform designed to help users find their life partner quickly and safely. It offers intelligent partner discovery, secure in-app messaging, profile credits, gift sending, and tiered subscription packages — built with a clean, trust-focused UI.',
    tech: ['React', 'Node.js', 'MongoDB', 'Razorpay', 'Tailwind'],
    highlight: 'Smart Discovery · Secure Messaging · Subscription Packages',
    website: 'http://MatchInminutes.com',
    features: [
      'Smart partner discovery & filters',
      'Secure in-app messaging',
      'Profile credits system',
      'Send gifts to matches',
      'Subscription packages',
      'Detailed profile management',
      'Secure sign-in & verification',
      'Responsive web experience',
    ],
    screenshots: [
      { src: 'https://github.com/naveeeennex-cpu/nexasure/blob/main/portfolio-images/matchinminutes/landingpage_MIM.png?raw=true', label: 'Landing Page' },
      { src: 'https://github.com/naveeeennex-cpu/nexasure/blob/main/portfolio-images/matchinminutes/sigin_MIM.png?raw=true', label: 'Sign In' },
      { src: 'https://github.com/naveeeennex-cpu/nexasure/blob/main/portfolio-images/matchinminutes/discovery_MIM.png?raw=true', label: 'Partner Discovery' },
      { src: 'https://github.com/naveeeennex-cpu/nexasure/blob/main/portfolio-images/matchinminutes/myprofile_MIM.png?raw=true', label: 'My Profile' },
      { src: 'https://github.com/naveeeennex-cpu/nexasure/blob/main/portfolio-images/matchinminutes/message_MIM.png?raw=true', label: 'Messages' },
      { src: 'https://github.com/naveeeennex-cpu/nexasure/blob/main/portfolio-images/matchinminutes/Gift_MIM.png?raw=true', label: 'Send Gift' },
      { src: 'https://github.com/naveeeennex-cpu/nexasure/blob/main/portfolio-images/matchinminutes/credit_MIM.png?raw=true', label: 'Credits' },
      { src: 'https://github.com/naveeeennex-cpu/nexasure/blob/main/portfolio-images/matchinminutes/package_MIM.png?raw=true', label: 'Packages' },
    ],
  },
  {
    title: 'Aptirix',
    logo: '/logos/aptirix_logo.jpg',
    icon: Briefcase,
    category: 'Web Platform',
    description: 'AI-powered recruitment platform with automated video interviews, resume builder, ATS scoring, and proctoring.',
    fullDescription: 'Aptirix is a comprehensive AI-driven recruitment and training platform. It streamlines hiring with automated video interviews powered by Gemini AI, real-time proctoring using MediaPipe, ATS-compatible resume building, and skill-based course recommendations — all in one unified platform.',
    tech: ['React', 'FastAPI', 'Gemini AI', 'MediaPipe', 'Google Cloud', 'Razorpay'],
    highlight: 'AI Interviews · ATS Scoring · Live Proctoring',
    website: 'https://www.aptirix.com/',
    features: [
      'AI-powered video interviews',
      'Resume builder with templates',
      'ATS compatibility scoring',
      'Real-time face & device proctoring',
      'Skill-based course recommendations',
      'Job posting & applicant tracking',
      'Live course teaching platform',
      'Placement training modules',
      'Multi-role dashboard (HR, Candidate, Admin)',
    ],
    screenshots: [
      { src: '/portfolio/aptirix/landing_page.png', label: 'Landing Page' },
      { src: '/portfolio/aptirix/course_list.png', label: 'Course List' },
      { src: '/portfolio/aptirix/course_deatil.png', label: 'Course Detail' },
      { src: '/portfolio/aptirix/course_teaching.png', label: 'Course Teaching' },
      { src: '/portfolio/aptirix/placement_training.png', label: 'Placement Training' },
      { src: '/portfolio/aptirix/ai_trainer_setup.png', label: 'AI Trainer Setup' },
      { src: '/portfolio/aptirix/Ai_training_page.png', label: 'AI Training Page' },
    ],
  },
  {
    title: 'MLV Enterprises',
    logo: '/logos/mlv_logo.png',
    icon: Lock,
    category: 'E-Commerce Website',
    description: 'Smart lock products showcase with online booking, WhatsApp integration, and installation scheduling.',
    fullDescription: 'MLV Enterprises is a modern e-commerce website for a smart lock company based in Chennai. It features a product catalog, online installation booking with form validation, WhatsApp direct chat integration, and email notifications — all built with a responsive, animated UI.',
    tech: ['React', 'Tailwind', 'Vite', 'EmailJS', 'Framer Motion'],
    highlight: '500+ Installations · WhatsApp Booking · E-Commerce',
    website: 'https://www.mlventerprises.in/',
    features: [
      'Product catalog with details',
      'Online installation booking',
      'WhatsApp chat integration',
      'Email form submissions',
      'Responsive mobile design',
      'SEO optimized',
    ],
    screenshots: [
      { src: '/portfolio/mlv/mlv_enterprises.jpeg', label: 'Homepage' },
      { src: '/portfolio/mlv/mlv_product_page.jpeg', label: 'Product Page' },
      { src: '/portfolio/mlv/mlv_footer.png', label: 'Footer' },
    ],
  },
  {
    title: 'AI Sales Call Bot',
    icon: PhoneCall,
    category: 'Voice AI',
    description: 'Twilio-powered AI voice bot that acts as a sales executive, handles calls in Tanglish, and records analytics.',
    tech: ['Twilio', 'Pipecat AI', 'Gemini', 'Google STT/TTS'],
    highlight: 'Tanglish AI Agent · Call Analytics · Auto Follow-up',
    features: [
      'Inbound & outbound call handling',
      'Tanglish (Tamil+English) AI agent',
      'Real-time speech-to-text',
      'Post-call sentiment analysis',
      'Stereo call recording',
      'CRM data integration',
    ],
  },
  {
    title: 'Pick Your Slot',
    logo: '/logos/pys_logo.png',
    icon: CalendarDays,
    category: 'Mobile App',
    description: 'A multi-service slot booking app for venues, salons, car wash, courses, and games with customer and vendor apps.',
    fullDescription: 'Pick Your Slot is a comprehensive slot booking platform with separate Customer and Vendor apps. Customers can book venue slots, salon appointments, car wash services, sports coaching courses, and host/join games. The platform supports bulk bookings, group passes, promo codes, and integrated payments.',
    tech: ['Figma', 'UI Design', 'Flutter', 'Prototyping'],
    highlight: '43 Screens · Venue/Salon/Car Wash · Group Passes',
    features: [
      'Venue & court slot booking',
      'Salon appointment scheduling',
      'Car wash service booking',
      'Sports coaching courses',
      'Host & join games',
      'Bulk booking system',
      'Group passes & memberships',
      'Promo codes & payments',
      'Profile management',
    ],
    screenshotSections: [
      {
        title: 'Customer App — Home & Profile',
        screenshots: [
          { src: '/portfolio/pys-customer/pickyourslot_home_page.png', label: 'Home Page' },
          { src: '/portfolio/pys-customer/profile.png', label: 'Profile' },
          { src: '/portfolio/pys-customer/profile_edit.png', label: 'Edit Profile' },
          { src: '/portfolio/pys-customer/my_booking.png', label: 'My Bookings' },
          { src: '/portfolio/pys-customer/my_bookings_details.png', label: 'Booking Details' },
          { src: '/portfolio/pys-customer/payment_failed.png', label: 'Payment Failed' },
          { src: '/portfolio/pys-customer/pop_saved.png', label: 'Saved' },
          { src: '/portfolio/pys-customer/apply_promo_list.png', label: 'Promo Codes' },
        ],
      },
      {
        title: 'Customer App — Venue Booking',
        screenshots: [
          { src: '/portfolio/pys-customer/venue_details_&_sports_selection.png', label: 'Venue Details' },
          { src: '/portfolio/pys-customer/venue_slot_&_date_selection_(with_court_option).png', label: 'Slot Selection' },
          { src: '/portfolio/pys-customer/venue_booking_summary_&_payment.png', label: 'Booking Summary' },
          { src: '/portfolio/pys-customer/venue_booking_confirmation.png', label: 'Confirmation' },
        ],
      },
      {
        title: 'Customer App — Salon Booking',
        screenshots: [
          { src: '/portfolio/pys-customer/salon_listing_screen.png', label: 'Salon List' },
          { src: '/portfolio/pys-customer/salon_profile_&_service_selection.png', label: 'Service Selection' },
          { src: '/portfolio/pys-customer/salon_stylist_&_slot_selection.png', label: 'Stylist & Slot' },
          { src: '/portfolio/pys-customer/salon_booking_summary.png', label: 'Booking Summary' },
        ],
      },
      {
        title: 'Customer App — Car Wash',
        screenshots: [
          { src: '/portfolio/pys-customer/car_wash_vendor_list.png', label: 'Vendor List' },
          { src: '/portfolio/pys-customer/car_wash_services_&_vehicle_type.png', label: 'Services & Vehicle' },
          { src: '/portfolio/pys-customer/car_wash_summary.png', label: 'Summary' },
        ],
      },
      {
        title: 'Customer App — Courses & Coaching',
        screenshots: [
          { src: '/portfolio/pys-customer/course_listing_screen.png', label: 'Course List' },
          { src: '/portfolio/pys-customer/course_details_(enhanced).png', label: 'Course Details' },
          { src: '/portfolio/pys-customer/course_info_&_partner_courses.png', label: 'Partner Courses' },
          { src: '/portfolio/pys-customer/course_enrollment_confirmation.png', label: 'Enrollment' },
          { src: '/portfolio/pys-customer/coach_profile_screen.png', label: 'Coach Profile' },
        ],
      },
      {
        title: 'Customer App — Games & Groups',
        screenshots: [
          { src: '/portfolio/pys-customer/game_skill.png', label: 'Game Skill' },
          { src: '/portfolio/pys-customer/join_game_list.png', label: 'Join Game' },
          { src: '/portfolio/pys-customer/join_game_details_&_roster.png', label: 'Game Details' },
          { src: '/portfolio/pys-customer/join_game_player_prefs_&_terms.png', label: 'Player Prefs' },
          { src: '/portfolio/pys-customer/join_game_final_confirmation.png', label: 'Confirmation' },
          { src: '/portfolio/pys-customer/host_a_game_-_details_input.png', label: 'Host Game' },
          { src: '/portfolio/pys-customer/host_a_game_-_invite_&_confirm.png', label: 'Invite & Confirm' },
          { src: '/portfolio/pys-customer/my_hosted_games_screen.png', label: 'My Hosted Games' },
          { src: '/portfolio/pys-customer/group_creation_&_player_invite_(enhanced).png', label: 'Create Group' },
        ],
      },
      {
        title: 'Customer App — Passes & Bulk Booking',
        screenshots: [
          { src: '/portfolio/pys-customer/badminton_group_pass_details.png', label: 'Group Pass' },
          { src: '/portfolio/pys-customer/monthly_group_pass_details_screen.png', label: 'Monthly Pass' },
          { src: '/portfolio/pys-customer/professional_available_passes_list.png', label: 'Available Passes' },
          { src: '/portfolio/pys-customer/group_pass_payment_&_split_(enhanced).png', label: 'Payment Split' },
          { src: '/portfolio/pys-customer/bulk_booking_initial_options.png', label: 'Bulk Options' },
          { src: '/portfolio/pys-customer/bulk_booking_venue_list.png', label: 'Bulk Venue List' },
          { src: '/portfolio/pys-customer/bulk_booking_venue_details_(time_range_selection).png', label: 'Time Selection' },
          { src: '/portfolio/pys-customer/bulk_booking_custom_request_form.png', label: 'Custom Request' },
          { src: '/portfolio/pys-customer/bulk_booking_summary_&_payment.png', label: 'Bulk Summary' },
          { src: '/portfolio/pys-customer/bulk_booking_request_sent_confirmation.png', label: 'Request Sent' },
        ],
      },
    ],
  },
  {
    title: 'Shivay Interior Decor',
    logo: '/logos/Shiveyinteriordecor_logo.png',
    icon: Sofa,
    category: 'Website',
    description: 'Professional website for an interior decoration company showcasing their design portfolio and services.',
    fullDescription: 'Shivay Interior Decor is a professional website built for an interior decoration company. It showcases their design portfolio, services, and past projects with a clean, modern layout optimized for lead generation and SEO.',
    tech: ['Web Design', 'Responsive', 'SEO'],
    highlight: 'Portfolio Showcase · SEO Optimized · Lead Generation',
    website: 'https://www.shivayinteriordecor.com/',
    features: [
      'Interior design portfolio showcase',
      'Service listings with details',
      'Contact & inquiry forms',
      'Responsive mobile design',
      'SEO optimized for local search',
      'Fast loading & performance',
    ],
    screenshots: [
      { src: '/portfolio/sid/Shivay_interiordecor.jpeg', label: 'Homepage' },
      { src: '/portfolio/sid/Shivay_interior_decor_2.jpeg', label: 'Services & Portfolio' },
    ],
  },
  {
    title: 'Green Access Tax',
    logo: '/logos/greenacesss.png',
    icon: Calculator,
    category: 'Website',
    description: 'Professional website for a tax consulting firm offering GST, income tax, and business registration services.',
    fullDescription: 'Green Access Tax is a clean, professional website built for a tax consulting company. It showcases their services including GST filing, income tax returns, business registration, and financial advisory — designed to generate leads and build client trust.',
    tech: ['Web Design', 'Responsive', 'SEO'],
    highlight: 'Tax Services · Lead Generation · Professional Design',
    website: 'https://greenaccesstax.in/',
    features: [
      'Service listings (GST, ITR, Registration)',
      'Contact & inquiry forms',
      'Professional brand design',
      'Responsive mobile layout',
      'SEO optimized for local search',
      'Fast loading performance',
    ],
    screenshots: [
      { src: '/portfolio/greenaccess/green_access_tax.jpeg', label: 'Full Website' },
    ],
  },
]

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <>
      <section id="portfolio" className="py-24 bg-dark relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-purple-glow text-sm font-medium mb-3 tracking-[0.2em] uppercase">Selected Projects</p>
            <h2 className="text-3xl md:text-5xl font-bold text-white font-[var(--font-space)]">
              Our Work
            </h2>
          </motion.div>

          {/* Project Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                onClick={() => setSelectedProject(project)}
                className="rounded-xl border border-white/[0.08] bg-white/[0.02] hover:border-white/[0.15] hover:bg-white/[0.04] transition-all duration-300 p-6 flex flex-col group cursor-pointer"
              >
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl border flex items-center justify-center overflow-hidden transition-colors ${
                      project.logo
                        ? 'bg-white border-white/20 p-1'
                        : 'bg-purple/15 border-purple/20 group-hover:bg-purple/25'
                    }`}
                  >
                    {project.logo ? (
                      <img
                        src={project.logo}
                        alt={`${project.title} logo`}
                        className="w-full h-full object-contain"
                      />
                    ) : project.icon ? (
                      <project.icon size={20} className="text-purple-glow" />
                    ) : null}
                  </div>
                  <span className="text-[11px] uppercase tracking-wider text-muted font-medium">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white font-[var(--font-space)] mb-3">
                  {project.title}
                </h3>

                <p className="text-sm text-muted leading-relaxed mb-5">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] px-3 py-1.5 rounded-full text-muted-light border border-white/[0.1] bg-white/[0.03]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <p className="text-sm font-semibold text-amber-400 mt-auto mb-4 leading-relaxed">
                  {project.highlight}
                </p>

                <span className="inline-flex items-center gap-1 text-sm text-muted-light group-hover:text-white transition-colors">
                  View case study
                  <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectDetail
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  )
}
