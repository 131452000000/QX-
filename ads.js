// Quantumult X Rewrite Script to Remove Ads
// Ad URL pattern: example.com/ads/

// Define a rule to match the ad request URL
const adPattern = /example\.com\/ads\//;

// Check if the request URL matches the ad pattern
if (adPattern.test($request.url)) {
  // Create an empty response to block the ad
  let body = JSON.stringify({
    ads: []
  });

  // Send the modified response
  $done({ body });
} else {
  // If the request URL does not match the ad pattern, pass it through
  $done({});
}
[rewrite_local]
^https?:\/\/example\.com\/ads\/.*$ url script-response-body https://raw.githubusercontent.com/131452000000/QX-/main/ads.js

[mitm]
hostname = example.com
