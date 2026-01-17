import type { PairingGuidance } from '@/lib/types';
// Extracted from ADETIS Low Behaviors.pdf table (all rows across all pages).
// Key is "Low Behaviors" (e.g., A, AD, AEI, ADETS). Wording preserved.

export const LOW_BEHAVIORS: PairingGuidance[] = [
  {
    key: `A`,
    lowBehaviors: `A`,
    leaderType: `The Oblivious Leader`,
    leaderTypeDescription: `This leader operates with incomplete awareness of what is truly happening on their team. Subtle warning
signs, recurring people issues, and emerging risks often go unnoticed until they become unavoidable. The
leader is frequently surprised by outcomes others saw coming months ago, which creates frustration and
erodes confidence in their judgment. Over time, the organization adapts by either hiding problems until
they explode or bypassing the leader to get real truth discussed elsewhere.`,
    whatTeamSees: `The team experiences leadership as unaware of what’s actually happening day to
day. Patterns that feel obvious to staff—burnout, disengagement, conflict, quiet
underperformance—don’t seem to register until outcomes suffer. People stop
raising early concerns because they don’t believe they’ll be noticed or acted on in
time.`,
    whatToDo: `• Do a weekly people map (thriving / struggling / at-risk) with 1 sentence why each.
• Add daily leadership rounding with 3 set questions: What's hard? What's unclear? What do you need?
• Track repeat issues for 14 days to spot patterns (not events).
• Ask 2 trusted people to tell you what you're missing and do not defend; just capture themes.
• Create an early-warning dashboard (call-outs, conflict, quality slips, mood shifts) and review weekly.`,
    commonSelfTalkTraps: `• Nothing major has blown up yet, so things must be mostly fine.
• If we just get through this week, everything will feel easier.
• I’m carrying too much to slow down and fix the root issues.
• Once one big problem is solved, the rest will take care of itself.`,
    counterQuestions: `• What patterns have repeated despite multiple fixes?
• Which single behavior change would create the biggest shift for the team this month?
• What am I tolerating that I’m calling “normal” right now?
• What would great leadership look like here if I removed my favorite excuse?`,
  },
  {
    key: `D`,
    lowBehaviors: `D`,
    leaderType: `The Hesitant Leader`,
    leaderTypeDescription: `This leader often knows what needs to happen but delays action to avoid discomfort, conflict, or
emotional fallout. Issues linger in “yellow” states because decisions are postponed, softened, or
reframed as “more time needed.” People experience uncertainty, ambiguity, and repeated conversations
without resolution. Over time, the team learns that urgency fades and accountability can be waited out,
which quietly trains drift into the culture.`,
    whatTeamSees: `The team experiences prolonged uncertainty because important decisions don’t
land. Conversations repeat, timelines move, and clarity is delayed until
circumstances force it. People learn that discomfort can be avoided through
delay, and “yellow” states become normal. Over time, accountability weakens
and frustration grows because problems linger unresolved.`,
    whatToDo: `• Start a decision log with deadlines (what / owner / by when) and review it twice a week.
• Use a 48-hour rule: once a decision is identified, schedule the action within 2 days.
• Use clear yes / clear no / clear not-yet with a date; avoid vague maybes.
• Script one hard conversation and do it within 72 hours; debrief what you learned.
• Define yellow-to-green rules: time limits, checkpoints, and the automatic next step if no change.`,
    commonSelfTalkTraps: `• I just need a little more information before I decide.
• If we just get through this week, everything will feel easier.
• I’m carrying too much to slow down and fix the root issues.
• Once one big problem is solved, the rest will take care of itself.`,
    counterQuestions: `• What decision am I delaying because it’s uncomfortable?
• Which single behavior change would create the biggest shift for the team this month?
• What am I tolerating that I’m calling “normal” right now?
• What would great leadership look like here if I removed my favorite excuse?`,
  },
  {
    key: `E`,
    lowBehaviors: `E`,
    leaderType: `The Controlling Leader`,
    leaderTypeDescription: `This leader struggles to truly transfer ownership, even when they verbally support development. They stay
involved in details, re-check work, and step in quickly when others struggle, which signals that outcomes
still belong to the leader. Team members become dependent, cautious, and less willing to stretch. Over
time, capable people stop growing because initiative becomes risky and the leader becomes the
bottleneck for progress.`,
    whatTeamSees: `The team feels that ownership is conditional and easily revoked. Responsibility
might be assigned, but authority doesn’t feel real because leadership steps back
in quickly when outcomes aren’t perfect. People become cautious, avoid
initiative, and wait for direction. Over time, the leader becomes the bottleneck
and development slows.`,
    whatToDo: `• Use a delegation ladder (inform / consult / decide / own) and name the level explicitly.
• Delegate outcomes, not tasks: define success, guardrails, and decision rights.
• Replace hovering with a coaching cadence (day 3, day 10, day 21) and questions-first check-ins.
• Let safe failures happen: pre-agree what learning mistakes are acceptable and how to recover.
• Recognize ownership behaviors publicly (initiative, problem-solving, follow-through), not just results.`,
    commonSelfTalkTraps: `• It’s faster if I just do it myself.
• If we just get through this week, everything will feel easier.
• I’m carrying too much to slow down and fix the root issues.
• Once one big problem is solved, the rest will take care of itself.`,
    counterQuestions: `• What am I holding that someone else could learn by owning?
• Which single behavior change would create the biggest shift for the team this month?
• What am I tolerating that I’m calling “normal” right now?
• What would great leadership look like here if I removed my favorite excuse?`,
  },
  {
    key: `T`,
    lowBehaviors: `T`,
    leaderType: `The Unreliable Leader`,
    leaderTypeDescription: `This leader’s intentions may be good, but their consistency and follow-through are unreliable.
Commitments slip, standards vary, and what was “important” last week can quietly change this week.
People begin to protect themselves by waiting for proof instead of trusting the leader’s word. Over time,
credibility erodes and the team shifts from partnership to self-preservation and escalation.`,
    whatTeamSees: `The team sees inconsistency between what is said and what is done.
Commitments vary with pressure, standards flex when it’s inconvenient, and
follow-through isn’t dependable. People protect themselves by waiting for proof
rather than trusting promises. Over time, credibility erodes, and communication
becomes more guarded and transactional.`,
    whatToDo: `• Create a commitments tracker (promise / due date / close loop) and review it daily.
• Close loops fast: Here is what I did, what is next, and when you will see it.
• Pick 2 non-negotiable standards and enforce them consistently for 30 days.
• When you miss, say it quickly and repair within 24 hours with a new date and a clear next step.
• Standardize follow-through: same cadence and consequences regardless of person or pressure.`,
    commonSelfTalkTraps: `• They know what I meant, even if I didn’t circle back.
• If we just get through this week, everything will feel easier.
• I’m carrying too much to slow down and fix the root issues.
• Once one big problem is solved, the rest will take care of itself.`,
    counterQuestions: `• What commitment did I make that I haven’t closed the loop on?
• Which single behavior change would create the biggest shift for the team this month?
• What am I tolerating that I’m calling “normal” right now?
• What would great leadership look like here if I removed my favorite excuse?`,
  },
  {
    key: `I`,
    lowBehaviors: `I`,
    leaderType: `The Transactional Leader`,
    leaderTypeDescription: `This leader focuses on tasks, outcomes, and compliance while rarely creating meaning or belief.
Conversations may be efficient, but they don’t leave people feeling valued, motivated, or connected to
purpose. Recognition is limited or generic, and invisible work goes unnoticed. Over time, discretionary
effort fades, and the team’s energy relies on pressure rather than genuine commitment.`,
    whatTeamSees: `The team feels that their work is measured but not deeply valued. Expectations
are clear, but meaning is rarely reinforced and recognition often feels generic or
absent. People comply, yet motivation fades when work is hard. Over time,
discretionary effort declines and employees do the minimum because purpose
feels thin.`,
    whatToDo: `• Connect one standard per day to resident/family impact so the why stays alive.
• Give one specific, behavior-based recognition every day (not outcome-only).
• Start meetings with a quick mission moment from the floor to reconnect meaning to work.
• Use why + what good looks like language in every corrective conversation.
• Ask each person what motivates them and mirror it back in assignments and coaching.`,
    commonSelfTalkTraps: `• They already know why this matters—I don’t need to say it.
• If we just get through this week, everything will feel easier.
• I’m carrying too much to slow down and fix the root issues.
• Once one big problem is solved, the rest will take care of itself.`,
    counterQuestions: `• When was the last time I connected this work to purpose?
• Which single behavior change would create the biggest shift for the team this month?
• What am I tolerating that I’m calling “normal” right now?
• What would great leadership look like here if I removed my favorite excuse?`,
  },
  {
    key: `S`,
    lowBehaviors: `S`,
    leaderType: `The Short-Sighted Leader`,
    leaderTypeDescription: `This leader prioritizes immediate relief and short-term wins over long-term organizational health.
Decisions are made for speed, comfort, or self-protection rather than stability, succession, and system
integrity. Problems are solved “for now,” but root causes and continuity are neglected. Over time, the
organization becomes fragile, personality-dependent, and repeatedly surprised by issues that good
stewardship would have prevented.`,
    whatTeamSees: `The team sees leadership solving today’s problems without protecting tomorrow.
Systems feel fragile, succession feels unclear, and continuity depends on
specific individuals rather than durable practices. When change happens, it feels
disruptive and stressful. Over time, staff sense that stability is temporary and the
future is not being intentionally protected.`,
    whatToDo: `• Build a 90-day future-protection plan (bench, systems, risks, capacity) and review weekly.
• Name successors for 3 key roles and create a simple now/next/later plan for each.
• Document and standardize the top 5 recurring processes so the system outlives you.
• Invest weekly in bench strength: delegate stretch roles, teach, and certify capability.
• Explain long-term tradeoffs in decisions so people see what you are protecting and why.`,
    commonSelfTalkTraps: `• We’ll deal with the future when this season calms down.
• If we just get through this week, everything will feel easier.
• I’m carrying too much to slow down and fix the root issues.
• Once one big problem is solved, the rest will take care of itself.`,
    counterQuestions: `• If I left tomorrow, what would break first?
• Which single behavior change would create the biggest shift for the team this month?
• What am I tolerating that I’m calling “normal” right now?
• What would great leadership look like here if I removed my favorite excuse?`,
  },
  {
    key: `AD`,
    lowBehaviors: `AD`,
    leaderType: `The Passive Observer`,
    leaderTypeDescription: `This leader may see problems but doesn’t convert insight into action, so drift becomes normal. People
issues are discussed repeatedly, yet the same patterns persist because decisions are delayed or avoided.
The organization experiences chronic ambiguity—everyone feels the problem but no one sees a turning
point. Over time, the culture learns to tolerate “almost good enough,” and stronger performers disengage
when they realize nothing truly changes.`,
    whatTeamSees: `The team notices leadership can describe problems but doesn’t convert insight
into action. Issues are acknowledged in meetings, yet the same patterns persist.
People start assuming follow-through won’t happen and lower expectations.
Over time, drift becomes culturally acceptable, and employees stop believing
that problems will be truly resolved.`,
    whatToDo: `• Do a weekly people map (thriving / struggling / at-risk) with 1 sentence why each.
• Add daily leadership rounding with 3 set questions: What's hard? What's unclear? What do you need?
• Track repeat issues for 14 days to spot patterns (not events).
• Start a decision log with deadlines (what / owner / by when) and review it twice a week.
• Use a 48-hour rule: once a decision is identified, schedule the action within 2 days.`,
    commonSelfTalkTraps: `• Nothing major has blown up yet, so things must be mostly fine.
• I just need a little more information before I decide.
• If we just get through this week, everything will feel easier.
• I’m carrying too much to slow down and fix the root issues.
• Once one big problem is solved, the rest will take care of itself.`,
    counterQuestions: `• What patterns have repeated despite multiple fixes?
• What decision am I delaying because it’s uncomfortable?
• Which single behavior change would create the biggest shift for the team this month?
• What am I tolerating that I’m calling “normal” right now?
• What would great leadership look like here if I removed my favorite excuse?`,
  },
  {
    key: `AE`,
    lowBehaviors: `AE`,
    leaderType: `The Unintended Micromanager`,
    leaderTypeDescription: `This leader tries to develop others but lacks the awareness to calibrate what to delegate, to whom, and
when. Ownership is handed off inconsistently, then taken back when outcomes get messy. The team
experiences mixed signals—“I trust you” followed by “I’ll just do it.” Over time, initiative declines because
people learn that autonomy is temporary and mistakes are not safe learning moments.`,
    whatTeamSees: `The team experiences mixed signals about trust and ownership. Tasks get
delegated, but decision authority remains unclear, and leadership steps back in
when results aren’t perfect. People learn autonomy is temporary and risky. Over
time, initiative declines, questions increase, and employees wait for approval
because ownership doesn’t feel safe.`,
    whatToDo: `• Do a weekly people map (thriving / struggling / at-risk) with 1 sentence why each.
• Add daily leadership rounding with 3 set questions: What's hard? What's unclear? What do you need?
• Track repeat issues for 14 days to spot patterns (not events).
• Use a delegation ladder (inform / consult / decide / own) and name the level explicitly.
• Delegate outcomes, not tasks: define success, guardrails, and decision rights.`,
    commonSelfTalkTraps: `• Nothing major has blown up yet, so things must be mostly fine.
• It’s faster if I just do it myself.
• If we just get through this week, everything will feel easier.
• I’m carrying too much to slow down and fix the root issues.
• Once one big problem is solved, the rest will take care of itself.`,
    counterQuestions: `• What patterns have repeated despite multiple fixes?
• What am I holding that someone else could learn by owning?
• Which single behavior change would create the biggest shift for the team this month?
• What am I tolerating that I’m calling “normal” right now?
• What would great leadership look like here if I removed my favorite excuse?`,
  },
  {
    key: `AT`,
    lowBehaviors: `AT`,
    leaderType: `The Inconsistent Leader`,
    leaderTypeDescription: `This leader misses how their inconsistencies impact trust because they don’t fully see the downstream
effect on the team. They may believe they are fair and steady, but people experience shifting
expectations, uneven standards, or selective follow-through. When challenged, the leader may be
surprised that trust is low because they don’t notice the small broken commitments. Over time, people
stop being honest, stop relying on the leader’s word, and start building workarounds.`,
    whatTeamSees: `The team experiences shifting standards and uneven follow-through, even when
intentions seem good. Promises may be sincere, but outcomes vary based on
pressure, mood, or competing priorities. People become cautious about relying
on commitments. Over time, staff escalate more, document more, and trust less
because reliability feels unpredictable.`,
    whatToDo: `• Do a weekly people map (thriving / struggling / at-risk) with 1 sentence why each.
• Add daily leadership rounding with 3 set questions: What's hard? What's unclear? What do you need?
• Track repeat issues for 14 days to spot patterns (not events).
• Create a commitments tracker (promise / due date / close loop) and review it daily.
• Close loops fast: Here is what I did, what is next, and when you will see it.`,
    commonSelfTalkTraps: `• Nothing major has blown up yet, so things must be mostly fine.
• They know what I meant, even if I didn’t circle back.
• If we just get through this week, everything will feel easier.
• I’m carrying too much to slow down and fix the root issues.
• Once one big problem is solved, the rest will take care of itself.`,
    counterQuestions: `• What patterns have repeated despite multiple fixes?
• What commitment did I make that I haven’t closed the loop on?
• Which single behavior change would create the biggest shift for the team this month?
• What am I tolerating that I’m calling “normal” right now?
• What would great leadership look like here if I removed my favorite excuse?`,
  },
  {
    key: `AI`,
    lowBehaviors: `AI`,
    leaderType: `The Disconnected Encourager`,
    leaderTypeDescription: `This leader offers encouragement and positivity without clearly seeing what is actually happening. Praise
may be real, but it lands as disconnected because underlying problems aren’t named or addressed.
People feel emotionally managed rather than truly led—comfort is provided instead of clarity. Over time,
optimism becomes noise, and the team learns that hard truths won’t be acknowledged until damage is
unavoidable.`,
    whatTeamSees: `The team hears encouragement that doesn’t fully match reality. Problems are
softened, reframed, or glossed over, leaving people feeling emotionally managed
instead of practically supported. Staff may feel briefly better after conversations,
but nothing changes. Over time, positivity loses credibility and employees stop
sharing hard truths early.`,
    whatToDo: `• Do a weekly people map (thriving / struggling / at-risk) with 1 sentence why each.
• Add daily leadership rounding with 3 set questions: What's hard? What's unclear? What do you need?
• Track repeat issues for 14 days to spot patterns (not events).
• Connect one standard per day to resident/family impact so the why stays alive.
• Give one specific, behavior-based recognition every day (not outcome-only).`,
    commonSelfTalkTraps: `• Nothing major has blown up yet, so things must be mostly fine.
• They already know why this matters—I don’t need to say it.
• If we just get through this week, everything will feel easier.
• I’m carrying too much to slow down and fix the root issues.
• Once one big problem is solved, the rest will take care of itself.`,
    counterQuestions: `• What patterns have repeated despite multiple fixes?
• When was the last time I connected this work to purpose?
• Which single behavior change would create the biggest shift for the team this month?
• What am I tolerating that I’m calling “normal” right now?
• What would great leadership look like here if I removed my favorite excuse?`,
  },
  {
    key: `AS`,
    lowBehaviors: `AS`,
    leaderType: `The Near-Sighted Leader`,
    leaderTypeDescription: `This leader struggles to see long-term risk while focusing on immediate operations, which creates a false
sense of stability. Early warnings about succession gaps, fragile systems, or cultural erosion go unnoticed.
The organization may look fine in the short run, but it is quietly accumulating structural debt. Over time,
the team gets hit by preventable crises and feels like leadership is always reacting rather than protecting
the future.`,
    whatTeamSees: `The team experiences operational steadiness in the short term but senses long-
term fragility underneath. Succession, bench strength, and system durability
aren’t discussed with urgency. When disruption hits, it feels sudden even though
signals existed. Over time, people lose confidence that leadership is protecting
the future and reducing preventable risk.`,
    whatToDo: `• Do a weekly people map (thriving / struggling / at-risk) with 1 sentence why each.
• Add daily leadership rounding with 3 set questions: What's hard? What's unclear? What do you need?
• Track repeat issues for 14 days to spot patterns (not events).
• Build a 90-day future-protection plan (bench, systems, risks, capacity) and review weekly.
• Name successors for 3 key roles and create a simple now/next/later plan for each.`,
    commonSelfTalkTraps: `• Nothing major has blown up yet, so things must be mostly fine.
• We’ll deal with the future when this season calms down.
• If we just get through this week, everything will feel easier.
• I’m carrying too much to slow down and fix the root issues.
• Once one big problem is solved, the rest will take care of itself.`,
    counterQuestions: `• What patterns have repeated despite multiple fixes?
• If I left tomorrow, what would break first?
• Which single behavior change would create the biggest shift for the team this month?
• What am I tolerating that I’m calling “normal” right now?
• What would great leadership look like here if I removed my favorite excuse?`,
  },
  {
    key: `DE`,
    lowBehaviors: `DE`,
    leaderType: `The Power Hoarder`,
    leaderTypeDescription: `This leader keeps authority centralized by delaying decisions and limiting real ownership transfer.
Responsibility may be assigned, but power remains with the leader, so people hesitate to act without
permission. Progress slows because everything requires approval, and capable team members feel
constrained. Over time, initiative dies, leadership capacity shrinks, and the organization becomes
dependent on the leader for momentum.`,
    whatTeamSees: `The team feels decision-making is centralized and progress requires permission.
Ownership may be assigned, but authority remains with the leader, so people
hesitate to act. Momentum slows because everything needs approval. Over time,
capable people disengage or stop stretching because initiative feels pointless
when power stays at the top.`,
    whatToDo: `• Start a decision log with deadlines (what / owner / by when) and review it twice a week.
• Use a 48-hour rule: once a decision is identified, schedule the action within 2 days.
• Use clear yes / clear no / clear not-yet with a date; avoid vague maybes.
• Use a delegation ladder (inform / consult / decide / own) and name the level explicitly.
• Delegate outcomes, not tasks: define success, guardrails, and decision rights.`,
    commonSelfTalkTraps: `• I just need a little more information before I decide.
• It’s faster if I just do it myself.
• If we just get through this week, everything will feel easier.
• I’m carrying too much to slow down and fix the root issues.
• Once one big problem is solved, the rest will take care of itself.`,
    counterQuestions: `• What decision am I delaying because it’s uncomfortable?
• What am I holding that someone else could learn by owning?
• Which single behavior change would create the biggest shift for the team this month?
• What am I tolerating that I’m calling “normal” right now?
• What would great leadership look like here if I removed my favorite excuse?`,
  },
  {
    key: `DT`,
    lowBehaviors: `DT`,
    leaderType: `The Soft Enforcer`,
    leaderTypeDescription: `This leader avoids discomfort and also struggles to hold a consistent standard, creating soft
accountability. Consequences are delayed, watered down, or inconsistently applied, especially when the
leader fears pushback. People learn that rules are flexible and that escalation is often required for action.
Over time, trust in fairness drops, high performers feel punished by tolerance, and mediocrity becomes
protected by inertia.`,
    whatTeamSees: `The team experiences accountability as inconsistent and negotiable. Some
standards are enforced while others are tolerated, often depending on who is
involved or how uncomfortable enforcement will be. High performers feel
resentment watching exceptions persist. Over time, fairness feels unreliable and
staff learn that consequences can be avoided through delay or escalation.`,
    whatToDo: `• Start a decision log with deadlines (what / owner / by when) and review it twice a week.
• Use a 48-hour rule: once a decision is identified, schedule the action within 2 days.
• Use clear yes / clear no / clear not-yet with a date; avoid vague maybes.
• Create a commitments tracker (promise / due date / close loop) and review it daily.
• Close loops fast: Here is what I did, what is next, and when you will see it.`,
    commonSelfTalkTraps: `• I just need a little more information before I decide.
• They know what I meant, even if I didn’t circle back.
• If we just get through this week, everything will feel easier.
• I’m carrying too much to slow down and fix the root issues.
• Once one big problem is solved, the rest will take care of itself.`,
    counterQuestions: `• What decision am I delaying because it’s uncomfortable?
• What commitment did I make that I haven’t closed the loop on?
• Which single behavior change would create the biggest shift for the team this month?
• What am I tolerating that I’m calling “normal” right now?
• What would great leadership look like here if I removed my favorite excuse?`,
  },
  {
    key: `DI`,
    lowBehaviors: `DI`,
    leaderType: `The Results-Only Driver`,
    leaderTypeDescription: `This leader pushes outcomes and action but rarely creates meaning or belief that sustains effort.
Momentum is generated through urgency, pressure, and constant “next steps,” not through purpose or
inspiration. People comply, but the emotional load rises and motivation becomes fragile. Over time,
burnout increases, discretionary effort disappears, and performance becomes dependent on the leader’s
intensity rather than true ownership.`,
    whatTeamSees: `The team feels pushed to execute without being pulled by belief. Action happens
through urgency, pressure, and constant follow-up rather than purpose. People
comply, but energy drains quickly and motivation becomes fragile. Over time,
burnout rises and leaders must apply more pressure to get the same
performance because internal commitment weakens.`,
    whatToDo: `• Start a decision log with deadlines (what / owner / by when) and review it twice a week.
• Use a 48-hour rule: once a decision is identified, schedule the action within 2 days.
• Use clear yes / clear no / clear not-yet with a date; avoid vague maybes.
• Connect one standard per day to resident/family impact so the why stays alive.
• Give one specific, behavior-based recognition every day (not outcome-only).`,
    commonSelfTalkTraps: `• I just need a little more information before I decide.
• They already know why this matters—I don’t need to say it.
• If we just get through this week, everything will feel easier.
• I’m carrying too much to slow down and fix the root issues.
• Once one big problem is solved, the rest will take care of itself.`,
    counterQuestions: `• What decision am I delaying because it’s uncomfortable?
• When was the last time I connected this work to purpose?
• Which single behavior change would create the biggest shift for the team this month?
• What am I tolerating that I’m calling “normal” right now?
• What would great leadership look like here if I removed my favorite excuse?`,
  },
  {
    key: `DS`,
    lowBehaviors: `DS`,
    leaderType: `The Short-Sighted Operator`,
    leaderTypeDescription: `This leader makes fast decisions but neglects continuity, succession, and long-term health. The
organization may see short-term wins, but systems remain fragile and people development is
inconsistent. Decisions are optimized for today’s problem rather than tomorrow’s stability. Over time, the
building becomes reactive, turnover becomes more damaging, and the team feels like progress resets
whenever pressure changes.`,
    whatTeamSees: `The team sees fast decisions that relieve immediate pressure but don’t build
lasting stability. Issues reappear because root causes aren’t addressed and
systems aren’t strengthened. Progress feels temporary rather than durable. Over
time, staff become skeptical of “fixes,” expecting that today’s solution will
become tomorrow’s recurring problem.`,
    whatToDo: `• Start a decision log with deadlines (what / owner / by when) and review it twice a week.
• Use a 48-hour rule: once a decision is identified, schedule the action within 2 days.
• Use clear yes / clear no / clear not-yet with a date; avoid vague maybes.
• Build a 90-day future-protection plan (bench, systems, risks, capacity) and review weekly.
• Name successors for 3 key roles and create a simple now/next/later plan for each.`,
    commonSelfTalkTraps: `• I just need a little more information before I decide.
• We’ll deal with the future when this season calms down.
• If we just get through this week, everything will feel easier.
• I’m carrying too much to slow down and fix the root issues.
• Once one big problem is solved, the rest will take care of itself.`,
    counterQuestions: `• What decision am I delaying because it’s uncomfortable?
• If I left tomorrow, what would break first?
• Which single behavior change would create the biggest shift for the team this month?
• What am I tolerating that I’m calling “normal” right now?
• What would great leadership look like here if I removed my favorite excuse?`,
  },
  {
    key: `ET`,
    lowBehaviors: `ET`,
    leaderType: `The Exposing Leader`,
    leaderTypeDescription: `This leader gives people responsibility without providing consistent support, protection, or reliability.
Team members are told to own outcomes, but when challenges arise, guidance is unclear or the leader
steps away. Ownership starts to feel dangerous—people worry they’ll be blamed, abandoned, or left
exposed. Over time, the team becomes risk-averse, stops stretching, and prefers dependence because it
feels safer than empowerment.`,
    whatTeamSees: `The team feels exposed when responsibility is assigned. Ownership comes
without consistent coaching, reliable backing, or protection when friction arises.
Mistakes feel costly rather than developmental, so people become risk-averse.
Over time, initiative declines and staff prefer being told what to do because that
feels safer than being blamed for outcomes.`,
    whatToDo: `• Use a delegation ladder (inform / consult / decide / own) and name the level explicitly.
• Delegate outcomes, not tasks: define success, guardrails, and decision rights.
• Replace hovering with a coaching cadence (day 3, day 10, day 21) and questions-first check-ins.
• Create a commitments tracker (promise / due date / close loop) and review it daily.
• Close loops fast: Here is what I did, what is next, and when you will see it.`,
    commonSelfTalkTraps: `• It’s faster if I just do it myself.
• They know what I meant, even if I didn’t circle back.
• If we just get through this week, everything will feel easier.
• I’m carrying too much to slow down and fix the root issues.
• Once one big problem is solved, the rest will take care of itself.`,
    counterQuestions: `• What am I holding that someone else could learn by owning?
• What commitment did I make that I haven’t closed the loop on?
• Which single behavior change would create the biggest shift for the team this month?
• What am I tolerating that I’m calling “normal” right now?
• What would great leadership look like here if I removed my favorite excuse?`,
  },
  {
    key: `EI`,
    lowBehaviors: `EI`,
    leaderType: `The Talent Staller`,
    leaderTypeDescription: `This leader talks about growth and development but doesn’t connect it to a deeper purpose that people
can feel. Opportunities may exist, but they feel transactional—do more work, take more load, meet more
expectations. People may grow skills, but they don’t grow belief or confidence. Over time, talented team
members plateau emotionally, and development becomes compliance rather than ownership.`,
    whatTeamSees: `The team hears messages about growth but doesn’t experience real authority,
trust, or meaningful development pathways. Opportunities feel limited,
symbolic, or inconsistent. Talented employees feel underutilized and stop
expecting advancement through ownership. Over time, ambition fades and
people shift into compliance mode because effort doesn’t translate into growth
or recognition.`,
    whatToDo: `• Use a delegation ladder (inform / consult / decide / own) and name the level explicitly.
• Delegate outcomes, not tasks: define success, guardrails, and decision rights.
• Replace hovering with a coaching cadence (day 3, day 10, day 21) and questions-first check-ins.
• Connect one standard per day to resident/family impact so the why stays alive.
• Give one specific, behavior-based recognition every day (not outcome-only).`,
    commonSelfTalkTraps: `• It’s faster if I just do it myself.
• They already know why this matters—I don’t need to say it.
• If we just get through this week, everything will feel easier.
• I’m carrying too much to slow down and fix the root issues.
• Once one big problem is solved, the rest will take care of itself.`,
    counterQuestions: `• What am I holding that someone else could learn by owning?
• When was the last time I connected this work to purpose?
• Which single behavior change would create the biggest shift for the team this month?
• What am I tolerating that I’m calling “normal” right now?
• What would great leadership look like here if I removed my favorite excuse?`,
  },
  {
    key: `ES`,
    lowBehaviors: `ES`,
    leaderType: `The Benchless Leader`,
    leaderTypeDescription: `This leader fails to build depth, bench strength, or continuity through others. They may delegate tasks, but
they don’t cultivate future leaders who can operate without them. When key people leave, the
organization is exposed because capability hasn’t been intentionally built. Over time, staffing changes
become crises, and leadership growth becomes accidental rather than designed.`,
    whatTeamSees: `The team notices a lack of bench strength and continuity. When key people leave
or are absent, gaps become obvious and stress increases. Cross-training and
succession planning feel minimal. Over time, employees become anxious during
change because they don’t trust the organization has depth. Stability feels
dependent on a few individuals rather than durable systems.`,
    whatToDo: `• Use a delegation ladder (inform / consult / decide / own) and name the level explicitly.
• Delegate outcomes, not tasks: define success, guardrails, and decision rights.
• Replace hovering with a coaching cadence (day 3, day 10, day 21) and questions-first check-ins.
• Build a 90-day future-protection plan (bench, systems, risks, capacity) and review weekly.
• Name successors for 3 key roles and create a simple now/next/later plan for each.`,
    commonSelfTalkTraps: `• It’s faster if I just do it myself.
• We’ll deal with the future when this season calms down.
• If we just get through this week, everything will feel easier.
• I’m carrying too much to slow down and fix the root issues.
• Once one big problem is solved, the rest will take care of itself.`,
    counterQuestions: `• What am I holding that someone else could learn by owning?
• If I left tomorrow, what would break first?
• Which single behavior change would create the biggest shift for the team this month?
• What am I tolerating that I’m calling “normal” right now?
• What would great leadership look like here if I removed my favorite excuse?`,
  },
  {
    key: `TI`,
    lowBehaviors: `TI`,
    leaderType: `The Cynical Leader`,
    leaderTypeDescription: `This leader may say the right things about purpose and recognition, but inconsistency undermines belief.
Praise can feel hollow because people aren’t sure if the leader will follow through or uphold standards
when it’s hard. The team becomes skeptical and emotionally guarded, interpreting messaging as
performance rather than sincerity. Over time, cynicism spreads and culture becomes more about
protecting oneself than believing in shared mission.`,
    whatTeamSees: `The team hears the right words about values, celebration, and purpose, but
inconsistency undermines belief. Recognition can feel performative because
follow-through doesn’t match messaging. People become skeptical and
emotionally guarded. Over time, cynicism spreads and culture feels less genuine
because staff assume words are for appearances rather than reliable
commitments.`,
    whatToDo: `• Create a commitments tracker (promise / due date / close loop) and review it daily.
• Close loops fast: Here is what I did, what is next, and when you will see it.
• Pick 2 non-negotiable standards and enforce them consistently for 30 days.
• Connect one standard per day to resident/family impact so the why stays alive.
• Give one specific, behavior-based recognition every day (not outcome-only).`,
    commonSelfTalkTraps: `• They know what I meant, even if I didn’t circle back.
• They already know why this matters—I don’t need to say it.
• If we just get through this week, everything will feel easier.
• I’m carrying too much to slow down and fix the root issues.
• Once one big problem is solved, the rest will take care of itself.`,
    counterQuestions: `• What commitment did I make that I haven’t closed the loop on?
• When was the last time I connected this work to purpose?
• Which single behavior change would create the biggest shift for the team this month?
• What am I tolerating that I’m calling “normal” right now?
• What would great leadership look like here if I removed my favorite excuse?`,
  },
  {
    key: `TS`,
    lowBehaviors: `TS`,
    leaderType: `The Temporary Leader`,
    leaderTypeDescription: `This leader struggles to create continuity because reliability is inconsistent and long-term stewardship is
weak. Even if they are likable or skilled in moments, the organization can’t count on stable standards over
time. Systems depend on mood, urgency, or who is watching rather than durable expectations. Over time,
people stop trusting that “this is how we do things,” and culture becomes fragile during transitions and
pressure.`,
    whatTeamSees: `The team experiences stability as dependent on the leader’s presence rather
than on systems. When the leader is gone, standards slip and priorities drift.
Transitions feel risky because continuity isn’t embedded. Over time, staff feel
like the organization lacks durability, and people become hesitant to commit
deeply because the future feels unpredictable when leadership changes.`,
    whatToDo: `• Create a commitments tracker (promise / due date / close loop) and review it daily.
• Close loops fast: Here is what I did, what is next, and when you will see it.
• Pick 2 non-negotiable standards and enforce them consistently for 30 days.
• Build a 90-day future-protection plan (bench, systems, risks, capacity) and review weekly.
• Name successors for 3 key roles and create a simple now/next/later plan for each.`,
    commonSelfTalkTraps: `• They know what I meant, even if I didn’t circle back.
• We’ll deal with the future when this season calms down.
• If we just get through this week, everything will feel easier.
• I’m carrying too much to slow down and fix the root issues.
• Once one big problem is solved, the rest will take care of itself.`,
    counterQuestions: `• What commitment did I make that I haven’t closed the loop on?
• If I left tomorrow, what would break first?
• Which single behavior change would create the biggest shift for the team this month?
• What am I tolerating that I’m calling “normal” right now?
• What would great leadership look like here if I removed my favorite excuse?`,
  },
  {
    key: `IS`,
    lowBehaviors: `IS`,
    leaderType: `The Visionless Motivator`,
    leaderTypeDescription: `This leader can create energy or motivation at times but doesn’t translate it into sustainable systems and
long-term health. People may feel inspired in moments, but the environment lacks continuity,
development depth, and future protection. The result is a cycle of excitement followed by exhaustion and
regression. Over time, staff stop fully buying in because they’ve seen inspiration come and go without
lasting change.`,
    whatTeamSees: `The team experiences moments of motivation and energy that don’t translate
into lasting improvement. Inspiration shows up in speeches or bursts of
enthusiasm, but systems and continuity don’t follow. People stop fully buying in
because they’ve seen cycles of excitement and regression. Over time, hope
becomes cautious because change doesn’t seem to stick.`,
    whatToDo: `• Connect one standard per day to resident/family impact so the why stays alive.
• Give one specific, behavior-based recognition every day (not outcome-only).
• Start meetings with a quick mission moment from the floor to reconnect meaning to work.
• Build a 90-day future-protection plan (bench, systems, risks, capacity) and review weekly.
• Name successors for 3 key roles and create a simple now/next/later plan for each.`,
    commonSelfTalkTraps: `• They already know why this matters—I don’t need to say it.
• We’ll deal with the future when this season calms down.
• If we just get through this week, everything will feel easier.
• I’m carrying too much to slow down and fix the root issues.
• Once one big problem is solved, the rest will take care of itself.`,
    counterQuestions: `• When was the last time I connected this work to purpose?
• If I left tomorrow, what would break first?
• Which single behavior change would create the biggest shift for the team this month?
• What am I tolerating that I’m calling “normal” right now?
• What would great leadership look like here if I removed my favorite excuse?`,
  },
  {
    key: `ADT`,
    lowBehaviors: `ADT`,
    leaderType: `The Tolerator`,
    leaderTypeDescription: `This leader tolerates obvious issues because they are seen but not acted on, and follow-through is
inconsistent. Standards become negotiable and accountability weakens because the leader avoids hard
decisions. The team experiences frustration: everyone knows what should happen, but it doesn’t. Over
time, trust in fairness drops, and the culture learns that persistence and pressure matter more than doing
the right thing.`,
    whatTeamSees: `The team sees that problems are known but tolerated. Decisions don’t land, and
follow-through is inconsistent, so standards soften quietly over time. Employees
stop expecting consequences and learn that underperformance can persist. Over
time, high performers feel punished by tolerance, and the culture becomes one
where drift and exceptions are normal.`,
    whatToDo: `• Do a weekly people map (thriving / struggling / at-risk) with 1 sentence why each.
• Add daily leadership rounding with 3 set questions: What's hard? What's unclear? What do you need?
• Start a decision log with deadlines (what / owner / by when) and review it twice a week.
• Use a 48-hour rule: once a decision is identified, schedule the action within 2 days.
• Create a commitments tracker (promise / due date / close loop) and review it daily.`,
    commonSelfTalkTraps: `• Nothing major has blown up yet, so things must be mostly fine.
• I just need a little more information before I decide.
• They know what I meant, even if I didn’t circle back.
• If we just get through this week, everything will feel easier.
• I’m carrying too much to slow down and fix the root issues.`,
    counterQuestions: `• What patterns have repeated despite multiple fixes?
• What decision am I delaying because it’s uncomfortable?
• What commitment did I make that I haven’t closed the loop on?
• Which single behavior change would create the biggest shift for the team this month?
• What am I tolerating that I’m calling “normal” right now?`,
  },
  {
    key: `ADI`,
    lowBehaviors: `ADI`,
    leaderType: `The Aimless Leader`,
    leaderTypeDescription: `This leader struggles to see clearly, struggles to act, and struggles to create meaning—so the team
experiences directionless leadership. People aren’t sure what matters most because clarity is weak and
decisions don’t land. Motivation becomes thin because purpose isn’t reinforced in moments of difficulty.
Over time, the organization feels like it is “working hard without winning,” and morale fades into quiet
resignation.`,
    whatTeamSees: `The team feels busy but directionless. Leadership recognizes issues yet avoids
decisive action and doesn’t reinforce meaning, so effort doesn’t translate into
belief or momentum. People work hard without feeling like they are winning.
Over time, morale thins, cynicism grows, and employees disengage because
clarity and purpose are both missing.`,
    whatToDo: `• Do a weekly people map (thriving / struggling / at-risk) with 1 sentence why each.
• Add daily leadership rounding with 3 set questions: What's hard? What's unclear? What do you need?
• Start a decision log with deadlines (what / owner / by when) and review it twice a week.
• Use a 48-hour rule: once a decision is identified, schedule the action within 2 days.
• Connect one standard per day to resident/family impact so the why stays alive.`,
    commonSelfTalkTraps: `• Nothing major has blown up yet, so things must be mostly fine.
• I just need a little more information before I decide.
• They already know why this matters—I don’t need to say it.
• If we just get through this week, everything will feel easier.
• I’m carrying too much to slow down and fix the root issues.`,
    counterQuestions: `• What patterns have repeated despite multiple fixes?
• What decision am I delaying because it’s uncomfortable?
• When was the last time I connected this work to purpose?
• Which single behavior change would create the biggest shift for the team this month?
• What am I tolerating that I’m calling “normal” right now?`,
  },
  {
    key: `ADS`,
    lowBehaviors: `ADS`,
    leaderType: `The Slow Decliner`,
    leaderTypeDescription: `This leader misses key realities, delays decisions, and neglects long-term health, creating a slow decline
pattern. Problems compound because nothing is resolved early, and sustainability isn’t protected. The
team experiences instability that grows quietly—today feels manageable, but tomorrow looks uncertain.
Over time, crises become more frequent, turnover hits harder, and the organization feels like it is always
catching up.`,
    whatTeamSees: `The team senses slow decline rather than sudden failure. Issues are noticed but
not acted on, and long-term protection is weak, so problems compound. People
feel like the organization is always “catching up.” Over time, staff develop a
background anxiety because stability feels increasingly fragile, and preventable
crises become more common.`,
    whatToDo: `• Do a weekly people map (thriving / struggling / at-risk) with 1 sentence why each.
• Add daily leadership rounding with 3 set questions: What's hard? What's unclear? What do you need?
• Start a decision log with deadlines (what / owner / by when) and review it twice a week.
• Use a 48-hour rule: once a decision is identified, schedule the action within 2 days.
• Build a 90-day future-protection plan (bench, systems, risks, capacity) and review weekly.`,
    commonSelfTalkTraps: `• Nothing major has blown up yet, so things must be mostly fine.
• I just need a little more information before I decide.
• We’ll deal with the future when this season calms down.
• If we just get through this week, everything will feel easier.
• I’m carrying too much to slow down and fix the root issues.`,
    counterQuestions: `• What patterns have repeated despite multiple fixes?
• What decision am I delaying because it’s uncomfortable?
• If I left tomorrow, what would break first?
• Which single behavior change would create the biggest shift for the team this month?
• What am I tolerating that I’m calling “normal” right now?`,
  },
  {
    key: `AET`,
    lowBehaviors: `AET`,
    leaderType: `The Chaos Creator`,
    leaderTypeDescription: `This leader mis-delegates or delegates inconsistently, and the environment lacks reliable follow-through.
People are given ownership without the clarity, boundaries, or support that make empowerment safe.
Standards wobble and accountability becomes confusing because reliability isn’t steady. Over time, the
team becomes anxious and cautious—ownership feels like exposure, and performance becomes
inconsistent across people and situations.`,
    whatTeamSees: `The team experiences confusing delegation and uneven standards. Leadership
assigns ownership without clear boundaries, then inconsistently supports or
enforces expectations. People second-guess what authority they truly have. Over
time, anxiety replaces confidence because employees can’t predict whether
autonomy will be honored or reversed, and accountability feels unclear rather
than empowering.`,
    whatToDo: `• Do a weekly people map (thriving / struggling / at-risk) with 1 sentence why each.
• Add daily leadership rounding with 3 set questions: What's hard? What's unclear? What do you need?
• Use a delegation ladder (inform / consult / decide / own) and name the level explicitly.
• Delegate outcomes, not tasks: define success, guardrails, and decision rights.
• Create a commitments tracker (promise / due date / close loop) and review it daily.`,
    commonSelfTalkTraps: `• Nothing major has blown up yet, so things must be mostly fine.
• It’s faster if I just do it myself.
• They know what I meant, even if I didn’t circle back.
• If we just get through this week, everything will feel easier.
• I’m carrying too much to slow down and fix the root issues.`,
    counterQuestions: `• What patterns have repeated despite multiple fixes?
• What am I holding that someone else could learn by owning?
• What commitment did I make that I haven’t closed the loop on?
• Which single behavior change would create the biggest shift for the team this month?
• What am I tolerating that I’m calling “normal” right now?`,
  },
  {
    key: `AEI`,
    lowBehaviors: `AEI`,
    leaderType: `The Misreading Leader`,
    leaderTypeDescription: `This leader struggles to read the team accurately, struggles to create real ownership, and struggles to
connect work to purpose. Development conversations exist, but they don’t translate into confident action
because the leader doesn’t calibrate readiness or meaning. People feel encouraged, but not truly
equipped or trusted. Over time, growth stalls, enthusiasm becomes shallow, and team members stop
believing development efforts will change their reality.`,
    whatTeamSees: `The team hears development and encouragement, but doesn’t feel truly
equipped, trusted, or guided with clarity. Leadership misjudges readiness,
assigns ownership inconsistently, and doesn’t connect effort to meaning that
sustains growth. Over time, development feels shallow and unreliable. People
stop believing “growth opportunities” will actually lead to confidence and real
ownership.`,
    whatToDo: `• Do a weekly people map (thriving / struggling / at-risk) with 1 sentence why each.
• Add daily leadership rounding with 3 set questions: What's hard? What's unclear? What do you need?
• Use a delegation ladder (inform / consult / decide / own) and name the level explicitly.
• Delegate outcomes, not tasks: define success, guardrails, and decision rights.
• Connect one standard per day to resident/family impact so the why stays alive.`,
    commonSelfTalkTraps: `• Nothing major has blown up yet, so things must be mostly fine.
• It’s faster if I just do it myself.
• They already know why this matters—I don’t need to say it.
• If we just get through this week, everything will feel easier.
• I’m carrying too much to slow down and fix the root issues.`,
    counterQuestions: `• What patterns have repeated despite multiple fixes?
• What am I holding that someone else could learn by owning?
• When was the last time I connected this work to purpose?
• Which single behavior change would create the biggest shift for the team this month?
• What am I tolerating that I’m calling “normal” right now?`,
  },
  {
    key: `AES`,
    lowBehaviors: `AES`,
    leaderType: `The Future-Blind Developer`,
    leaderTypeDescription: `This leader doesn’t see readiness clearly, doesn’t build real owners, and doesn’t steward future stability.
People development is inconsistent and succession remains weak because growth isn’t intentionally
structured. The organization may function day-to-day, but it isn’t building depth. Over time, leadership
gaps widen, transitions become disruptive, and the building becomes increasingly dependent on a few
strong individuals.`,
    whatTeamSees: `The team experiences development that isn’t anchored to long-term stability.
Delegation is inconsistent and succession isn’t intentionally built, so growth
feels uneven and fragile. People sense the organization relies on a few strong
individuals. Over time, staff feel nervous about turnover or change because
bench strength and continuity don’t feel protected through deliberate
stewardship.`,
    whatToDo: `• Do a weekly people map (thriving / struggling / at-risk) with 1 sentence why each.
• Add daily leadership rounding with 3 set questions: What's hard? What's unclear? What do you need?
• Use a delegation ladder (inform / consult / decide / own) and name the level explicitly.
• Delegate outcomes, not tasks: define success, guardrails, and decision rights.
• Build a 90-day future-protection plan (bench, systems, risks, capacity) and review weekly.`,
    commonSelfTalkTraps: `• Nothing major has blown up yet, so things must be mostly fine.
• It’s faster if I just do it myself.
• We’ll deal with the future when this season calms down.
• If we just get through this week, everything will feel easier.
• I’m carrying too much to slow down and fix the root issues.`,
    counterQuestions: `• What patterns have repeated despite multiple fixes?
• What am I holding that someone else could learn by owning?
• If I left tomorrow, what would break first?
• Which single behavior change would create the biggest shift for the team this month?
• What am I tolerating that I’m calling “normal” right now?`,
  },
  {
    key: `ATI`,
    lowBehaviors: `ATI`,
    leaderType: `The False Reassurer`,
    leaderTypeDescription: `This leader reassures and communicates, but doesn’t consistently see reality or reliably follow through.
People hear hopeful messaging, but they don’t see durable action or stable standards behind it. The result
is emotional fatigue—teams feel managed rather than led. Over time, trust becomes thin and people stop
bringing hard truths forward because they assume nothing meaningful will change.`,
    whatTeamSees: `The team hears reassurance, but reality isn’t clearly named and follow-through
isn’t reliable, so employees feel comforted but not led. Hard issues remain
unresolved, and optimism becomes a substitute for clarity. Over time, staff stop
bringing difficult truths forward because they expect the response will be
encouragement without action, and silence grows.`,
    whatToDo: `• Do a weekly people map (thriving / struggling / at-risk) with 1 sentence why each.
• Add daily leadership rounding with 3 set questions: What's hard? What's unclear? What do you need?
• Create a commitments tracker (promise / due date / close loop) and review it daily.
• Close loops fast: Here is what I did, what is next, and when you will see it.
• Connect one standard per day to resident/family impact so the why stays alive.`,
    commonSelfTalkTraps: `• Nothing major has blown up yet, so things must be mostly fine.
• They know what I meant, even if I didn’t circle back.
• They already know why this matters—I don’t need to say it.
• If we just get through this week, everything will feel easier.
• I’m carrying too much to slow down and fix the root issues.`,
    counterQuestions: `• What patterns have repeated despite multiple fixes?
• What commitment did I make that I haven’t closed the loop on?
• When was the last time I connected this work to purpose?
• Which single behavior change would create the biggest shift for the team this month?
• What am I tolerating that I’m calling “normal” right now?`,
  },
  {
    key: `ATS`,
    lowBehaviors: `ATS`,
    leaderType: `The Fragile Authority`,
    leaderTypeDescription: `This leader lacks awareness, reliable consistency, and long-term stewardship, so stability becomes
fragile. People don’t know what to count on because standards and decisions shift, and future protection
is weak. The organization becomes vulnerable to pressure, turnover, and rumor because continuity isn’t
built. Over time, staff operate in a defensive posture, prioritizing survival and certainty over ownership and
growth.`,
    whatTeamSees: `The team experiences instability that’s hard to describe but easy to feel.
Leadership misses early warning signs, follow-through varies, and long-term
health isn’t protected, so standards and priorities shift. People become
defensive and cautious, focusing on immediate survival. Over time, employees
lose confidence that leadership will prevent predictable disruptions and protect
continuity during pressure.`,
    whatToDo: `• Do a weekly people map (thriving / struggling / at-risk) with 1 sentence why each.
• Add daily leadership rounding with 3 set questions: What's hard? What's unclear? What do you need?
• Create a commitments tracker (promise / due date / close loop) and review it daily.
• Close loops fast: Here is what I did, what is next, and when you will see it.
• Build a 90-day future-protection plan (bench, systems, risks, capacity) and review weekly.`,
    commonSelfTalkTraps: `• Nothing major has blown up yet, so things must be mostly fine.
• They know what I meant, even if I didn’t circle back.
• We’ll deal with the future when this season calms down.
• If we just get through this week, everything will feel easier.
• I’m carrying too much to slow down and fix the root issues.`,
    counterQuestions: `• What patterns have repeated despite multiple fixes?
• What commitment did I make that I haven’t closed the loop on?
• If I left tomorrow, what would break first?
• Which single behavior change would create the biggest shift for the team this month?
• What am I tolerating that I’m calling “normal” right now?`,
  },
  {
    key: `AIS`,
    lowBehaviors: `AIS`,
    leaderType: `The Purpose-Drifter`,
    leaderTypeDescription: `This leader struggles to see reality, struggles to inspire meaning, and struggles to steward long-term
health. Positivity and culture language may exist, but it doesn’t connect to real conditions or durable
practices. People feel a widening gap between what is said and what is true. Over time, engagement
declines because purpose feels performative and the future feels unprotected.`,
    whatTeamSees: `The team experiences purpose talk and positivity that doesn’t match the realities
they live in. Leadership doesn’t fully see what’s happening, so encouragement
feels disconnected and long-term protection feels absent. People stop trusting
optimistic narratives. Over time, belief erodes quietly and staff disengage
because they don’t feel seen, and the future doesn’t feel intentionally supported.`,
    whatToDo: `• Do a weekly people map (thriving / struggling / at-risk) with 1 sentence why each.
• Add daily leadership rounding with 3 set questions: What's hard? What's unclear? What do you need?
• Connect one standard per day to resident/family impact so the why stays alive.
• Give one specific, behavior-based recognition every day (not outcome-only).
• Build a 90-day future-protection plan (bench, systems, risks, capacity) and review weekly.`,
    commonSelfTalkTraps: `• Nothing major has blown up yet, so things must be mostly fine.
• They already know why this matters—I don’t need to say it.
• We’ll deal with the future when this season calms down.
• If we just get through this week, everything will feel easier.
• I’m carrying too much to slow down and fix the root issues.`,
    counterQuestions: `• What patterns have repeated despite multiple fixes?
• When was the last time I connected this work to purpose?
• If I left tomorrow, what would break first?
• Which single behavior change would create the biggest shift for the team this month?
• What am I tolerating that I’m calling “normal” right now?`,
  },
  {
    key: `DET`,
    lowBehaviors: `DET`,
    leaderType: `The Accountability Breaker`,
    leaderTypeDescription: `This leader struggles to make hard calls, struggles to truly empower, and struggles to follow through
consistently—so accountability breaks down. Ownership exists in name but not in practice because
decisions don’t stick and standards aren’t reliably enforced. People learn that responsibility can be
avoided, delayed, or escalated away. Over time, the organization becomes dependent on pressure cycles
rather than stable discipline and ownership.`,
    whatTeamSees: `The team experiences “ownership” without real accountability. Decisions are
delayed, authority is not truly transferred, and follow-through is inconsistent, so
responsibilities drift and consequences are unclear. Staff learn that performance
problems can persist without resolution. Over time, capable employees feel
frustrated because standards aren’t upheld, and weaker performance becomes
normalized through tolerance and delay.`,
    whatToDo: `• Start a decision log with deadlines (what / owner / by when) and review it twice a week.
• Use a 48-hour rule: once a decision is identified, schedule the action within 2 days.
• Use a delegation ladder (inform / consult / decide / own) and name the level explicitly.
• Delegate outcomes, not tasks: define success, guardrails, and decision rights.
• Create a commitments tracker (promise / due date / close loop) and review it daily.`,
    commonSelfTalkTraps: `• I just need a little more information before I decide.
• It’s faster if I just do it myself.
• They know what I meant, even if I didn’t circle back.
• If we just get through this week, everything will feel easier.
• I’m carrying too much to slow down and fix the root issues.`,
    counterQuestions: `• What decision am I delaying because it’s uncomfortable?
• What am I holding that someone else could learn by owning?
• What commitment did I make that I haven’t closed the loop on?
• Which single behavior change would create the biggest shift for the team this month?
• What am I tolerating that I’m calling “normal” right now?`,
  },
  {
    key: `DEI`,
    lowBehaviors: `DEI`,
    leaderType: `The Pressure Manager`,
    leaderTypeDescription: `This leader delays tough decisions, limits real ownership, and fails to create meaning that sustains effort.
The team experiences heavy workload without empowerment—people are expected to perform but not
trusted to own. Motivation becomes fragile because purpose is not reinforced in the hard moments. Over
time, burnout rises, talent stagnates, and performance becomes compliance-driven rather than
ownership-driven.`,
    whatTeamSees: `The team feels pressure to perform but doesn’t feel trusted with real ownership
or inspired by meaning. Decisions lag, empowerment is limited, and recognition
doesn’t sustain belief. People comply, but energy drains quickly. Over time,
burnout increases because employees carry responsibility without authority, and
the emotional payoff of the work feels thin and transactional.`,
    whatToDo: `• Start a decision log with deadlines (what / owner / by when) and review it twice a week.
• Use a 48-hour rule: once a decision is identified, schedule the action within 2 days.
• Use a delegation ladder (inform / consult / decide / own) and name the level explicitly.
• Delegate outcomes, not tasks: define success, guardrails, and decision rights.
• Connect one standard per day to resident/family impact so the why stays alive.`,
    commonSelfTalkTraps: `• I just need a little more information before I decide.
• It’s faster if I just do it myself.
• They already know why this matters—I don’t need to say it.
• If we just get through this week, everything will feel easier.
• I’m carrying too much to slow down and fix the root issues.`,
    counterQuestions: `• What decision am I delaying because it’s uncomfortable?
• What am I holding that someone else could learn by owning?
• When was the last time I connected this work to purpose?
• Which single behavior change would create the biggest shift for the team this month?
• What am I tolerating that I’m calling “normal” right now?`,
  },
  {
    key: `DES`,
    lowBehaviors: `DES`,
    leaderType: `The Unsustainable Operator`,
    leaderTypeDescription: `This leader avoids decisive action, doesn’t build owners, and neglects long-term system health. The
building may appear stable temporarily, but capability isn’t growing and sustainability is not protected.
When the leader is present, things may move; when they’re absent, momentum fades. Over time, the
organization becomes fragile, transitions become painful, and the team lacks confidence in its ability to
function independently.`,
    whatTeamSees: `The team experiences an organization that can function in the moment but lacks
durability. Decisions are delayed, ownership isn’t built, and long-term health isn’t
protected, so stability depends on constant intervention. When staffing changes
happen, stress spikes. Over time, employees sense the building is fragile and
that leadership has not invested in depth, continuity, or bench strength.`,
    whatToDo: `• Start a decision log with deadlines (what / owner / by when) and review it twice a week.
• Use a 48-hour rule: once a decision is identified, schedule the action within 2 days.
• Use a delegation ladder (inform / consult / decide / own) and name the level explicitly.
• Delegate outcomes, not tasks: define success, guardrails, and decision rights.
• Build a 90-day future-protection plan (bench, systems, risks, capacity) and review weekly.`,
    commonSelfTalkTraps: `• I just need a little more information before I decide.
• It’s faster if I just do it myself.
• We’ll deal with the future when this season calms down.
• If we just get through this week, everything will feel easier.
• I’m carrying too much to slow down and fix the root issues.`,
    counterQuestions: `• What decision am I delaying because it’s uncomfortable?
• What am I holding that someone else could learn by owning?
• If I left tomorrow, what would break first?
• Which single behavior change would create the biggest shift for the team this month?
• What am I tolerating that I’m calling “normal” right now?`,
  },
  {
    key: `DTI`,
    lowBehaviors: `DTI`,
    leaderType: `The Hard-Edged Leader`,
    leaderTypeDescription: `This leader takes action inconsistently and struggles with reliability and inspiration, which creates
compliance without commitment. Decisions may be made, but people don’t trust the leader’s follow-
through and don’t feel connected to why standards matter. The team experiences leadership as
transactional and emotionally draining. Over time, honesty decreases, engagement fades, and
performance becomes dependent on enforcement rather than belief.`,
    whatTeamSees: `The team experiences enforcement without trust. Decisions may occur, but
follow-through is inconsistent and meaning is not reinforced, so compliance
replaces commitment. Employees do what’s required but don’t feel safe being
honest. Over time, engagement fades and staff adopt defensive
behaviors—documenting more, escalating more, and offering less discretionary
effort because they don’t trust consistency or purpose.`,
    whatToDo: `• Start a decision log with deadlines (what / owner / by when) and review it twice a week.
• Use a 48-hour rule: once a decision is identified, schedule the action within 2 days.
• Create a commitments tracker (promise / due date / close loop) and review it daily.
• Close loops fast: Here is what I did, what is next, and when you will see it.
• Connect one standard per day to resident/family impact so the why stays alive.`,
    commonSelfTalkTraps: `• I just need a little more information before I decide.
• They know what I meant, even if I didn’t circle back.
• They already know why this matters—I don’t need to say it.
• If we just get through this week, everything will feel easier.
• I’m carrying too much to slow down and fix the root issues.`,
    counterQuestions: `• What decision am I delaying because it’s uncomfortable?
• What commitment did I make that I haven’t closed the loop on?
• When was the last time I connected this work to purpose?
• Which single behavior change would create the biggest shift for the team this month?
• What am I tolerating that I’m calling “normal” right now?`,
  },
  {
    key: `DTS`,
    lowBehaviors: `DTS`,
    leaderType: `The Enforcer Without Legacy`,
    leaderTypeDescription: `This leader struggles with decisive accountability, consistent reliability, and long-term stewardship—so
they leave little durable footprint. Things may get done in bursts, but systems don’t endure because
standards aren’t stable and continuity isn’t built. The team experiences constant reset: each new issue
feels like starting over. Over time, the organization becomes personality-dependent and fragile, with
outcomes that vary widely based on pressure and presence.`,
    whatTeamSees: `The team experiences a leadership environment where decisions, reliability, and
long-term protection all feel weak. Issues reset repeatedly because standards
don’t endure and systems aren’t strengthened. Employees feel like they are
always starting over after each challenge. Over time, confidence drops because
stability seems dependent on pressure and reminders rather than durable
expectations and stewardship.`,
    whatToDo: `• Start a decision log with deadlines (what / owner / by when) and review it twice a week.
• Use a 48-hour rule: once a decision is identified, schedule the action within 2 days.
• Create a commitments tracker (promise / due date / close loop) and review it daily.
• Close loops fast: Here is what I did, what is next, and when you will see it.
• Build a 90-day future-protection plan (bench, systems, risks, capacity) and review weekly.`,
    commonSelfTalkTraps: `• I just need a little more information before I decide.
• They know what I meant, even if I didn’t circle back.
• We’ll deal with the future when this season calms down.
• If we just get through this week, everything will feel easier.
• I’m carrying too much to slow down and fix the root issues.`,
    counterQuestions: `• What decision am I delaying because it’s uncomfortable?
• What commitment did I make that I haven’t closed the loop on?
• If I left tomorrow, what would break first?
• Which single behavior change would create the biggest shift for the team this month?
• What am I tolerating that I’m calling “normal” right now?`,
  },
  {
    key: `DIS`,
    lowBehaviors: `DIS`,
    leaderType: `The Burn-and-Move Leader`,
    leaderTypeDescription: `This leader delays action, doesn’t inspire meaning, and doesn’t steward the future—so work becomes
urgent but hollow. People experience a constant push to perform without clarity, hope, or long-term
direction. Motivation fades because the effort doesn’t feel connected to something that lasts. Over time,
staff disengage emotionally and the building becomes reactive, surviving week to week rather than
building strength.`,
    whatTeamSees: `The team feels pushed by urgency but not sustained by belief or future clarity.
Decisions are delayed, purpose is thin, and long-term health is neglected, so
work becomes exhausting and reactive. Employees feel like they are grinding
without direction. Over time, disengagement spreads as staff stop expecting
meaningful progress, and motivation becomes purely survival-based rather than
ownership-based.`,
    whatToDo: `• Start a decision log with deadlines (what / owner / by when) and review it twice a week.
• Use a 48-hour rule: once a decision is identified, schedule the action within 2 days.
• Connect one standard per day to resident/family impact so the why stays alive.
• Give one specific, behavior-based recognition every day (not outcome-only).
• Build a 90-day future-protection plan (bench, systems, risks, capacity) and review weekly.`,
    commonSelfTalkTraps: `• I just need a little more information before I decide.
• They already know why this matters—I don’t need to say it.
• We’ll deal with the future when this season calms down.
• If we just get through this week, everything will feel easier.
• I’m carrying too much to slow down and fix the root issues.`,
    counterQuestions: `• What decision am I delaying because it’s uncomfortable?
• When was the last time I connected this work to purpose?
• If I left tomorrow, what would break first?
• Which single behavior change would create the biggest shift for the team this month?
• What am I tolerating that I’m calling “normal” right now?`,
  },
  {
    key: `ETI`,
    lowBehaviors: `ETI`,
    leaderType: `The Overexposing Coach`,
    leaderTypeDescription: `This leader creates risk for others by giving responsibility without reliable protection and without inspiring
belief. People are told to step up, but they don’t feel backed, and the “why” behind the work doesn’t
sustain them through friction. Mistakes feel costly rather than developmental. Over time, the team
becomes cautious, avoids ownership, and prefers to stay small because stepping up feels unsafe and
unrewarding.`,
    whatTeamSees: `The team experiences encouragement to step up, but ownership feels unsafe.
Authority is given without reliable backing, and purpose isn’t strong enough to
sustain people through friction. When problems arise, employees feel exposed or
blamed rather than coached. Over time, staff stop volunteering for responsibility
because they’ve learned that “growth” can mean increased risk without
protection or support.`,
    whatToDo: `• Use a delegation ladder (inform / consult / decide / own) and name the level explicitly.
• Delegate outcomes, not tasks: define success, guardrails, and decision rights.
• Create a commitments tracker (promise / due date / close loop) and review it daily.
• Close loops fast: Here is what I did, what is next, and when you will see it.
• Connect one standard per day to resident/family impact so the why stays alive.`,
    commonSelfTalkTraps: `• It’s faster if I just do it myself.
• They know what I meant, even if I didn’t circle back.
• They already know why this matters—I don’t need to say it.
• If we just get through this week, everything will feel easier.
• I’m carrying too much to slow down and fix the root issues.`,
    counterQuestions: `• What am I holding that someone else could learn by owning?
• What commitment did I make that I haven’t closed the loop on?
• When was the last time I connected this work to purpose?
• Which single behavior change would create the biggest shift for the team this month?
• What am I tolerating that I’m calling “normal” right now?`,
  },
  {
    key: `ETS`,
    lowBehaviors: `ETS`,
    leaderType: `The Abandoning Leader`,
    leaderTypeDescription: `This leader hands off tasks but fails to protect people through consistency or protect the organization
through stewardship. Responsibility is pushed outward, but standards and long-term stability aren’t built
to support it. People experience empowerment as “more burden, less backup.” Over time, ownership
collapses into exhaustion, strong performers pull back, and succession becomes weaker because
leadership roles feel punishing.`,
    whatTeamSees: `The team experiences delegation as burden rather than empowerment.
Responsibility is handed off without consistent follow-through and without long-
term system support, so ownership feels risky and unsustainable. People feel
like they are being asked to carry more with less backup. Over time, staff avoid
leadership tasks, protect their boundaries, and hesitate to step up because the
environment doesn’t make ownership safe.`,
    whatToDo: `• Use a delegation ladder (inform / consult / decide / own) and name the level explicitly.
• Delegate outcomes, not tasks: define success, guardrails, and decision rights.
• Create a commitments tracker (promise / due date / close loop) and review it daily.
• Close loops fast: Here is what I did, what is next, and when you will see it.
• Build a 90-day future-protection plan (bench, systems, risks, capacity) and review weekly.`,
    commonSelfTalkTraps: `• It’s faster if I just do it myself.
• They know what I meant, even if I didn’t circle back.
• We’ll deal with the future when this season calms down.
• If we just get through this week, everything will feel easier.
• I’m carrying too much to slow down and fix the root issues.`,
    counterQuestions: `• What am I holding that someone else could learn by owning?
• What commitment did I make that I haven’t closed the loop on?
• If I left tomorrow, what would break first?
• Which single behavior change would create the biggest shift for the team this month?
• What am I tolerating that I’m calling “normal” right now?`,
  },
  {
    key: `EIS`,
    lowBehaviors: `EIS`,
    leaderType: `The Hope-Without-Structure Leader`,
    leaderTypeDescription: `This leader encourages growth and positivity, but lacks true empowerment structures and long-term
continuity. People may feel inspired to try, yet they don’t receive stable boundaries, real authority, or
systems that make ownership sustainable. The result is energy without durability. Over time, growth
becomes episodic and fragile, and the team stops trusting that enthusiasm will translate into real, lasting
progress.`,
    whatTeamSees: `The team experiences energy and encouragement without durability. People may
feel inspired, but they don’t receive real authority, stable support, or long-term
protection, so progress is fragile. Employees try, then retreat after setbacks
because ownership doesn’t hold. Over time, the team becomes cautious,
believing that enthusiasm isn’t matched by systems that keep development safe
and sustainable.`,
    whatToDo: `• Use a delegation ladder (inform / consult / decide / own) and name the level explicitly.
• Delegate outcomes, not tasks: define success, guardrails, and decision rights.
• Connect one standard per day to resident/family impact so the why stays alive.
• Give one specific, behavior-based recognition every day (not outcome-only).
• Build a 90-day future-protection plan (bench, systems, risks, capacity) and review weekly.`,
    commonSelfTalkTraps: `• It’s faster if I just do it myself.
• They already know why this matters—I don’t need to say it.
• We’ll deal with the future when this season calms down.
• If we just get through this week, everything will feel easier.
• I’m carrying too much to slow down and fix the root issues.`,
    counterQuestions: `• What am I holding that someone else could learn by owning?
• When was the last time I connected this work to purpose?
• If I left tomorrow, what would break first?
• Which single behavior change would create the biggest shift for the team this month?
• What am I tolerating that I’m calling “normal” right now?`,
  },
  {
    key: `ADET`,
    lowBehaviors: `ADET`,
    leaderType: `The Fog Leader`,
    leaderTypeDescription: `This leader struggles across awareness, action, ownership, and reliability, which creates an environment
of confusion and instability. People don’t know what is real, what will be decided, what they truly own, or
whether commitments will be kept. Work becomes reactive and emotionally taxing because clarity is
missing at multiple levels. Over time, staff either disengage or escalate constantly, and the organization
becomes dependent on crisis management rather than leadership discipline.`,
    whatTeamSees: `The team experiences confusion about what is real and what will actually
happen. Leadership misses patterns, delays decisions, limits real ownership,
and doesn’t consistently follow through, so clarity is weak everywhere.
Employees ask more questions because boundaries aren’t stable. Over time, the
organization relies on escalation and firefighting, and staff feel that stability
depends on constant reminders rather than dependable leadership behavior.`,
    whatToDo: `• Do a weekly people map (thriving / struggling / at-risk) with 1 sentence why each.
• Add daily leadership rounding with 3 set questions: What's hard? What's unclear? What do you need?
• Start a decision log with deadlines (what / owner / by when) and review it twice a week.
• Use a delegation ladder (inform / consult / decide / own) and name the level explicitly.
• Create a commitments tracker (promise / due date / close loop) and review it daily.`,
    commonSelfTalkTraps: `• Nothing major has blown up yet, so things must be mostly fine.
• I just need a little more information before I decide.
• It’s faster if I just do it myself.
• They know what I meant, even if I didn’t circle back.
• If we just get through this week, everything will feel easier.`,
    counterQuestions: `• What patterns have repeated despite multiple fixes?
• What decision am I delaying because it’s uncomfortable?
• What am I holding that someone else could learn by owning?
• What commitment did I make that I haven’t closed the loop on?
• Which single behavior change would create the biggest shift for the team this month?`,
  },
  {
    key: `ADEI`,
    lowBehaviors: `ADEI`,
    leaderType: `The Directionless Developer`,
    leaderTypeDescription: `This leader struggles to see patterns, struggles to decide, struggles to empower, and struggles to create
meaning—so development becomes scattered and directionless. People may receive tasks and
expectations, but they don’t feel clear about priorities or connected to purpose. The team experiences
“activity without progress” and effort without belief. Over time, talented people stagnate, morale thins,
and the building becomes operationally busy but culturally weak.`,
    whatTeamSees: `The team feels like work is happening, but progress is unclear. Leadership
misses patterns, delays decisions, doesn’t build real ownership, and fails to
reinforce meaning, so effort feels scattered. Employees experience development
talk without direction. Over time, morale thins because people don’t know what
matters most, don’t feel empowered to act, and don’t feel inspired to persist
through difficulty.`,
    whatToDo: `• Do a weekly people map (thriving / struggling / at-risk) with 1 sentence why each.
• Add daily leadership rounding with 3 set questions: What's hard? What's unclear? What do you need?
• Start a decision log with deadlines (what / owner / by when) and review it twice a week.
• Use a delegation ladder (inform / consult / decide / own) and name the level explicitly.
• Connect one standard per day to resident/family impact so the why stays alive.`,
    commonSelfTalkTraps: `• Nothing major has blown up yet, so things must be mostly fine.
• I just need a little more information before I decide.
• It’s faster if I just do it myself.
• They already know why this matters—I don’t need to say it.
• If we just get through this week, everything will feel easier.`,
    counterQuestions: `• What patterns have repeated despite multiple fixes?
• What decision am I delaying because it’s uncomfortable?
• What am I holding that someone else could learn by owning?
• When was the last time I connected this work to purpose?
• Which single behavior change would create the biggest shift for the team this month?`,
  },
  {
    key: `ADES`,
    lowBehaviors: `ADES`,
    leaderType: `The Unstable Builder`,
    leaderTypeDescription: `This leader lacks clarity, action, empowerment, and stewardship, producing an unstable organization with
no depth. Responsibilities shift without structure, and long-term stability is not protected through systems
or succession. The team experiences constant scrambling because nothing is built to endure. Over time,
leadership gaps widen, transitions become disruptive, and performance varies widely based on pressure
and who is personally carrying the load.`,
    whatTeamSees: `The team experiences a fragile operation that depends on individual effort rather
than durable systems. Leadership doesn’t see early risks, delays decisions,
limits ownership, and neglects long-term stability, so continuity is weak. When
pressure rises, cracks show quickly. Over time, employees feel anxious during
change because they don’t trust the organization has depth, and they expect
instability whenever key people shift.`,
    whatToDo: `• Do a weekly people map (thriving / struggling / at-risk) with 1 sentence why each.
• Add daily leadership rounding with 3 set questions: What's hard? What's unclear? What do you need?
• Start a decision log with deadlines (what / owner / by when) and review it twice a week.
• Use a delegation ladder (inform / consult / decide / own) and name the level explicitly.
• Build a 90-day future-protection plan (bench, systems, risks, capacity) and review weekly.`,
    commonSelfTalkTraps: `• Nothing major has blown up yet, so things must be mostly fine.
• I just need a little more information before I decide.
• It’s faster if I just do it myself.
• We’ll deal with the future when this season calms down.
• If we just get through this week, everything will feel easier.`,
    counterQuestions: `• What patterns have repeated despite multiple fixes?
• What decision am I delaying because it’s uncomfortable?
• What am I holding that someone else could learn by owning?
• If I left tomorrow, what would break first?
• Which single behavior change would create the biggest shift for the team this month?`,
  },
  {
    key: `ADTI`,
    lowBehaviors: `ADTI`,
    leaderType: `The Distrusted Leader`,
    leaderTypeDescription: `This leader doesn’t see reality clearly, doesn’t act decisively, and is inconsistent in reliability and
meaning—so trust collapses and clarity disappears. People don’t feel safe being honest because the
leader’s follow-through is uncertain and decisions drift. The team experiences leadership as vague,
unpredictable, and emotionally draining. Over time, communication becomes guarded, engagement
drops, and the building runs on workarounds rather than alignment.`,
    whatTeamSees: `The team experiences low clarity and low trust at the same time. Leadership
misses realities, delays decisions, and follow-through is inconsistent, so
employees don’t know what to count on. People become guarded, avoiding
honesty because they fear nothing will change or that standards will shift. Over
time, communication becomes defensive, and staff rely more on escalation,
documentation, and workarounds than partnership.`,
    whatToDo: `• Do a weekly people map (thriving / struggling / at-risk) with 1 sentence why each.
• Add daily leadership rounding with 3 set questions: What's hard? What's unclear? What do you need?
• Start a decision log with deadlines (what / owner / by when) and review it twice a week.
• Create a commitments tracker (promise / due date / close loop) and review it daily.
• Connect one standard per day to resident/family impact so the why stays alive.`,
    commonSelfTalkTraps: `• Nothing major has blown up yet, so things must be mostly fine.
• I just need a little more information before I decide.
• They know what I meant, even if I didn’t circle back.
• They already know why this matters—I don’t need to say it.
• If we just get through this week, everything will feel easier.`,
    counterQuestions: `• What patterns have repeated despite multiple fixes?
• What decision am I delaying because it’s uncomfortable?
• What commitment did I make that I haven’t closed the loop on?
• When was the last time I connected this work to purpose?
• Which single behavior change would create the biggest shift for the team this month?`,
  },
  {
    key: `ADTS`,
    lowBehaviors: `ADTS`,
    leaderType: `The Standard Killer`,
    leaderTypeDescription: `This leader fails across awareness, decisiveness, reliability, and stewardship, causing standards and
stability to decay. The organization experiences prolonged “yellow” states where issues are known but
unresolved and long-term protection is absent. People lose confidence that leadership will do hard things
or build durability. Over time, accountability collapses, turnover hits harder, and the building becomes
fragile under even normal pressure.`,
    whatTeamSees: `The team experiences a slow breakdown of standards and stability. Leadership
knows issues exist but delays action, follow-through is inconsistent, and long-
term protection is weak, so exceptions accumulate. Employees stop expecting
accountability to land. Over time, high performers feel resentment, the culture
normalizes drift, and staff lose confidence that leadership will protect the future
or uphold durable expectations under pressure.`,
    whatToDo: `• Do a weekly people map (thriving / struggling / at-risk) with 1 sentence why each.
• Add daily leadership rounding with 3 set questions: What's hard? What's unclear? What do you need?
• Start a decision log with deadlines (what / owner / by when) and review it twice a week.
• Create a commitments tracker (promise / due date / close loop) and review it daily.
• Build a 90-day future-protection plan (bench, systems, risks, capacity) and review weekly.`,
    commonSelfTalkTraps: `• Nothing major has blown up yet, so things must be mostly fine.
• I just need a little more information before I decide.
• They know what I meant, even if I didn’t circle back.
• We’ll deal with the future when this season calms down.
• If we just get through this week, everything will feel easier.`,
    counterQuestions: `• What patterns have repeated despite multiple fixes?
• What decision am I delaying because it’s uncomfortable?
• What commitment did I make that I haven’t closed the loop on?
• If I left tomorrow, what would break first?
• Which single behavior change would create the biggest shift for the team this month?`,
  },
  {
    key: `ADIS`,
    lowBehaviors: `ADIS`,
    leaderType: `The Uninspiring Drifter`,
    leaderTypeDescription: `This leader lacks clarity, action, meaning, and stewardship, producing a drifting culture with low belief and
low future stability. Problems repeat because they aren’t resolved, and people stop feeling that their effort
matters. The team experiences exhaustion from constant motion without direction. Over time,
discretionary effort disappears and the building becomes a place where people “just get through the day”
rather than build something strong.`,
    whatTeamSees: `T h e t e a m e x p e r ie n c e s c o n s t a n t a c t iv i ty w i th o u t m e a n in g o r d ir e ct i o n . L e a d e r s h i p
m i s s e s pa tt e r n s , d e l a y s a c t io n , f a il s t o r ei n fo r c e p u rp o se , a n d n e g l e c t s lo n g - t e r m
health, so effort feels exhausting and hollow. Employees feel like they are
working hard without building anything lasting. Over time, disengagement
spreads quietly and people withdraw emotionally because they don’t feel seen,
inspired, or protected by stable leadership behavior.`,
    whatToDo: `• D o a w e e k ly p e o p le m a p ( t h r iv in g / st ru g g l in g / a t- ri s k) w i t h 1 s e n t en c e w h y e a c h .
• Ad d d a il y le a d e rs h ip ro u n d i n g w i th 3 s e t q u e s t i o n s : W h a t 's h a r d ? W h a t ' s u n c l e a r? What do you need?
• Start a decision log with deadlines (what / owner / by when) and review it twice a week.
• Connect one standard per day to resident/family impact so the why stays alive.
• Build a 90-day future-protection plan (bench, systems, risks, capacity) and review weekly.`,
    commonSelfTalkTraps: `• Nothing major has blown up yet, so things must be mostly fine.
• I just need a little more information before I decide.
• They already know why this matters—I don’t need to say it.
• We’ll deal with the future when this season calms down.
• If we just get through this week, everything will feel easier.`,
    counterQuestions: `• What patterns have repeated despite multiple fixes?
• What decision am I delaying because it’s uncomfortable?
• When was the last time I connected this work to purpose?
• If I left tomorrow, what would break first?
• Which single behavior change would create the biggest shift for the team this month?`,
  },
  {
    key: `AETI`,
    lowBehaviors: `AETI`,
    leaderType: `The Mixed-Message Leader`,
    leaderTypeDescription: `This leader creates mixed cultural signals because empowerment is inconsistent, reliability is unstable,
and purpose is thin—while awareness is also weak. People receive confusing messages about ownership
and standards, and they aren’t sure what “good” looks like. Motivation becomes fragile because
recognition and meaning don’t align with consistent follow-through. Over time, teams fragment—some
over-function, some underperform, and the leader becomes a source of instability rather than alignment.`,
    whatTeamSees: `The team experiences mixed messages about ownership, standards, and
purpose. Leadership misses patterns, delegates inconsistently, follow-through
wobbles, and meaning isn’t reinforced, so employees can’t predict what matters.
People become cautious and reactive. Over time, staff stop taking initiative
because they don’t trust that empowerment will be honored or that standards
will be applied consistently, and motivation fades because purpose feels
unreliable.`,
    whatToDo: `• Do a weekly people map (thriving / struggling / at-risk) with 1 sentence why each.
• Add daily leadership rounding with 3 set questions: What's hard? What's unclear? What do you need?
• Use a delegation ladder (inform / consult / decide / own) and name the level explicitly.
• Create a commitments tracker (promise / due date / close loop) and review it daily.
• Connect one standard per day to resident/family impact so the why stays alive.`,
    commonSelfTalkTraps: `• Nothing major has blown up yet, so things must be mostly fine.
• It’s faster if I just do it myself.
• They know what I meant, even if I didn’t circle back.
• They already know why this matters—I don’t need to say it.
• If we just get through this week, everything will feel easier.`,
    counterQuestions: `• What patterns have repeated despite multiple fixes?
• What am I holding that someone else could learn by owning?
• What commitment did I make that I haven’t closed the loop on?
• When was the last time I connected this work to purpose?
• Which single behavior change would create the biggest shift for the team this month?`,
  },
  {
    key: `AETS`,
    lowBehaviors: `AETS`,
    leaderType: `The Fragile Delegator`,
    leaderTypeDescription: `This leader delegates without clear awareness or durable stewardship, and reliability is not strong enough
to stabilize empowerment. Ownership shifts unpredictably and long-term continuity is neglected. People
experience empowerment as chaotic—authority without safety, responsibility without protection, and no
long-term plan. Over time, initiative declines, resentment grows, and the organization becomes
vulnerable when strong individuals burn out or leave.`,
    whatTeamSees: `The team experiences chaotic delegation with fragile stability. Leadership
misses readiness signals, assigns ownership inconsistently, reliability varies, and
long-term protection is weak, so authority shifts unpredictably. People hesitate
to act because boundaries aren’t clear. Over time, initiative collapses and
employees protect themselves by staying small, avoiding risk, and waiting for
explicit direction to reduce exposure.`,
    whatToDo: `• D o a w e e k ly p e o p le m a p ( t h r iv in g / st ru g g l in g / a t- ri s k) w i t h 1 s e n t en c e w h y e a c h .
• Ad d d a il y le a d e rs h ip ro u n d i n g w i th 3 s e t q u e s t i o n s : W h a t 's h a r d ? W h a t ' s u n c l e a r? What do you need?
• Use a delegation ladder (inform / consult / decide / own) and name the level explicitly.
• Create a commitments tracker (promise / due date / close loop) and review it daily.
• Build a 90-day future-protection plan (bench, systems, risks, capacity) and review weekly.`,
    commonSelfTalkTraps: `• Nothing major has blown up yet, so things must be mostly fine.
• It’s faster if I just do it myself.
• They know what I meant, even if I didn’t circle back.
• We’ll deal with the future when this season calms down.
• If we just get through this week, everything will feel easier.`,
    counterQuestions: `• What patterns have repeated despite multiple fixes?
• What am I holding that someone else could learn by owning?
• What commitment did I make that I haven’t closed the loop on?
• If I left tomorrow, what would break first?
• Which single behavior change would create the biggest shift for the team this month?`,
  },
  {
    key: `AEIS`,
    lowBehaviors: `AEIS`,
    leaderType: `The Empty Developer`,
    leaderTypeDescription: `This leader tries to develop and motivate people, but lacks awareness and stewardship, and
empowerment isn’t grounded in real authority. The team may feel encouraged in moments, yet they don’t
experience durable systems, clear ownership, or future protection. Growth becomes inspirational talk
rather than stable development. Over time, people stop believing leadership development is real, and the
building remains dependent on a few strong individuals rather than a deep bench.`,
    whatTeamSees: `The team experiences “development language” without lasting development.
Leadership misses patterns, does not truly transfer ownership, does not
reinforce meaning, and does not build long-term depth, so growth feels
temporary. Employees may feel encouraged briefly, then disappointed. Over
time, staff stop trusting leadership development efforts because opportunities
don’t result in real authority or durable support, and succession remains thin.`,
    whatToDo: `• Do a weekly people map (thriving / struggling / at-risk) with 1 sentence why each.
• Add daily leadership rounding with 3 set questions: What's hard? What's unclear? What do you need?
• Use a delegation ladder (inform / consult / decide / own) and name the level explicitly.
• Connect one standard per day to resident/family impact so the why stays alive.
• Build a 90-day future-protection plan (bench, systems, risks, capacity) and review weekly.`,
    commonSelfTalkTraps: `• Nothing major has blown up yet, so things must be mostly fine.
• It’s faster if I just do it myself.
• They already know why this matters—I don’t need to say it.
• We’ll deal with the future when this season calms down.
• If we just get through this week, everything will feel easier.`,
    counterQuestions: `• What patterns have repeated despite multiple fixes?
• What am I holding that someone else could learn by owning?
• When was the last time I connected this work to purpose?
• If I left tomorrow, what would break first?
• Which single behavior change would create the biggest shift for the team this month?`,
  },
  {
    key: `ATIS`,
    lowBehaviors: `ATIS`,
    leaderType: `The Silent Disengager`,
    leaderTypeDescription: `This leader creates silent disengagement because reality isn’t fully seen, reliability is inconsistent,
meaning fades, and the future isn’t protected. People stop trusting what is said, stop feeling connected to
purpose, and stop believing leadership will prevent avoidable pain. The organization becomes emotionally
quieter—less feedback, less ownership, less courage. Over time, culture decays without obvious conflict,
and performance becomes fragile because belief has quietly disappeared.`,
    whatTeamSees: `The team experiences quiet withdrawal across the organization. Leadership
misses realities, follow-through is inconsistent, meaning is thin, and long-term
protection is weak, so people stop sharing truth and stop believing. Employees
become polite but disengaged. Over time, feedback decreases, ownership
declines, and the culture becomes emotionally cautious because staff assume
honesty won’t lead to reliable action, meaningful recognition, or future stability.`,
    whatToDo: `• Do a weekly people map (thriving / struggling / at-risk) with 1 sentence why each.
• Add daily leadership rounding with 3 set questions: What's hard? What's unclear? What do you need?
• Create a commitments tracker (promise / due date / close loop) and review it daily.
• Connect one standard per day to resident/family impact so the why stays alive.
• Build a 90-day future-protection plan (bench, systems, risks, capacity) and review weekly.`,
    commonSelfTalkTraps: `• Nothing major has blown up yet, so things must be mostly fine.
• They know what I meant, even if I didn’t circle back.
• They already know why this matters—I don’t need to say it.
• We’ll deal with the future when this season calms down.
• If we just get through this week, everything will feel easier.`,
    counterQuestions: `• What patterns have repeated despite multiple fixes?
• What commitment did I make that I haven’t closed the loop on?
• When was the last time I connected this work to purpose?
• If I left tomorrow, what would break first?
• Which single behavior change would create the biggest shift for the team this month?`,
  },
  {
    key: `DETI`,
    lowBehaviors: `DETI`,
    leaderType: `The Pressure Cooker`,
    leaderTypeDescription: `This leader pushes accountability inconsistently while limiting ownership and lacking credibility and
meaning. People feel pressure to produce but don’t feel trusted, supported, or inspired to own outcomes.
Conversations can feel intense, but they don’t generate lasting commitment. Over time, staff comply
outwardly while disengaging inwardly, and burnout rises because effort is fueled by pressure rather than
purpose and stability.`,
    whatTeamSees: `The team experiences pressure without safety. Decisions may be delayed or
inconsistently enforced, empowerment is limited, reliability is shaky, and
purpose isn’t strong enough to sustain effort. People comply but don’t feel
trusted. Over time, burnout rises because employees carry expectations without
real authority or emotional reinforcement, and they learn the safest approach is
to do what’s required while withholding discretionary effort and honesty.`,
    whatToDo: `• Start a decision log with deadlines (what / owner / by when) and review it twice a week.
• Use a 48-hour rule: once a decision is identified, schedule the action within 2 days.
• Use a delegation ladder (inform / consult / decide / own) and name the level explicitly.
• Create a commitments tracker (promise / due date / close loop) and review it daily.
• Connect one standard per day to resident/family impact so the why stays alive.`,
    commonSelfTalkTraps: `• I just need a little more information before I decide.
• It’s faster if I just do it myself.
• They know what I meant, even if I didn’t circle back.
• They already know why this matters—I don’t need to say it.
• If we just get through this week, everything will feel easier.`,
    counterQuestions: `• What decision am I delaying because it’s uncomfortable?
• What am I holding that someone else could learn by owning?
• What commitment did I make that I haven’t closed the loop on?
• When was the last time I connected this work to purpose?
• Which single behavior change would create the biggest shift for the team this month?`,
  },
  {
    key: `DETS`,
    lowBehaviors: `DETS`,
    leaderType: `The System Breaker`,
    leaderTypeDescription: `This leader struggles to decide, empower, follow through, and steward long-term health, which causes
systems to break under pressure. Ownership is unclear, accountability is inconsistent, and continuity is
not built—so each challenge feels like a new emergency. People become tired of constant resets and stop
believing stability is possible. Over time, turnover becomes more damaging, quality becomes
inconsistent, and the building becomes structurally fragile.`,
    whatTeamSees: `The team experiences cycles of urgency and breakdown. Decisions are delayed,
ownership is weak, follow-through is inconsistent, and long-term stability isn’t
p ro te c te d , s o e a c h ne w c h a l le n g e fe e l s li k e a c r is is . E m p lo y e e s f e e l s t u c k in
re se t m o d e . O v e r ti m e , f a ti g u e d o m i n a t e s b e c a u s e p e o pl e d o n ’ t b e l i e v e
improvement will endure, and they expect that stability will always require heroic
effort rather than durable systems and consistent leadership behavior.`,
    whatToDo: `• Start a decision log with deadlines (what / owner / by when) and review it twice a week.
• Use a 48-hour rule: once a decision is identified, schedule the action within 2 days.
• Use a delegation ladder (inform / consult / decide / own) and name the level explicitly.
• Create a commitments tracker (promise / due date / close loop) and review it daily.
• Build a 90-day future-protection plan (bench, systems, risks, capacity) and review weekly.`,
    commonSelfTalkTraps: `• I just need a little more information before I decide.
• It’s faster if I just do it myself.
• They know what I meant, even if I didn’t circle back.
• We’ll deal with the future when this season calms down.
• If we just get through this week, everything will feel easier.`,
    counterQuestions: `• What decision am I delaying because it’s uncomfortable?
• What am I holding that someone else could learn by owning?
• What commitment did I make that I haven’t closed the loop on?
• If I left tomorrow, what would break first?
• Which single behavior change would create the biggest shift for the team this month?`,
  },
  {
    key: `DEIS`,
    lowBehaviors: `DEIS`,
    leaderType: `The Unsustained Grower`,
    leaderTypeDescription: `This leader delays decisions, limits empowerment, fails to inspire meaning, and neglects
stewardship—so development and culture gains don’t endure. People might improve briefly in high-focus
seasons, but momentum fades because ownership and long-term structure are missing. The team
experiences “short bursts of progress” followed by regression. Over time, staff stop trusting improvement
efforts because they feel temporary and dependent on pressure rather than real leadership behavior.`,
    whatTeamSees: `The team experiences short bursts of progress that don’t stick. Leadership delays
hard decisions, doesn’t transfer true ownership, doesn’t reinforce meaning, and
doesn’t build long-term durability, so improvements fade when attention shifts.
Employees become skeptical of initiatives. Over time, staff stop investing
emotionally in change efforts because they’ve learned momentum is temporary
and depends on pressure rather than true ownership and continuity.`,
    whatToDo: `• Start a decision log with deadlines (what / owner / by when) and review it twice a week.
• Use a 48-hour rule: once a decision is identified, schedule the action within 2 days.
• Use a delegation ladder (inform / consult / decide / own) and name the level explicitly.
• Connect one standard per day to resident/family impact so the why stays alive.
• Build a 90-day future-protection plan (bench, systems, risks, capacity) and review weekly.`,
    commonSelfTalkTraps: `• I just need a little more information before I decide.
• It’s faster if I just do it myself.
• They already know why this matters—I don’t need to say it.
• We’ll deal with the future when this season calms down.
• If we just get through this week, everything will feel easier.`,
    counterQuestions: `• What decision am I delaying because it’s uncomfortable?
• What am I holding that someone else could learn by owning?
• When was the last time I connected this work to purpose?
• If I left tomorrow, what would break first?
• Which single behavior change would create the biggest shift for the team this month?`,
  },
  {
    key: `DTIS`,
    lowBehaviors: `DTIS`,
    leaderType: `The Results Tyrant`,
    leaderTypeDescription: `This leader drives outcomes through decisions and enforcement, but lacks reliability, meaning, and long-
term stewardship, making results costly. People feel pushed but not cared for, clear about tasks but
unclear about purpose, and uncertain that standards will be fair or enduring. The organization can
produce performance, but it is emotionally expensive. Over time, burnout increases, honesty decreases,
and turnover rises because people don’t believe leadership is building something sustainable.`,
    whatTeamSees: `The team experiences results at an emotional cost. Decisions and enforcement
may happen, but reliability, meaning, and long-term stewardship are weak, so
performance is driven by pressure rather than belief. Employees feel exhausted
and guarded. Over time, turnover risk increases because staff don’t trust
consistency, don’t feel connected to purpose, and don’t believe leadership is
protecting sustainability for people or systems.`,
    whatToDo: `• Start a decision log with deadlines (what / owner / by when) and review it twice a week.
• Use a 48-hour rule: once a decision is identified, schedule the action within 2 days.
• Create a commitments tracker (promise / due date / close loop) and review it daily.
• Connect one standard per day to resident/family impact so the why stays alive.
• Build a 90-day future-protection plan (bench, systems, risks, capacity) and review weekly.`,
    commonSelfTalkTraps: `• I just need a little more information before I decide.
• They know what I meant, even if I didn’t circle back.
• They already know why this matters—I don’t need to say it.
• We’ll deal with the future when this season calms down.
• If we just get through this week, everything will feel easier.`,
    counterQuestions: `• What decision am I delaying because it’s uncomfortable?
• What commitment did I make that I haven’t closed the loop on?
• When was the last time I connected this work to purpose?
• If I left tomorrow, what would break first?
• Which single behavior change would create the biggest shift for the team this month?`,
  },
  {
    key: `ETIS`,
    lowBehaviors: `ETIS`,
    leaderType: `The Unsupported Culture Builder`,
    leaderTypeDescription: `This leader encourages people to step up but fails to create the safety, meaning, reliability, and future
protection that makes ownership sustainable. Team members feel the burden of responsibility without
the reinforcement of consistent standards and inspiring purpose. Mistakes feel punishing, and progress
feels temporary. Over time, people retreat from leadership, initiative declines, and the organization
becomes dependent on a few over-functioning individuals rather than shared ownership.`,
    whatTeamSees: `The team avoids stepping up because ownership feels unsafe and unrewarding.
Responsibility is assigned without reliable backing, meaning isn’t reinforced, and
long-term stability isn’t protected, so leadership roles feel like exposure.
Employees become risk-averse. Over time, initiative collapses as people learn
it’s safer to stay in narrow roles than to accept ownership that lacks protection,
recognition, and durable support structures.`,
    whatToDo: `• Use a delegation ladder (inform / consult / decide / own) and name the level explicitly.
• Delegate outcomes, not tasks: define success, guardrails, and decision rights.
• Create a commitments tracker (promise / due date / close loop) and review it daily.
• Connect one standard per day to resident/family impact so the why stays alive.
• Build a 90-day future-protection plan (bench, systems, risks, capacity) and review weekly.`,
    commonSelfTalkTraps: `• It’s faster if I just do it myself.
• They know what I meant, even if I didn’t circle back.
• They already know why this matters—I don’t need to say it.
• We’ll deal with the future when this season calms down.
• If we just get through this week, everything will feel easier.`,
    counterQuestions: `• What am I holding that someone else could learn by owning?
• What commitment did I make that I haven’t closed the loop on?
• When was the last time I connected this work to purpose?
• If I left tomorrow, what would break first?
• Which single behavior change would create the biggest shift for the team this month?`,
  },
  {
    key: `ADETI`,
    lowBehaviors: `ADETI`,
    leaderType: `The Reactive Leader`,
    leaderTypeDescription: `This leader is reactive and inconsistent across awareness, action, empowerment, reliability, and
meaning. The team experiences constant motion without stable direction—decisions don’t stick,
ownership is unclear, and follow-through varies. People feel emotionally tired because leadership
behavior is unpredictable, especially under pressure. Over time, the building shifts into survival mode
where progress requires constant effort and alignment is difficult to sustain.`,
    whatTeamSees: `The team experiences a leader who is inconsistent across nearly everything
except long-term stewardship may be the only partial anchor. Reality isn’t seen
clearly, decisions don’t land, ownership isn’t real, follow-through varies, and
meaning is thin. Over time, staff feel constantly managed by urgency and
uncertainty rather than led by clarity and development.`,
    whatToDo: `• Do a weekly people map (thriving / struggling / at-risk) with 1 sentence why each.
• Start a decision log with deadlines (what / owner / by when) and review it twice a week.
• Use a delegation ladder (inform / consult / decide / own) and name the level explicitly.
• Create a commitments tracker (promise / due date / close loop) and review it daily.
• Connect one standard per day to resident/family impact so the why stays alive.`,
    commonSelfTalkTraps: `• Nothing major has blown up yet, so things must be mostly fine.
• I just need a little more information before I decide.
• It’s faster if I just do it myself.
• They know what I meant, even if I didn’t circle back.
• They already know why this matters—I don’t need to say it.`,
    counterQuestions: `• What patterns have repeated despite multiple fixes?
• What decision am I delaying because it’s uncomfortable?
• What am I holding that someone else could learn by owning?
• What commitment did I make that I haven’t closed the loop on?
• When was the last time I connected this work to purpose?`,
  },
  {
    key: `ADEIS`,
    lowBehaviors: `ADEIS`,
    leaderType: `The Culture-Only Leader`,
    leaderTypeDescription: `This leader struggles with awareness, action, empowerment, meaning, and stewardship, creating a
culture that sounds positive but doesn’t produce lasting capability. Development is talked about, but
authority isn’t truly transferred and priorities aren’t clearly driven. People feel encouraged but not
equipped, and the future isn’t protected through succession and systems. Over time, the building
becomes “culture-heavy, execution-light,” where good intentions cannot overcome structural weakness.`,
    whatTeamSees: `The team experiences positivity and culture language without the execution
backbone to sustain it. Leadership misses reality, delays action, doesn’t truly
empower, and neglects stewardship, so “development” feels aspirational. Over
time, employees stop believing in culture messaging because they don’t see
authority, stability, or durable progress behind the words.`,
    whatToDo: `• Do a weekly people map (thriving / struggling / at-risk) with 1 sentence why each.
• Start a decision log with deadlines (what / owner / by when) and review it twice a week.
• Use a delegation ladder (inform / consult / decide / own) and name the level explicitly.
• Connect one standard per day to resident/family impact so the why stays alive.
• Build a 90-day future-protection plan (bench, systems, risks, capacity) and review weekly.`,
    commonSelfTalkTraps: `• Nothing major has blown up yet, so things must be mostly fine.
• I just need a little more information before I decide.
• It’s faster if I just do it myself.
• They already know why this matters—I don’t need to say it.
• We’ll deal with the future when this season calms down.`,
    counterQuestions: `• What patterns have repeated despite multiple fixes?
• What decision am I delaying because it’s uncomfortable?
• What am I holding that someone else could learn by owning?
• When was the last time I connected this work to purpose?
• If I left tomorrow, what would break first?`,
  },
  {
    key: `ADTIS`,
    lowBehaviors: `ADTIS`,
    leaderType: `The Trust-Void Leader`,
    leaderTypeDescription: `This leader struggles across awareness, decisiveness, reliability, meaning, and stewardship, creating a
trust-void environment with no stable direction. People don’t know what will happen, don’t trust what is
said, and don’t feel connected to purpose. Long-term protection is absent, so the future feels uncertain
and fragile. Over time, the organization becomes emotionally guarded and operationally reactive, relying
on escalation and crisis response rather than aligned leadership.`,
    whatTeamSees: `The team experiences low clarity, low trust, low meaning, and low long-term
protection while decisions also don’t land. People don’t know what will happen,
don’t trust what is said, and don’t feel connected to purpose. Over time,
communication becomes guarded, ownership collapses, and the organization
becomes reactive and emotionally fatigued.`,
    whatToDo: `• Do a weekly people map (thriving / struggling / at-risk) with 1 sentence why each.
• Start a decision log with deadlines (what / owner / by when) and review it twice a week.
• Create a commitments tracker (promise / due date / close loop) and review it daily.
• Connect one standard per day to resident/family impact so the why stays alive.
• Build a 90-day future-protection plan (bench, systems, risks, capacity) and review weekly.`,
    commonSelfTalkTraps: `• Nothing major has blown up yet, so things must be mostly fine.
• I just need a little more information before I decide.
• They know what I meant, even if I didn’t circle back.
• They already know why this matters—I don’t need to say it.
• We’ll deal with the future when this season calms down.`,
    counterQuestions: `• What patterns have repeated despite multiple fixes?
• What decision am I delaying because it’s uncomfortable?
• What commitment did I make that I haven’t closed the loop on?
• When was the last time I connected this work to purpose?
• If I left tomorrow, what would break first?`,
  },
  {
    key: `AETIS`,
    lowBehaviors: `AETIS`,
    leaderType: `The People System Failure`,
    leaderTypeDescription: `This leader’s people system is fragile because awareness is weak, empowerment is inconsistent,
reliability is unstable, meaning is thin, and long-term stewardship is neglected. Team members may be
asked to own outcomes, but they don’t experience the stable support, standards, and purpose that make
ownership healthy. The result is anxious delegation—responsibility without confidence. Over time,
initiative collapses, culture weakens, and the building becomes dependent on a small number of resilient
individuals.`,
    whatTeamSees: `The team experiences fragile people systems: reality isn’t seen clearly,
empowerment is unsafe, follow-through is inconsistent, purpose is thin, and long-
term stability isn’t protected. Employees feel anxious about ownership and
uncertain about standards. Over time, initiative disappears because people
learn stepping up creates risk without reliable backing or durable support.`,
    whatToDo: `• Do a weekly people map (thriving / struggling / at-risk) with 1 sentence why each.
• Use a delegation ladder (inform / consult / decide / own) and name the level explicitly.
• Create a commitments tracker (promise / due date / close loop) and review it daily.
• Connect one standard per day to resident/family impact so the why stays alive.
• Build a 90-day future-protection plan (bench, systems, risks, capacity) and review weekly.`,
    commonSelfTalkTraps: `• Nothing major has blown up yet, so things must be mostly fine.
• It’s faster if I just do it myself.
• They know what I meant, even if I didn’t circle back.
• They already know why this matters—I don’t need to say it.
• We’ll deal with the future when this season calms down.`,
    counterQuestions: `• What patterns have repeated despite multiple fixes?
• What am I holding that someone else could learn by owning?
• What commitment did I make that I haven’t closed the loop on?
• When was the last time I connected this work to purpose?
• If I left tomorrow, what would break first?`,
  },
  {
    key: `DETIS`,
    lowBehaviors: `DETIS`,
    leaderType: `The Footprintless Leader`,
    leaderTypeDescription: `This leader leaves little durable progress because decisions, empowerment, trust, meaning, and
stewardship do not hold together consistently. The building may move during high-pressure seasons, but
ownership and continuity aren’t built into the system. People experience repeated resets and lose faith
that improvement will endure beyond the moment. Over time, motivation fades, stability weakens, and
the organization becomes stuck in cycles rather than trajectories.`,
    whatTeamSees: `The team experiences repeated resets because decisions don’t land,
empowerment is weak, follow-through varies, meaning is thin, and stewardship
is absent. Progress feels temporary and dependent on pressure. Over time, staff
stop investing emotionally, because they believe improvement won’t endure and
leadership behavior won’t consistently protect standards, motivation, or
continuity.`,
    whatToDo: `• Start a decision log with deadlines (what / owner / by when) and review it twice a week.
• Use a delegation ladder (inform / consult / decide / own) and name the level explicitly.
• Create a commitments tracker (promise / due date / close loop) and review it daily.
• Connect one standard per day to resident/family impact so the why stays alive.
• Build a 90-day future-protection plan (bench, systems, risks, capacity) and review weekly.`,
    commonSelfTalkTraps: `• I just need a little more information before I decide.
• It’s faster if I just do it myself.
• They know what I meant, even if I didn’t circle back.
• They already know why this matters—I don’t need to say it.
• We’ll deal with the future when this season calms down.`,
    counterQuestions: `• What decision am I delaying because it’s uncomfortable?
• What am I holding that someone else could learn by owning?
• What commitment did I make that I haven’t closed the loop on?
• When was the last time I connected this work to purpose?
• If I left tomorrow, what would break first?`,
  },
  {
    key: `ADETIS`,
    lowBehaviors: `ADETIS`,
    leaderType: `The Leadership Vacuum`,
    leaderTypeDescription: `Leadership behavior is inconsistent across all six dimensions, leaving the organization without stable
clarity, action, ownership, reliability, meaning, or long-term protection. People do not know what is true,
what will be enforced, what they genuinely own, or why the work matters beyond immediate pressure. The
building operates in survival mode where energy is spent on managing chaos rather than building strength.
Over time, culture becomes cynical, outcomes become fragile, and continuity depends on heroic
individuals instead of durable leadership behavior.`,
    whatTeamSees: `The team experiences survival mode as the default. Clarity is weak, decisions
don’t hold, ownership isn’t real, follow-through varies, meaning is thin, and the
f u t u re f e e l s u n p r o te c t e d . E m p lo ye e s s t o p t ru st in g st a b i li ty . O v e r t i m e , c u lt u r e
b e c o m e s c y n ic a l a n d re a c t ive , re ly in g o n h e ro ic i n d iv i d u a ls ra t h e r th a n d u r a b l e
expectations, consistent accountability, and protected long-term health.`,
    whatToDo: `• Run a weekly closure review: what moved from yellow to green, what is stuck, and the next action.
• Ask for one piece of candid feedback each week (what should I start/stop/continue) and act on one item.
• Define and publish three priorities for the next 7 days with owners and what good looks like.
• Protect focus: remove one low-value meeting/task this week to create capacity for leadership behaviors.
• Share your plan: tell the team what you are changing, how you will track it, and when you will review it.`,
    commonSelfTalkTraps: `• Nothing major has blown up yet, so things must be mostly fine.
• I just need a little more information before I decide.
• It’s faster if I just do it myself.
• They know what I meant, even if I didn’t circle back.
• They already know why this matters—I don’t need to say it.`,
    counterQuestions: `• What patterns have repeated despite multiple fixes?
• What decision am I delaying because it’s uncomfortable?
• What am I holding that someone else could learn by owning?
• What commitment did I make that I haven’t closed the loop on?
• When was the last time I connected this work to purpose?`,
  },
]
