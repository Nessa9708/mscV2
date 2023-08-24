const sanityClient = require('@sanity/client');
const imageURLBuilder = require('@sanity/image-url');
const blocksToHTML = require('@sanity/block-content-to-html');

const sanity = sanityClient({
    projectId: process.env.SANITY_PROJECT_ID,
    dataset: process.env.SANITY_DATASET,
    useCdn: true,
});

exports.handler = async () => {
    const query = '*[+type=="product"] | order(title asc)';
    const products = await sanity.fetch(query).then((results) => {
        const allProducts = results.map((product) => {
            const output ={
                id: project.slug.current,
                name: project.title,
                url: `${process.env.URL}/.netlify/functions/getProducts`,
            }
            return output;
        });
        return allProducts;
    });
    return {
        statusCode: 200,
        body: 'ok',
    };
}