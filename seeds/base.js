
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('questions').del()
    .then(function () {
      // Inserts seed entries
      return knex('questions').insert([
        {
          number: 1,
          question: "Why doesn't the church more openly address a lot of the very controversial things from church history?  Like, why did I have to learn those things from my friend rather than the church where some things could be explained in a positive light?",
          count: 3
        },
        {
          number: 2,
          question: "What happens to those who commit suicide?",
          count: 4
        },
        {
          number: 3,
          question: "How does one cope with grief?",
          count: 1
        },
        {
          number: 4,
          question: "What do I do if I feel like I want to draw closer to God and am doing everything I can but can't seem to develop a better relationship with him?",
          count: 5
        },
        {
          number: 5,
          question: "There are SO MANY ways I should improve my life, but I'm struggling to find the motivation and will power to change anything at all.  Where do I start?  How do I choose one thing to focus on?  I'm just overwhelmed.",
          count: 6
        },
        {
          number: 6,
          question: "Most rentals in town are co-ed.  Is there any rule about this in the handbook?",
          count: 2
        },
        {
          number: 7,
          question: "How can I find out if someone in our ward can help tutor me in physics (or some other subject?)",
          count: 2
        },
        {
          number: 8,
          question: "What if I don't have FB?",
          count: 0
        },
        {
          number: 9,
          question: "When I'm having a hard time, how do I know when/how to ask for help without feeling needy?",
          count: 5
        },
        {
          number: 10,
          question: "How can we spiritually deal with or manage depression and anxiety?  (Especially when that depression or anxiety makes you feel not of worth?)",
          count: 7
        },
        {
          number: 11,
          question: "How can I best handle gospel related contention with a non-member parent?",
          count: 3
        },
        {
          number: 12,
          question: "How can we find peace when our lives get so busy and overwhelming, especially when it is due to things that are out of our control?",
          count: 6
        },
        {
          number: 13,
          question: "Bishopric!  What are the blessings you have seen in your lives from paying tithing?",
          count: 0
        },
        {
          number: 14,
          question: "What do I do if I've gone past feeling Godly sorrow for my sins?  I can't repent if I don't feel Godly sorrow, right?  But, don’t I need to repent to get back to a place to be able to feel Godly sorrow?",
          count: 4
        },
        {
          number: 15,
          question: " How can I receive more personal revelation in my life?  Especially when I feel out of touch and out of practice?",
          count: 8
        },
        {
          number: 16,
          question: "How can I increase my enthusiasm for ministering when I have a difficult assignment?  How can I increase my love for these people whom I've never met?",
          count: 4
        },
        {
          number: 17,
          question: "How do you obtain a contrite spirit? How do we change our heart? I find my self wanting to be better but still mess up?",
          count: 6
        },
        {
          number: 18,
          question: "How were the women prophets  in the old testament like Deborah? Did she have the priesthood?",
          count: 5
        },
        {
          number: 19,
          question: "Why does the church keep so much money instead of helping others out?",
          count: 1
        },
        {
          number: 20,
          question: "Why does the church participate in buying companies for profit?",
          count: 3
        },
      ]);
    });
};
