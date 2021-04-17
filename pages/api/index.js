import createBlog from "../../lib/createBlog";

export default async (req, res) => {
    const { method } = req;
    switch (method) {
        case "POST":
            try {
                const result = await(req.body)
                createBlog(result)
                res.status(201).json({success: true, data: result})
            } catch (error) {
                res.status(400).json({success: false})
            }
            break;
        default:
            res.status(400).json({success: false});
            break;
    }
}