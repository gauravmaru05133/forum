import images from "../../assets/images"

const loyaltyHubList = [
    {
        "id": 1,
        "title": "Wheel of Fortune",
        "heading":"SPIN THE WHEEL",
        "des":"Try your luck by spinning the wheel!",
        "img":images.wheelIcon,
        "btnName":"TRY YOUR LUCK"
    },
    {
        "id": 2,
        "title": "Scratch to Win",
        "heading":"SCRATCH CARD",
        "des":"Try your luck by spinning the wheel!",
        "img":images.scratchCard,
        "btnName":"GET YOUR CARD",
        "brandsList":[
            {"id":1,"icon":images.brandLogo1},
            {"id":2,"icon":images.brandLogo2},
            {"id":3,"icon":images.brandLogo1},
        ]
    },
    {
        "id": 3,
        "title": "Fill Survey & Win Prizes",
        "heading":"SURVEY",
        "des":"Complete the survey to earn points, gems, coupons and more!",
        "img":images.notebookIcon,
        "btnName":"START SURVEY",
        "brandsList":[
            {"id":1,"icon":images.brandLogo1},
            {"id":2,"icon":images.brandLogo2},
            {"id":3,"icon":images.brandLogo1},
        ]
    },
    {
        "id": 4,
        "title": "Invite N Earn",
        "heading":"SCRATCH CARD",
        "des":"When you invite a friend,both of you get ",
        "img":images.inviteHumanIcon,
        "btnName":"INVITE A FRIEND"
    }
]
export default loyaltyHubList