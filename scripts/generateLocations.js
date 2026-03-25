import fs from 'fs';
import path from 'path';

// Parse image locations from `public/images/`
const imageDir = path.join(process.cwd(), 'public', 'images');

const getLocations = () => {
    try {
        const files = fs.readdirSync(imageDir);
        const images = files.filter(f => f.toLowerCase().endsWith('.jpeg') || f.toLowerCase().endsWith('.jpg') || f.toLowerCase().endsWith('.png'));

        const locationsMap = {};

        images.forEach(filename => {
            // e.g. "Amalapuram Rural, Andhra Pradesh,.jpeg" -> name = "Amalapuram Rural, Andhra Pradesh,"
            // "Krishna, Andhra Pradesh,2.jpeg" -> name = "Krishna, Andhra Pradesh,"

            // Removing extensions:
            let baseName = filename.replace(/\.(jpeg|jpg|png)$/i, '');

            // Clean up trailing numbers or characters after the comma sequence if applied
            // Usually, the base place name is before the numbers.
            // Let's rely on standard regex to strip trailing digits/symbols and extract the place
            let locationName = baseName.replace(/[0-9]+$/, '').replace(/,$/, '').trim();

            // Special cases like "solar-rural" or "WAAREE-solar-circuit" can be grouped as "Other"
            if (!locationName.includes(',')) {
                // locationName = "Other Projects"; // we can group them or keep it as is
            }

            if (!locationsMap[locationName]) {
                locationsMap[locationName] = [];
            }
            locationsMap[locationName].push(`/images/${filename}`);
        });

        // Group single items
        const OTHER_GROUP_NAME = "Other Places in Andhra";
        Object.keys(locationsMap).forEach(locName => {
            if (locationsMap[locName].length === 1 && locName !== OTHER_GROUP_NAME) {
                if (!locationsMap[OTHER_GROUP_NAME]) {
                    locationsMap[OTHER_GROUP_NAME] = [];
                }
                locationsMap[OTHER_GROUP_NAME].push(locationsMap[locName][0]);
                delete locationsMap[locName];
            }
        });

        // Convert to array format
        const groupedLocations = Object.keys(locationsMap).map((locName, index) => ({
            id: index + 1,
            title: locName,
            location: locName === OTHER_GROUP_NAME ? 'Various Locations, Andhra Pradesh' : (locName.split(',').pop().trim() || 'India'),
            coverImage: locationsMap[locName][0],
            images: locationsMap[locName]
        }));

        const outputFile = path.join(process.cwd(), 'src', 'data', 'locations.json');

        // ensure dir exists
        const dir = path.dirname(outputFile);
        if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

        fs.writeFileSync(outputFile, JSON.stringify(groupedLocations, null, 2));
        console.log(`Generated locations data with ${groupedLocations.length} locations to ${outputFile}`);
    } catch (e) {
        console.error("Error generating locations", e);
    }
}

getLocations();
