"use client";

import React from 'react';
import PageLayout from '../components/PageLayout';
import PageHeading from '../components/PageHeading';
import Figure from '../components/Figure';
import NextProject from '../components/NextProject';

interface QA {
  question: string;
  answer: React.ReactNode[];
  image?: { src: string; alt: string };
}

const INTERVIEW: QA[] = [
  {
    question: 'What are your main responsibilities as a Senior Product Designer?',
    answer: [
      "My main priorities as a Senior Product Designer are to oversee high-quality design deliverables, support the team's goals, concept features, and thoughtfully tell data-driven stories. There's definitely more to my job than what I mentioned but overall, pursue the design of empowering our users.",
    ],
  },
  {
    question: 'What is a typical day (or week) like for you?',
    answer: [
      'Chaotic fun! A typical day starts with my team and our daily standup at 9:30 am. Everyone discusses what they worked on the day before and what’s on their agenda for the day. The standup includes our project manager, product manager, two other designers, three QA analysts, tech director, and several developers.',
      'Afterward, I have a meeting with my UX Design Team at 10:45 am, where again we discuss our agenda for the week. It’s one of my favorite meetings because our manager will ask, "Are there any blockers?" I love this question because it shows how important support is at CNN. In between meetings, I will have Sketch fired up (now Figma), Spotify blasting through my headphones, Slack, Zeplin, Miro, and several tabs related to the election and previous years.',
      'The entire week is sprinkled with meetings, but normally, Thursdays are the most stressful. It’s when we have to present to our editorial team, directors, and stakeholders. Personally, I love this meeting because I will receive some amazing feedback on the work we’re designing. The rest of the week is spent in roundtables, research updates, dev grooming sessions, and time spent updating mocks and concepts.',
    ],
  },
  {
    question: 'What do you like most about your work?',
    answer: [
      'How collaborative it is. I like that I’m able to bounce ideas with my colleagues. Before CNN, oftentimes, I was the UX advocate and leader and drove the design from start to finish. I’m a decisive designer; however, it’s important to get feedback from your peers. You never know what your colleagues have come across that may inspire you based on their experiences.',
      'Also, I like how we are empowering users with information. I love seeing how it all comes together from concept to development. I am still amazed that over 120 million people saw our work on Election Night and the days after. It was our Super Bowl night as a team. All the hard work was worth every bit of it.',
    ],
    image: { src: '/thinkful1.png', alt: 'Thinkful interview' },
  },
  {
    question: 'What kinds of problems do you deal with?',
    answer: [
      'Who has the final say in a design. It was a struggle at times. We’re empowered as designers, but our ideas will often be superseded by stakeholders who felt their views were a higher priority. It’s not easy because you’re attempting to balance high-quality design, user experience, storytelling, research, data visualization, advertising, and development. Everyone wants to deliver great work.',
      'Time was another issue. You can’t move the election date. I was used to moving in a fast-paced environment, but CNN was a different level. Looking back, our turnaround times from concept to development were insane. Often we would forget the day of the week. It definitely kept us on our toes.',
    ],
  },
  {
    question: 'What kinds of decisions do you make?',
    answer: [
      'What’s the best way to tell this data visualization story to my team with all of the requirements? I usually will spend a day or two coming up with concepts and share with my UX design colleagues before presenting them to the larger team. We’re in charge of the design, of course, but how it’s presented is the harder issue. What exactly should be our primary focus on the page — content placement, modules, CRMs, data visualizations, and ads? It’s fun but overwhelming when you have so many elements to consider.',
    ],
  },
  {
    question: 'How did you begin your career?',
    answer: [
      'My career started in Fort Lauderdale, Florida, with a small design agency in 2004. My job title at the time was Web Designer. It’s interesting looking back at how I was doing a lot of what I do today, but it wasn’t called user experience — just web design. I recall doing site maps, user journeys, inserting Google Analytics for clients, and a lot of front-end development.',
    ],
  },
  {
    question: 'What steps would you recommend I take to prepare to enter the field?',
    answer: [
      'Absorb as much as you can, but be patient with yourself. It’s a lot to learn and understand: articles, books, tutorials, case studies, videos. Since you’re in a UX bootcamp, it’s a great solid foundation to start with. Afterward, don’t rest on it. Continue to learn and seek out those who are where you would like to be. Also, start writing. Keep a journal of your experiences and where you would like to be in 6 months to a year.',
      'Don’t be afraid to send a LinkedIn note to people you admire asking for career advice. Get different perspectives. I probably would have saved myself some time if I had reached out to my network rather than feeling like I had to do it alone. You will be surprised at how many people are willing to help you in your career.',
    ],
    image: { src: '/thinkful2.png', alt: 'Thinkful interview' },
  },
  {
    question:
      'What skills, abilities, and personal attributes are essential to success in this field?',
    answer: [
      'Have an insatiable appetite for learning. I always tell my students at Thinkful there is no one stopping you from learning how to code and user-research. Taking the UX (or UI) route is not an easy one. Many think we spend a lot of our time in Sketch, but we are definitely researching.',
      'Also, learn how to articulate your design decisions. You can’t say, "I think it looks good this way." Usually, that doesn’t fly. You have to have valid reasons for your design choices.',
      'Be nice. I know it sounds simple, but you would be amazed how many opportunities were given to me because I was a pleasure to work with. Word of mouth goes a long way where the design community knows each other and recruiters talk. Other skills I would recommend: emotional intelligence, data analytics, content strategy, and being flexible.',
    ],
  },
  {
    question: 'What are the most effective strategies for seeking a position in this field?',
    answer: [
      'Work on personal projects that excite you and work on projects where you think the tech industry is headed. The most impressive portfolios I’ve come across are the ones that are solving user and business problems. Learn how to tell a story in your case studies: what happened, what was successful (show metrics), what failed, and what you honestly learned.',
      'Learn to network. This is a hard strategy, even for myself. I’ve always felt my skills, talents, and sheer grit will help recruiters recognize my value. If I add someone on LinkedIn, I admire them or would like to work with them in the future.',
      'Overall the most effective strategy is reinvesting in yourself. Taking courses, learning new skills, and never giving up.',
    ],
  },
  {
    question:
      'Can you recommend trade journals, magazines, or professional associations?',
    answer: [
      <>
        Some of my favorites are{' '}
        <a href="https://uxmag.com/" target="_blank" rel="noopener noreferrer">UX Mag</a>,{' '}
        <a href="https://www.webdesignernews.com/" target="_blank" rel="noopener noreferrer">
          WebdesignerNews
        </a>
        ,{' '}
        <a href="https://www.smashingmagazine.com/" target="_blank" rel="noopener noreferrer">
          Smashing Magazine
        </a>
        ,{' '}
        <a href="https://www.inc.com/" target="_blank" rel="noopener noreferrer">Inc.</a>, and{' '}
        <a href="https://www.entrepreneur.com/magazine" target="_blank" rel="noopener noreferrer">
          Entrepreneur
        </a>
        . Also{' '}
        <a href="https://ixda.org/" target="_blank" rel="noopener noreferrer">IxDA</a> and{' '}
        <a href="https://www.aiga.org/" target="_blank" rel="noopener noreferrer">AIGA</a>.
      </>,
    ],
  },
  {
    question: 'If you could do it all over again, would you choose the same path?',
    answer: [
      'Great question. When I look back on my path, it’s been a fun and hard ride. Early on, I always felt I was never learning enough, and then I realized the industry forces you to be adaptable. There’s always a new skill or process to learn. I’m proud of the path I’ve taken. If I had to talk to my younger self, I would tell him to be a little more fearless; things have a way of working out. Even if they don’t, there’s nothing wrong with taking a step back and trying again.',
    ],
    image: { src: '/thinkful3.png', alt: 'Thinkful interview' },
  },
];

