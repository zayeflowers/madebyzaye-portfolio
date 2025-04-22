"use client";

import React from 'react';
import Image from 'next/image';
import Container from '../components/Container';
import PageLayout from '../components/PageLayout';
import PageHeading from '../components/PageHeading';

export default function Interview() {
  return (
    <PageLayout navbarKey="navbar-interview">
      <main className="w-full bg-[#f6f0e9] text-black pt-[16px] pb-0 min-h-screen relative">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-[#9E9E9E]"></div>
        <Container key="container-interview">
          <PageHeading title="Interview" />

          <div className="max-w-4xl mb-16">
            <p className="font-[family-name:var(--font-montserrat)] text-lg italic mb-8 leading-[28px]">
              Interview by Carlton Mckoy
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="font-[family-name:var(--font-montserrat)] font-bold text-xl mb-2">What are your main responsibilities as a Senior Product Designer?</h3>
                <p className="font-[family-name:var(--font-montserrat)] leading-[28px]">
                  My main priorities as a Senior Product Designer are to oversee high-quality design deliverables, support the team's goals, concept features, and thoughtfully tell data-driven stories. There's definitely more to my job than what I mentioned but overall, pursue the design of empowering our users.
                </p>
              </div>

              <div>
                <h3 className="font-[family-name:var(--font-montserrat)] font-bold text-xl mb-2">What is a typical day (or week) like for you?</h3>
                <p className="font-[family-name:var(--font-montserrat)] leading-[28px] mb-4">
                  Chaotic fun! A typical day starts with me with my team and doing our Daily Standup at 9:30 am. Everyone discusses what they worked on the day before and what's on their agenda for the day. The standup includes our project manager, product manager, two other designers, three QA analysts, tech director, and several developers.
                </p>
                <p className="font-[family-name:var(--font-montserrat)] leading-[28px] mb-4">
                  Afterward, I have a meeting with my UX Design Team at 10:45 am, where again we discuss our agenda for the week. It's one of my favorite meetings because our Manager will ask, "Are there any blockers?". I love this question because it show's how important support is at CNN. In between meetings, I will have Sketch fired up (now Figma), Spotify blasting through my headphones, Slack, Zeplin, Miro (wireframing and conceptual ideas), and several tabs related to the election and previous years.
                </p>
                <p className="font-[family-name:var(--font-montserrat)] leading-[28px]">
                  The entire week is sprinkled with meetings, but normally, Thursdays are the most stressful. It's when we have to present to our editorial team, directors, and stakeholders. Personally, I love this meeting because I will receive some amazing feedback on the work we're designing. The rest of the week is spent in roundtables, research updates, dev grooming sessions, and time spent updating mocks/concepts.
                </p>
              </div>

              <div>
                <h3 className="font-[family-name:var(--font-montserrat)] font-bold text-xl mb-2">What do you like most about your work?</h3>
                <p className="font-[family-name:var(--font-montserrat)] leading-[28px] mb-4">
                  How collaborative it is. I like that I'm able to bounce ideas with my colleagues. Before CNN, oftentimes, I was the UX advocate and leader and drove the design from start to finish. I'm a decisive designer; however, it's important to get feedback from your peers. "Does this work?" "What are your thoughts?" "I'm looking for feedback." You never know what your colleagues have come across that may inspire you based on their experiences.
                </p>
                <p className="font-[family-name:var(--font-montserrat)] leading-[28px] mb-8">
                  Also, I like how we are empowering users with information. I love seeing how it all comes together from concept to development. I am still amazed that over 120 million people saw our work on Election Night and the days after. It was our Superbowl night as a team. All the hard work was worth every bit of it.
                </p>

                <div className="w-full bg-white rounded-[14px] overflow-hidden shadow-[0_3px_10px_-3px_rgba(0,0,0,0.25)] border border-[#CCCCCC] border-opacity-50 mb-8">
                  <div className="p-6">
                    <div className="relative">
                      <Image
                        src="/thinkful1.png"
                        alt="Thinkful Interview Image 1"
                        width={1200}
                        height={675}
                        style={{ width: '100%', height: 'auto' }}
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-[family-name:var(--font-montserrat)] font-bold text-xl mb-2">What kinds of problems do you deal with?</h3>
                <p className="font-[family-name:var(--font-montserrat)] leading-[28px] mb-4">
                  Who has the final say so in a design. It was a struggle at times. We're empowered as designers, but our ideas will often be superseded by stakeholders who felt their views were a higher priority. It's not easy because you're attempting to balance high-quality design, user experience, storytelling, research, data visualization, advertising, and development. It's one helluva balancing act. Everyone wants to deliver great work.
                </p>
                <p className="font-[family-name:var(--font-montserrat)] leading-[28px]">
                  Time was another issue. You can't move the Election date. I was used to moving in a fast-paced environment, but CNN was a different level. Looking back, our turnaround times from concept to development were insane. Often we would forget the day of the week. Some days it was a blur. It definitely kept us on our toes.
                </p>
              </div>

              <div>
                <h3 className="font-[family-name:var(--font-montserrat)] font-bold text-xl mb-2">What kinds of decisions do you make?</h3>
                <p className="font-[family-name:var(--font-montserrat)] leading-[28px]">
                  <em>What's the best way to tell this data visualization story to my team with all of the requirements.</em> I usually will spend a day or two coming up with concepts and share with my UX design colleagues before presenting them to the larger team. We're in charge of the design, of course, but how it's presented is the harder issue. What exactly should be our primary focus on the page (content placement, modules, CRMs, data visualizations, and ads)? It's fun but overwhelming when you have so many elements to consider.
                </p>
              </div>

              <div>
                <h3 className="font-[family-name:var(--font-montserrat)] font-bold text-xl mb-2">How did you begin your career?</h3>
                <p className="font-[family-name:var(--font-montserrat)] leading-[28px]">
                  My career started in Fort Lauderdale, Florida, with a small design agency in 2004. My job title at the time was Web Designer. It's interesting looking back at how I was doing a lot of what I do today, but it wasn't called user experience—just web-design. I recall doing site maps, user journeys, inserting Google analytics for clients, and a lot of front-end development.
                </p>
              </div>

              <div>
                <h3 className="font-[family-name:var(--font-montserrat)] font-bold text-xl mb-2">What steps would you recommend I take to prepare to enter the field?</h3>
                <p className="font-[family-name:var(--font-montserrat)] leading-[28px] mb-4">
                  Absorb as much as you can, but be patient with yourself. It's a lot to learn and understand; articles, books, tutorials, case-studies, YouTube videos, etc. Since you're in a UX Bootcamp, it's a great solid foundation to start with. Afterward, don't rest on it. Continue to learn and seek out those who are where you would like to be. Also, start writing. Keep a journal of your experiences and where you would like to be in 6 months to a year. This will allow you to reflect on how far you've come.
                </p>
                <p className="font-[family-name:var(--font-montserrat)] leading-[28px] mb-8">
                  Don't be afraid to send a LinkedIn note to people you admire asking for career advice. Get different perspectives. I probably would have saved myself some time if I had reached out to my network rather than feeling like I had to do it alone. You will be surprised at how many people are willing to help you in your career.
                </p>

                <div className="w-full bg-white rounded-[14px] overflow-hidden shadow-[0_3px_10px_-3px_rgba(0,0,0,0.25)] border border-[#CCCCCC] border-opacity-50 mb-8">
                  <div className="p-6">
                    <div className="relative">
                      <Image
                        src="/thinkful2.png"
                        alt="Thinkful Interview Image 2"
                        width={1200}
                        height={675}
                        style={{ width: '100%', height: 'auto' }}
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-[family-name:var(--font-montserrat)] font-bold text-xl mb-2">What skills, abilities, and personal attributes are essential to success in your job/this field?</h3>
                <p className="font-[family-name:var(--font-montserrat)] leading-[28px] mb-4">
                  Have an insatiable appetite for learning. I always tell my students at Thinkful there is no one stopping you from learning how to code and user-research. Taking the UX (or UI) route is not an easy one. Many think we spend a lot of our time in Sketch, but we are definitely researching.
                </p>
                <p className="font-[family-name:var(--font-montserrat)] leading-[28px] mb-4">
                  Also, learn how to articulate your design decisions. You can't say, "I think it looks good this way." Usually, that doesn't fly. You have to have valid reasons for your design choices.
                </p>
                <p className="font-[family-name:var(--font-montserrat)] leading-[28px]">
                  Be nice. I know it sounds simple, but you would be amazed how many opportunities were given to me because I was a pleasure to work with. Word of mouth goes a long way where the design community knows each other and recruiters talk. Also, learn to be a team player and get the work done. Have fun. Other skills/attributes I would recommend are emotional intelligence, data analytics, content strategy, and being flexible.
                </p>
              </div>

              <div>
                <h3 className="font-[family-name:var(--font-montserrat)] font-bold text-xl mb-2">What are the most effective strategies for seeking a position in this field?</h3>
                <p className="font-[family-name:var(--font-montserrat)] leading-[28px] mb-4">
                  Work on personal projects that excite you and work on projects on where you think the tech industry is headed. The most impressive portfolios I've come across are the ones that are solving user and business problems. Learn how to tell a story in your case studies, explaining what happened, what was successful (show metrics!), what failed, what <em>honestly</em> did you learn.
                </p>
                <p className="font-[family-name:var(--font-montserrat)] leading-[28px] mb-4">
                  Learn to network. This is a hard strategy, even for myself. I've always felt my skills, talents, and sheer grit will help recruiters recognize my value. I don't believe in MySpacing friends on Linkedin. If I add someone, I admire them or would like to work with them in the future.
                </p>
                <p className="font-[family-name:var(--font-montserrat)] leading-[28px]">
                  Overall the most effective strategy is reinvesting in yourself. Taking courses, learning new skills (coding, public speaking, UI design, etc.), and never giving up.
                </p>
              </div>

              <div>
                <h3 className="font-[family-name:var(--font-montserrat)] font-bold text-xl mb-2">Can you recommend trade journals, magazines, or professional associations that would be helpful for my professional development?</h3>
                <p className="font-[family-name:var(--font-montserrat)] leading-[28px]">
                  Some of my favorites are <a href="https://uxmag.com/" className="text-[#CC0101] hover:text-[#a50000] transition-colors">UX Mag</a>, <a href="https://www.webdesignernews.com/" className="text-[#CC0101] hover:text-[#a50000] transition-colors">WebdesignerNews</a>, <a href="https://www.smashingmagazine.com/" className="text-[#CC0101] hover:text-[#a50000] transition-colors">Smashing Magazine</a>, <a href="https://www.inc.com/" className="text-[#CC0101] hover:text-[#a50000] transition-colors">Inc Magazine</a>, and <a href="https://www.entrepreneur.com/magazine" className="text-[#CC0101] hover:text-[#a50000] transition-colors">Entrepreneur Magazine</a>. <a href="https://ixda.org/" className="text-[#CC0101] hover:text-[#a50000] transition-colors">IxDA</a>, and <a href="https://www.aiga.org/" className="text-[#CC0101] hover:text-[#a50000] transition-colors">AIGA</a>.
                </p>
              </div>

              <div>
                <h3 className="font-[family-name:var(--font-montserrat)] font-bold text-xl mb-2">If you could do it all over again, would you choose the same path for yourself? If not, what would you change?</h3>

                <div className="w-full bg-white rounded-[14px] overflow-hidden shadow-[0_3px_10px_-3px_rgba(0,0,0,0.25)] border border-[#CCCCCC] border-opacity-50 mb-8">
                  <div className="p-6">
                    <div className="relative">
                      <Image
                        src="/thinkful3.png"
                        alt="Thinkful Interview Image 3"
                        width={1200}
                        height={675}
                        style={{ width: '100%', height: 'auto' }}
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>

                <p className="font-[family-name:var(--font-montserrat)] leading-[28px]">
                  Great question! When I look back on my path, it's been a fun and hard ride. Early on, I always felt I was never learning enough, and then I realized the industry forces you to be adaptable. There's always a new skill or process to learn. I'm proud of the path I've taken. If I had to talk to my younger self, I would tell him to be a little more fearless; things have a way of working out. Even if they don't, there's nothing wrong with taking a step back and trying again.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </main>
    </PageLayout>
  );
}
