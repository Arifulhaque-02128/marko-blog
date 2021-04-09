const blogData2 = [
    {
        _id:'60297bcadaa9831d90e051bc',
        authorName: "Md. Ariful Haque",
        title: "Redux Thunk",
        bodyContent: "Redux Thunk middleware allows you to write action creators that return a function instead of an action. The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met. The inner function receives the store methods dispatch and getState as parameters."
    },
    {
        _id:'60297bcadaa9831d90e05abc',
        authorName: "Labib khondhokar",
        title: "React JS",
        bodyContent: "Redux Thunk middleware allows you to write action creators that return a function instead of an action. The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met. The inner function receives the store methods dispatch and getState as parameters."
    },
    {
        _id:'60297bcadaa9831d90e05fbc',
        authorName: "Sheikh Jamil",
        title: "Next JS",
        bodyContent: "Redux Thunk middleware allows you to write action creators that return a function instead of an action. The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met. The inner function receives the store methods dispatch and getState as parameters."
    },
]

const blogData = [
    {
        _id:'60297bcadaa9831d90e05fbc',
        authorName: "Md. Ariful Haque",
        author_img: "http://res.cloudinary.com/marko-ai/image/upload/v1617966628/usdblr0acjd0slblqq4c.jpg",
        blogContents: `<p></p>↵<img src="http://res.cloudinary.com/marko-ai/image/upload/v1617966511/fwgqt9stfonzglkihvnv.jpg" alt="blog photo1" style="height: 150px;width: 150px"/>↵<p style="text-align:justify;"><span style="color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 1.2rem;font-family: Segoe UI", "Source Sans Pro", -apple-system, BlinkMacSystemFont, Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;">The title “Kala haba”, may be categorized as incorrect, is quite a well known phrase to netizens  of Bangladesh. Although , ideally it shouldn’t mean anything(or mean something completely unrelated to the meaning that it was originally supposed to mean ), a general understanding is still possible because of our familiarity of "বাংলা" language. This familiarity is a boon and a bane. The fact that we are able to understand this phrase, even when we know that this is a wrong representation of the phrase “ খেলা হবে" , gives us an example of human cognitive adaptability. </span></p>↵<p style="text-align:justify;"><span style="color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 1.2rem;font-family: Segoe UI", "Source Sans Pro", -apple-system, BlinkMacSystemFont, Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;">A form where words are written phonetically with English letters may be defined as “Romanized”. Example: The Bangla phrase “ খেলা হবে"  can be represented as “Khela Hobe”.</span></p>↵`,
        cover_photo: "http://res.cloudinary.com/marko-ai/image/upload/v1617966625/xrz4ph76tbc21rlhm9wb.jpg",
        date: "Apr 9, 2021",
        title: "Next JS",
    },
    {
        _id:'60297bcadaa9831d90e05abc',
        authorName: "Rubaiyat F.",
        author_img: "http://res.cloudinary.com/marko-ai/image/upload/v1617982214/fvnuwbagnciah7cq8xik.png",
        blogContents: `<p style="text-align:center;"><span style="color: rgb(22,25,29);background-color: rgb(255,255,255);font-size: 1.5rem;font-family: Segoe UI", "Source Sans Pro", -apple-system, BlinkMacSystemFont, Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;">"OpenAI’s new language generator GPT-3 is shockingly good and completely mindless.</span>&nbsp;</p>↵<p></p>↵<div style="text-align:none;"><img src="https://res.cloudinary.com/marko-ai/image/upload/v1617859736/ec2fsqwzdd1g8vjv20dz.png" alt="blog photo1" style="height: 100px;width: 120px"/></div>↵<p><span style="color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 18px;font-family: Segoe UI", "Source Sans Pro", -apple-system, BlinkMacSystemFont, Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;">According to</span> <a href="https://www.technologyreview.com/author/will-douglas-heaven/" target="_blank"><span style="color: rgb(6,117,214);background-color: rgb(255,255,255);font-size: 18px;font-family: Segoe UI", "Source Sans Pro", -apple-system, BlinkMacSystemFont, Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;">Will Douglas Heaven</span></a> <span style="color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 18px;font-family: Segoe UI", "Source Sans Pro", -apple-system, BlinkMacSystemFont, Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;">from MIT Technology Review, GPT-3 is the most powerful language model ever. Its predecessor,</span> <a href="https://www.technologyreview.com/2019/08/29/133218/openai-released-its-fake-news-ai-gpt-2/" target="_blank"><span style="color: rgb(6,117,214);background-color: rgb(255,255,255);font-size: 18px;font-family: Segoe UI", "Source Sans Pro", -apple-system, BlinkMacSystemFont, Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;">GPT-2</span></a><span style="color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 18px;font-family: Segoe UI", "Source Sans Pro", -apple-system, BlinkMacSystemFont, Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;">, released last year, was already able to spit out convincing streams of text in a range of different styles when prompted with an opening sentence. But GPT-3 is a big leap forward. The model has 175 billion parameters (the values that a neural network tries to optimize during training), compared with GPT-2’s already vast 1.5 billion. And with language models,</span> <a href="https://www.technologyreview.com/2020/04/29/1000795/facebook-ai-chatbot-blender-beats-google-meena/" target="_blank"><span style="color: rgb(6,117,214);background-color: rgb(255,255,255);font-size: 18px;font-family: Segoe UI", "Source Sans Pro", -apple-system, BlinkMacSystemFont, Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;">size really does matter</span></a> <span style="color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 18px;font-family: Segoe UI", "Source Sans Pro", -apple-system, BlinkMacSystemFont, Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;">.</span>&nbsp;</p>↵`,
        cover_photo: "http://res.cloudinary.com/marko-ai/image/upload/v1617982211/frm61lnzmhc4ia1djmnv.png",
        date: "Apr 9, 2021",
        title: "How did we get private beta access in GPT-3 within 1 day?",
    },
    {
        _id:'60297bcadaa9831d90e051bc',
        authorName: "Thanos",
        author_img: "http://res.cloudinary.com/marko-ai/image/upload/v1617982898/o32skogcleehmzbzlppm.png",
        blogContents: `<p><span style="color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 18px;font-family: segoe ui;">Consider one old school traditional software engineering problem where you might have lots of lots of names and lots of lots of numbers and those names are hopefully sorted alphabetically(in ascending order) from A through Z in a book like this, even though most of us don’t really reach for this technology anymore but consider that it’s really the same as your iPhone or Android phone or other device which has all of your contacts top to bottom and you can scroll through them from A to Z or you can search for them by typing into the little autocomplete box.</span>&nbsp;</p>↵<div style="text-align:none;"><img src="https://res.cloudinary.com/marko-ai/image/upload/v1617891799/hbi2v2zs9yingnurpmrw.png" alt="blog photo" style="height: 200px;width: 200px"/></div>↵<p></p>↵`,
        cover_photo: "http://res.cloudinary.com/marko-ai/image/upload/v1617982894/oyjgxhehxmveb1ojeafl.png",
        date: "Apr 9, 2021",
        title: "Introduction to Romanic Bangla (Banglish) Natural Language Processing",
    }
]

export default blogData;