export default function Interview() {
  return (
    <PageLayout navbarKey="navbar-interview">
      <div className="gutter pt-[72px] pb-[48px] max-sm:pt-[34px] max-sm:pb-[28px]">
        <PageHeading
          eyebrow="Interview · Thinkful"
          title="On mentorship and design"
          redPeriod
          lede="I started mentoring in the fall of 2019 as a way to give back and stay connected to the next wave of designers. It's become one of the most grounding parts of my design journey."
        />
        <p className="micro-label mt-[24px]">Interview by Carlton Mckoy</p>
      </div>

      <section className="gutter pb-[48px] max-sm:pb-[28px]">
        {INTERVIEW.map((qa, index) => (
          <div
            key={qa.question}
            className="border-t border-[color:var(--hair-strong)] py-[36px] max-sm:py-[24px] grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-x-[64px] gap-y-[18px] items-start"
          >
            <div className="lg:sticky lg:top-8">
              <span className="mono text-[11px] text-[color:var(--ink-42)]">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h2 className="display t-xs mt-[12px] measure-tight">{qa.question}</h2>
            </div>

            <div className="rich-text flex flex-col gap-[18px]">
              {qa.answer.map((paragraph, i) => (
                <p
                  key={i}
                  className="text-[17px] max-sm:text-[15px] leading-[1.6] text-[color:var(--ink-70)]"
                >
                  {paragraph}
                </p>
              ))}

              {qa.image && (
                <Figure
                  src={qa.image.src}
                  alt={qa.image.alt}
                  className="mt-[10px]"
                />
              )}
            </div>
          </div>
        ))}
      </section>

      <NextProject
        label="Keep reading"
        title="Selected work"
        href="/work"
      />
    </PageLayout>
  );
}
