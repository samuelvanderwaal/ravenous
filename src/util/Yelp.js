const apiKey = `WO7B8hnDHNmtsE6-CRucKwfiIJqnFI-EEbPachQxdC7SbseDzQWD7jTItqFHo_4WJlPcIHTxAwoYcxWqzQ5B4cn6KMh-hPNsTCNa8fnBimi6I7vMrlV3M1l5kc5MW3Yx`;
const Yelp = {
  search: function (term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
          { headers: {
            Authorization: `Bearer ${apiKey}`
            }
        }).then(response => {
          return response.json();
        }).then(jsonResponse => {
          if (jsonResponse.businesses) {
            jsonResponse.businesses.map(business => {
              return (
                {
                  id: business.id,
                  imageSrc: business.image_url,
                  name: business.name,
                  address: business.location.address1,
                  city: business.location.city,
                  state: business.location.state,
                  zipCode: business.location.zip_code,
                  category: business.categories[0].title,
                  rating: business.rating,
                  reviewCount: business.review_count
                }
              );
            });
          }
        });
  }
};

export default Yelp;
